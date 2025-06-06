document.addEventListener('DOMContentLoaded', function() {
    const mods = [

    ];

    const modList = document.getElementById('mod-list');

    mods.forEach(mod => {
        const modItem = document.createElement('div');
        modItem.classList.add('mod-item');
        modItem.innerHTML = `<h2>${mod.name}</h2><p>${mod.description}</p><p>${mod.download}</p>`;
        modList.appendChild(modItem);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const modItemElements = document.querySelectorAll('.mod-item');

    modItemElements.forEach(function(element) {
        element.addEventListener('click', function() {
            const url = element.getAttribute('data-url');
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});
