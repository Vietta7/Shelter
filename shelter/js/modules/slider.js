import petsData from './petsData.js';

export function initSlider() { 
    let currentIndex = 0;
    const slider = document.querySelector('.friends-cards-slider');
    const modalsContainer = document.getElementById('modals-container');

    function generateCards(startIndex, cardsToShow) {
        slider.innerHTML = '';

        for (let i = 0; i < cardsToShow; i++) {
            const petIndex = (startIndex + i) % petsData.length;
            const pet = petsData[petIndex];
            
            const cardHTML = `
                <div class="friend-card" data-name="${pet.name}">
                    <img src="${pet.img}" alt="${pet.name}" class="friend-photo">
                    <h4 class="friend-title">${pet.name}</h4>
                    <button class="friend-button">Learn more</button>
                </div>
            `;
            slider.innerHTML += cardHTML;
        }
    }

    function updateCards() {
        const screenWidth = window.innerWidth;
        let cardsToShow = 3; 

        if (screenWidth < 768) {
            cardsToShow = 1;
        } else if (screenWidth < 1280) {
            cardsToShow = 2;
        }

        generateCards(currentIndex, cardsToShow);
    }

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

    function showModal(petName) {
        const pet = petsData.find(p => p.name.toLowerCase() === petName.toLowerCase());

        if (pet) { 
            const modalHTML = createModal(pet);
            modalsContainer.innerHTML = '';
            modalsContainer.insertAdjacentHTML('beforeend', modalHTML);
            modalsContainer.style.display = 'flex'; 
            document.getElementById(`${petName.toLowerCase()}-modal`).classList.add('active-modal');
            document.body.classList.add('no-scroll');
        } 
    }

    slider.addEventListener('click', (event) => {
        const card = event.target.closest('.friend-card');
        if (card) {
            const petName = card.getAttribute('data-name');
            showModal(petName); 
        }
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

    document.querySelector('.slider__btn-next').addEventListener('click', () => {
        const screenWidth = window.innerWidth;
        const step = screenWidth < 768 ? 1 : (screenWidth < 1280 ? 2 : 3);
        
        currentIndex = (currentIndex + step) % petsData.length;
        updateCards();
    });

    document.querySelector('.slider__btn-prev').addEventListener('click', () => {
        const screenWidth = window.innerWidth;
        const step = screenWidth < 768 ? 1 : (screenWidth < 1280 ? 2 : 3);
        
        currentIndex = (currentIndex - step + petsData.length) % petsData.length;
        updateCards();
    });

    window.addEventListener('resize', updateCards);

    updateCards();
}
