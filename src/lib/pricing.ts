export type PackageId = "lead" | "sales" | "scale";

export interface PackagePricing {
  setupFee: string;
  monthlyFee: string;
  monthlyConversationQuota: string;
}

export interface PricingSnapshot {
  version: 1;
  updatedAt: string | null;
  packages: Record<PackageId, PackagePricing>;
}

export const STORAGE_KEY = "omdi.demov2.pricing.v1";
export const PACKAGE_IDS: PackageId[] = ["lead", "sales", "scale"];
export const PRICE_FIELDS: (keyof PackagePricing)[] = [
  "setupFee",
  "monthlyFee",
  "monthlyConversationQuota",
];

const FALLBACK_VALUE = "X";
const MAX_VALUE_LENGTH = 40;

function createPackagePricing(): PackagePricing {
  return {
    setupFee: FALLBACK_VALUE,
    monthlyFee: FALLBACK_VALUE,
    monthlyConversationQuota: FALLBACK_VALUE,
  };
}

export function createDefaultPricing(): PricingSnapshot {
  return {
    version: 1,
    updatedAt: null,
    packages: {
      lead: createPackagePricing(),
      sales: createPackagePricing(),
      scale: createPackagePricing(),
    },
  };
}

export function sanitizePricingValue(value: unknown): string {
  if (typeof value !== "string") return FALLBACK_VALUE;
  const normalized = value.trim().slice(0, MAX_VALUE_LENGTH);
  return normalized || FALLBACK_VALUE;
}

export function sanitizePricingSnapshot(value: unknown): PricingSnapshot {
  const fallback = createDefaultPricing();
  if (!value || typeof value !== "object") return fallback;

  const candidate = value as Partial<PricingSnapshot>;
  const packages =
    candidate.packages && typeof candidate.packages === "object"
      ? candidate.packages
      : fallback.packages;

  for (const packageId of PACKAGE_IDS) {
    const packageCandidate =
      packages[packageId] && typeof packages[packageId] === "object"
        ? packages[packageId]
        : fallback.packages[packageId];

    for (const field of PRICE_FIELDS) {
      fallback.packages[packageId][field] = sanitizePricingValue(
        packageCandidate[field],
      );
    }
  }

  fallback.updatedAt =
    typeof candidate.updatedAt === "string" ? candidate.updatedAt : null;
  return fallback;
}

export function readPricing(storage: Storage = window.localStorage): PricingSnapshot {
  try {
    const raw = storage.getItem(STORAGE_KEY);
    return raw ? sanitizePricingSnapshot(JSON.parse(raw)) : createDefaultPricing();
  } catch {
    return createDefaultPricing();
  }
}

export function writePricing(
  snapshot: PricingSnapshot,
  storage: Storage = window.localStorage,
): PricingSnapshot {
  const clean = sanitizePricingSnapshot({
    ...snapshot,
    updatedAt: new Date().toISOString(),
  });
  storage.setItem(STORAGE_KEY, JSON.stringify(clean));
  return clean;
}

export function resetPricing(storage: Storage = window.localStorage): PricingSnapshot {
  storage.removeItem(STORAGE_KEY);
  return createDefaultPricing();
}

export function syncPricingElements(
  snapshot = readPricing(),
  root: ParentNode = document,
): void {
  root.querySelectorAll<HTMLElement>("[data-price-package][data-price-field]").forEach(
    (element) => {
      const packageId = element.dataset.pricePackage as PackageId | undefined;
      const field = element.dataset.priceField as keyof PackagePricing | undefined;
      if (!packageId || !field || !PACKAGE_IDS.includes(packageId)) return;
      element.textContent = snapshot.packages[packageId][field];
    },
  );
}
