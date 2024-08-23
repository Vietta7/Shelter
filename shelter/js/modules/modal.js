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

    // Функция для отображения модального окна
    
    function showModal(petName) {
        const pet = petsData.find(p => p.name.toLowerCase() === petName.toLowerCase());

        if (pet) { // Проверяем, найден ли питомец
            const modalHTML = createModal(pet);
            modalsContainer.innerHTML = '';
            modalsContainer.insertAdjacentHTML('beforeend', modalHTML);
            modalsContainer.style.display = 'flex'; 
            document.getElementById(`${petName.toLowerCase()}-modal`).classList.add('active-modal');
            document.body.classList.add('no-scroll');
        } 
    }

    document.body.addEventListener('click', function(e) {
        const card = e.target.closest('.card');
        if (card) {
            const petName = card.getAttribute('data-name');
            if (petName) {  // Проверяем, существует ли data-name
                showModal(petName);
            }
        }
    });

    // Обработчик кликов по всему документу
    document.body.addEventListener('click', function(e) {
        
        const card = e.target.closest('.card');
        if (card) {
            const petName = card.getAttribute('data-name').toLowerCase();
            showModal(petName);
        }
    });

    // Обработчик кликов по модальному окну
    modalsContainer.addEventListener('click', function(e) {
        // Если кликнули на кнопку закрытия модального окна
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
