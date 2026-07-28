const pages = [...document.querySelectorAll("[data-page]")];
const navLinks = [...document.querySelectorAll("[data-route]")];

function showPage() {
  const route = location.hash.replace("#", "") || "anasayfa";
  const exists = pages.some((page) => page.dataset.page === route);
  const activeRoute = exists ? route : "anasayfa";

  pages.forEach((page) => {
    page.hidden = page.dataset.page !== activeRoute;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.route === activeRoute);
  });
  window.scrollTo({ top: 0, behavior: "instant" });
}

window.addEventListener("hashchange", showPage);
showPage();

document.querySelector("#contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const note = event.currentTarget.querySelector(".form-note");
  note.textContent = "Demo formu alındı. Gerçek sürümde bu mesaj Resend ile gönderilecek.";
});
