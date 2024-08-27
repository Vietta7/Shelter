import petsData from './petsData.js';

export function initSlider() { 
    let currentIndex = 0;
    const slider = document.querySelector('.friends-cards-slider');

    function generateCards(startIndex, cardsToShow) {
        slider.innerHTML = '';

        for (let i = 0; i < cardsToShow; i++) {
            const petIndex = (startIndex + i) % petsData.length;
            const pet = petsData[petIndex];
            
            const cardHTML = `
                <div class="friend-card">
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

    function applySlideAnimation(direction) {
        if (direction === 'next') {
            slider.classList.add('slide-left');
        } else {
            slider.classList.add('slide-right');
        }

        
        setTimeout(() => {
            slider.classList.remove('slide-left', 'slide-right');
            updateCards();
        }, 500); 
    }

    document.querySelector('.slider__btn-next').addEventListener('click', () => {
        const screenWidth = window.innerWidth;
        const step = screenWidth < 768 ? 1 : (screenWidth < 1280 ? 2 : 3);
        currentIndex = (currentIndex + step) % petsData.length;
        applySlideAnimation('next');
    });

    document.querySelector('.slider__btn-prev').addEventListener('click', () => {
        const screenWidth = window.innerWidth;
        const step = screenWidth < 768 ? 1 : (screenWidth < 1280 ? 2 : 3);
        currentIndex = (currentIndex - step + petsData.length) % petsData.length;
        applySlideAnimation('prev');
    });

    window.addEventListener('resize', updateCards);

    updateCards();
}

