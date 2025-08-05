document.addEventListener('DOMContentLoaded', function() {
    const clickableParts = document.querySelectorAll('.clickable-part');
    const popupOverlay = document.getElementById('dynamic-popup-overlay');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const tooltip = document.getElementById('tooltip');

    // Podaci za svaki deo tela
    const partsData = {
        'Rame_levo': {
            title: 'Levo rame',
            description: 'Detaljan opis levog ramenog pojasa. Uključuje kosti, mišiće i ligamente...'
        },
        'Rame_desno': {
            title: 'Desno rame',
            description: 'Detaljan opis desnog ramenog pojasa. Uključuje kosti, mišiće i ligamente...'
        }
    };

    function showPopup(partData) {
        popupTitle.textContent = partData.title;
        popupDescription.textContent = partData.description;
        popupOverlay.classList.add('show');
    }

    function hidePopup() {
        popupOverlay.classList.remove('show');
    }

    clickableParts.forEach(part => {
        // Klik na deo
        part.addEventListener('click', () => {
            const partId = part.id;
            const data = partsData[partId];
            if (data) {
                showPopup(data);
            }
        });

        // Hover animacija i tooltip
        part.addEventListener('mouseenter', (event) => {
            const partId = part.id;
            const data = partsData[partId];
            if (data) {
                tooltip.textContent = data.title;
                tooltip.classList.add('show');
                tooltip.style.left = `${event.clientX}px`;
                tooltip.style.top = `${event.clientY - 15}px`;
            }
        });

        part.addEventListener('mouseleave', () => {
            tooltip.classList.remove('show');
        });

        part.addEventListener('mousemove', (event) => {
            tooltip.style.left = `${event.clientX}px`;
            tooltip.style.top = `${event.clientY - 15}px`;
        });
    });

    document.querySelector('.close-btn').addEventListener('click', hidePopup);
    popupOverlay.addEventListener('click', (event) => {
        if (event.target === popupOverlay) {
            hidePopup();
        }
    });
});