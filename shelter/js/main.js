
import { initBurgerMenu } from './modules/burgerMenu.js';
import { initModal } from './modules/modal.js';
import { generateCards } from './modules/cardGenerator.js';
import { initPagination } from './modules/pagination.js';
import { initSlider } from './modules/slider.js'; 

document.addEventListener('DOMContentLoaded', function() {
    const paginationContainer = document.querySelector('.pagination-container');
    
    if (paginationContainer) {
        initPagination();
    }
    
    initBurgerMenu();
    generateCards('cards-container');
    initModal();
    initSlider();
});