$files = Get-ChildItem -Path "." -Filter "*.html" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw

    # 1. Update French nav
    $content = $content -replace '(<a href="economie\.html" class="nav-link.*?">Économie</a>)', "`$1`n        <a href=`"boutique.html`" class=`"nav-link`">Boutique</a>"
    $content = $content -replace '(<a href="economie\.html" class="mobile-menu__link.*?">Économie</a>)', "`$1`n    <a href=`"boutique.html`" class=`"mobile-menu__link`">Boutique</a>"
    $content = $content -replace '(<li><i class="ph ph-caret-right"></i> <a href="economie\.html">Économie Locale</a></li>)', "`$1`n          <li><i class=`"ph ph-caret-right`"></i> <a href=`"boutique.html`">Boutique & Terroir</a></li>"

    # 2. Update English nav
    $content = $content -replace '(<a href="economie\.html" class="nav-link.*?">Economy</a>)', "`$1`n        <a href=`"boutique.html`" class=`"nav-link`">Shop</a>"
    $content = $content -replace '(<a href="economie\.html" class="mobile-menu__link.*?">Economy</a>)', "`$1`n    <a href=`"boutique.html`" class=`"mobile-menu__link`">Shop</a>"
    $content = $content -replace '(<li><i class="ph ph-caret-right"></i> <a href="economie\.html">Local Economy</a></li>)', "`$1`n          <li><i class=`"ph ph-caret-right`"></i> <a href=`"boutique.html`">Local Shop</a></li>"

    # 3. Update Arabic nav
    $content = $content -replace '(<a href="economie\.html" class="nav-link.*?">الاقتصاد</a>)', "`$1`n        <a href=`"boutique.html`" class=`"nav-link`">المتجر</a>"
    $content = $content -replace '(<a href="economie\.html" class="mobile-menu__link.*?">الاقتصاد</a>)', "`$1`n    <a href=`"boutique.html`" class=`"mobile-menu__link`">المتجر</a>"
    $content = $content -replace '(<li><i class="ph ph-caret-left"></i> <a href="economie\.html">الاقتصاد المحلي</a></li>)', "`$1`n          <li><i class=`"ph ph-caret-left`"></i> <a href=`"boutique.html`">متجر المنتجات</a></li>"

    # 4. Update Tamazight nav
    $content = $content -replace '(<a href="economie\.html" class="nav-link.*?">ⵜⴰⴷⴰⵎⵙⴰ</a>)', "`$1`n        <a href=`"boutique.html`" class=`"nav-link`">ⵜⴰⵃⴰⵏⵓⵜ</a>"
    $content = $content -replace '(<a href="economie\.html" class="mobile-menu__link.*?">ⵜⴰⴷⴰⵎⵙⴰ</a>)', "`$1`n    <a href=`"boutique.html`" class=`"mobile-menu__link`">ⵜⴰⵃⴰⵏⵓⵜ</a>"
    $content = $content -replace '(<li><i class="ph ph-caret-right"></i> <a href="economie\.html">ⵜⴰⴷⴰⵎⵙⴰ</a></li>)', "`$1`n          <li><i class=`"ph ph-caret-right`"></i> <a href=`"boutique.html`">ⵜⴰⵃⴰⵏⵓⵜ</a></li>"

    Set-Content -Path $file.FullName -Value $content -Encoding UTF8
}
