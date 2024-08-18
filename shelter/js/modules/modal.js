import { petsData } from './petsData.js';

export function initModal() {
    const modalsContainer = document.getElementById('modals-container');

    function createModal(pet) {
        return `
        <div class="modal" id="${pet.name.toLowerCase()}-modal">
            <button class="close-modal">&times;</button>
            <div class="pet-card-modal">
                <img src="${pet.img}" alt="${pet.name}">
                <div class="content-modal">
                    <h4 class="title-modal">${pet.name}</h4>
                    <p class="subtitle-modal">${pet.type} - ${pet.breed}</p>
                    <p class="info-text-modal">${pet.description}</p>
                    <ul class="info-modal">
                        <li class="personal-info-modal"><b>Age:</b> ${pet.age}</li>
                        <li class="personal-info-modal"><b>Inoculations:</b> ${pet.inoculations.join(', ')}</li>
                        <li class="personal-info-modal"><b>Diseases:</b> ${pet.diseases.join(', ')}</li>
                        <li class="personal-info-modal"><b>Parasites:</b> ${pet.parasites.join(', ')}</li>
                    </ul>
                </div>
            </div>
        </div>
        `;
    }

    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            const petName = this.getAttribute('data-name').toLowerCase();
            const pet = petsData.find(p => p.name.toLowerCase() === petName);

            if (pet) {
                const modalHTML = createModal(pet);
                modalsContainer.innerHTML = '';
                modalsContainer.insertAdjacentHTML('beforeend', modalHTML);
                modalsContainer.style.display = 'flex'; 
                document.getElementById(`${petName}-modal`).classList.add('active-modal');
                document.body.classList.toggle('no-scroll');
            } else {
                console.error(`Pet data not found for ${petName}`);
            }
        });
    });

    modalsContainer.addEventListener('click', function(e) {
        if (e.target.classList.contains('close-modal')) {
            e.target.closest('.modal').remove();
            document.body.classList.remove('no-scroll');
            if (modalsContainer.children.length === 0) {
                modalsContainer.style.display = 'none';
            }
        } else if (e.target === this) {
            const activeModal = document.querySelector('.modal.active-modal');
            if (activeModal) {
                activeModal.remove();
                if (modalsContainer.children.length === 0) {
                    modalsContainer.style.display = 'none';
                }
                document.body.classList.remove('no-scroll');
            }
        }
    });
}
