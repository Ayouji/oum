const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else {
            if (file.endsWith('.html')) results.push(file);
        }
    });
    return results;
}

const files = walk('.');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // 1. French
    content = content.replace(/(<a href="economie\.html" class="nav-link.*?">Économie<\/a>)/g, '$1\n        <a href="boutique.html" class="nav-link">Boutique</a>');
    content = content.replace(/(<a href="economie\.html" class="mobile-menu__link.*?">Économie<\/a>)/g, '$1\n    <a href="boutique.html" class="mobile-menu__link">Boutique</a>');
    content = content.replace(/(<li><i class="ph ph-caret-right"><\/i> <a href="economie\.html">Économie Locale<\/a><\/li>)/g, '$1\n          <li><i class="ph ph-caret-right"></i> <a href="boutique.html">Boutique & Terroir</a></li>');

    // 2. English
    content = content.replace(/(<a href="economie\.html" class="nav-link.*?">Economy<\/a>)/g, '$1\n        <a href="boutique.html" class="nav-link">Shop</a>');
    content = content.replace(/(<a href="economie\.html" class="mobile-menu__link.*?">Economy<\/a>)/g, '$1\n    <a href="boutique.html" class="mobile-menu__link">Shop</a>');
    content = content.replace(/(<li><i class="ph ph-caret-right"><\/i> <a href="economie\.html">Local Economy<\/a><\/li>)/g, '$1\n          <li><i class="ph ph-caret-right"></i> <a href="boutique.html">Local Shop</a></li>');

    // 3. Arabic
    content = content.replace(/(<a href="economie\.html" class="nav-link.*?">الاقتصاد<\/a>)/g, '$1\n        <a href="boutique.html" class="nav-link">المتجر</a>');
    content = content.replace(/(<a href="economie\.html" class="mobile-menu__link.*?">الاقتصاد<\/a>)/g, '$1\n    <a href="boutique.html" class="mobile-menu__link">المتجر</a>');
    content = content.replace(/(<li><i class="ph ph-caret-left"><\/i> <a href="economie\.html">الاقتصاد المحلي<\/a><\/li>)/g, '$1\n          <li><i class="ph ph-caret-left"></i> <a href="boutique.html">متجر المنتجات</a></li>');

    // 4. Tamazight
    content = content.replace(/(<a href="economie\.html" class="nav-link.*?">ⵜⴰⴷⴰⵎⵙⴰ<\/a>)/g, '$1\n        <a href="boutique.html" class="nav-link">ⵜⴰⵃⴰⵏⵓⵜ</a>');
    content = content.replace(/(<a href="economie\.html" class="mobile-menu__link.*?">ⵜⴰⴷⴰⵎⵙⴰ<\/a>)/g, '$1\n    <a href="boutique.html" class="mobile-menu__link">ⵜⴰⵃⴰⵏⵓⵜ</a>');
    content = content.replace(/(<li><i class="ph ph-caret-right"><\/i> <a href="economie\.html">ⵜⴰⴷⴰⵎⵙⴰ<\/a><\/li>)/g, '$1\n          <li><i class="ph ph-caret-right"></i> <a href="boutique.html">ⵜⴰⵃⴰⵏⵓⵜ</a></li>');

    fs.writeFileSync(file, content, 'utf8');
});
