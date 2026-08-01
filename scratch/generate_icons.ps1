Add-Type -AssemblyName System.Drawing

$sourcePath = "public/brand/omdi-icon-source.png"
$source = [System.Drawing.Image]::FromFile($sourcePath)

function Save-ResizedIcon([int]$w, [int]$h, [string]$outPath) {
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($source, 0, 0, $w, $h)
    $bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose()
    $bmp.Dispose()
    Write-Host "Created $outPath (${w}x${h})"
}

Save-ResizedIcon 48 48 "public/favicon.png"
Save-ResizedIcon 48 48 "public/favicon-48x48.png"
Save-ResizedIcon 96 96 "public/favicon-96x96.png"
Save-ResizedIcon 192 192 "public/favicon-192x192.png"
Save-ResizedIcon 512 512 "public/favicon-512x512.png"
Save-ResizedIcon 180 180 "public/apple-touch-icon.png"

$source.Dispose()
