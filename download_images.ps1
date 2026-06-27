$urls = @{
    "https://lightsteelblue-jackal-792193.hostingersite.com/wp-content/uploads/2025/09/Tropicana11-1.jpg" = "tropicana11-1.jpg"
    "https://lightsteelblue-jackal-792193.hostingersite.com/wp-content/uploads/2025/09/Tropicana10.jpg" = "tropicana10.jpg"
    "https://lightsteelblue-jackal-792193.hostingersite.com/wp-content/uploads/2025/09/Tropicana8.jpg" = "tropicana8.jpg"
    "https://lightsteelblue-jackal-792193.hostingersite.com/wp-content/uploads/2025/09/Tropicana4.jpg" = "tropicana4.jpg"
    "https://lightsteelblue-jackal-792193.hostingersite.com/wp-content/uploads/2025/09/Tropicana3.jpg" = "tropicana3.jpg"
    "https://lightsteelblue-jackal-792193.hostingersite.com/wp-content/uploads/2025/09/Tropicana2.jpg" = "tropicana2.jpg"
    "https://lightsteelblue-jackal-792193.hostingersite.com/wp-content/uploads/2025/09/Courtyard-Dallas5.jpg" = "courtyard-dallas5.jpg"
    "https://lightsteelblue-jackal-792193.hostingersite.com/wp-content/uploads/2025/09/Courtyard-Dallas2.jpg" = "courtyard-dallas2.jpg"
    "https://lightsteelblue-jackal-792193.hostingersite.com/wp-content/uploads/2025/09/Courtyard-Dallas3.jpg" = "courtyard-dallas3.jpg"
    "https://lightsteelblue-jackal-792193.hostingersite.com/wp-content/uploads/2025/09/Courtyard-Dallas4.jpg" = "courtyard-dallas4.jpg"
    "https://lightsteelblue-jackal-792193.hostingersite.com/wp-content/uploads/2025/09/Courtyard-Dallas9.jpg" = "courtyard-dallas9.jpg"
    "https://lightsteelblue-jackal-792193.hostingersite.com/wp-content/uploads/2025/09/Courtyard-Dallas1-768x512-2.jpg" = "courtyard-dallas1.jpg"
    "https://smooth-investor-makeover.lovable.app/assets/tropicana1-W34APvtG.jpg" = "tropicana1-lovable.jpg"
    "https://smooth-investor-makeover.lovable.app/assets/tropicana2-B2alMWa0.jpg" = "tropicana2-lovable.jpg"
    "https://smooth-investor-makeover.lovable.app/assets/tropicana3-B3WcT-ta.jpg" = "tropicana3-lovable.jpg"
    "https://smooth-investor-makeover.lovable.app/assets/courtyard1-1o2beWR8.jpg" = "courtyard1.jpg"
    "https://smooth-investor-makeover.lovable.app/assets/courtyard2-D23JD4p1.jpg" = "courtyard2.jpg"
    "https://smooth-investor-makeover.lovable.app/assets/courtyard3-DuF_K9q4.jpg" = "courtyard3.jpg"
    "https://smooth-investor-makeover.lovable.app/assets/founder-Dsz1bCma.jpg" = "founder.jpg"
    "https://smooth-investor-makeover.lovable.app/assets/hero-C-0iZe-z.jpg" = "hero.jpg"
    "http://decadescapitalgroup.com/wp-content/uploads/2026/05/sv-537x800-1-e1779484712239.png" = "sv.png"
}

$imagesDir = "images"
if (-not (Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir | Out-Null
}

foreach ($url in $urls.Keys) {
    $filename = $urls[$url]
    $filepath = Join-Path $imagesDir $filename
    if (-not (Test-Path $filepath)) {
        try {
            Invoke-WebRequest -Uri $url -OutFile $filepath -UseBasicParsing -ErrorAction Stop
            Write-Host "Downloaded: $filename"
        } catch {
            Write-Host "Failed to download $url : $_"
        }
    }
}

$files = @(".\index.html") + (Get-ChildItem -Path ".\pages" -Filter "*.html").FullName + (Get-ChildItem -Path ".\css" -Filter "*.css").FullName

foreach ($file in $files) {
    $content = Get-Content -Path $file -Encoding UTF8 -Raw
    $originalContent = $content
    
    $isRoot = ($file -match 'index\.html$')
    $prefix = if ($isRoot) { "images/" } else { "../images/" }
    
    foreach ($url in $urls.Keys) {
        $filename = $urls[$url]
        $replacement = $prefix + $filename
        $content = $content.Replace($url, $replacement)
    }
    
    if ($content -ne $originalContent) {
        Set-Content -Path $file -Value $content -Encoding UTF8
        Write-Host "Updated links in $file"
    }
}
