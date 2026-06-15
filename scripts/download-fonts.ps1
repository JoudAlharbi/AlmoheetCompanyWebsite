$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot

New-Item -ItemType Directory -Force -Path "$root\fonts\inter", "$root\fonts\tajawal" | Out-Null

$googleFonts = "https://github.com/google/fonts/raw/main/ofl"

Invoke-WebRequest -Uri "$googleFonts/inter/Inter%5Bopsz%2Cwght%5D.ttf" -OutFile "$root\fonts\inter\Inter-Variable.ttf"

$tajawalFiles = @{
  300 = "Tajawal-Light.ttf"
  400 = "Tajawal-Regular.ttf"
  500 = "Tajawal-Medium.ttf"
  700 = "Tajawal-Bold.ttf"
  800 = "Tajawal-ExtraBold.ttf"
  900 = "Tajawal-Black.ttf"
}

foreach ($entry in $tajawalFiles.GetEnumerator()) {
  $weight = $entry.Key
  $fileName = $entry.Value
  Invoke-WebRequest -Uri "$googleFonts/tajawal/$fileName" -OutFile "$root\fonts\tajawal\$fileName"
}

Get-ChildItem -Recurse "$root\fonts" | Format-Table Name, Length -AutoSize
