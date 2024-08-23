
import { initBurgerMenu } from './modules/burgerMenu.js';
import { initModal } from './modules/modal.js';
import { generateCards } from './modules/cardGenerator.js';
import { initPagination } from './modules/pagination.js';


document.addEventListener('DOMContentLoaded', function() {
    initBurgerMenu();
    generateCards('cards-container');
    initPagination();  
    initModal();
});
