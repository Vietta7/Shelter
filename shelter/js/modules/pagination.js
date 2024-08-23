import { petsData } from './petsData.js';
import { initModal } from './modal.js';

let currentPage = 1;
let totalPages = 0;
let shuffledPages = [];
let petsPerPage = 8; 

// Функция перемешивания массива
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Генерация массива карточек для всех страниц
function generateShuffledPages() {
    let allPets = [];

    petsData.forEach(pet => {
        for (let i = 0; i < 6; i++) {
            allPets.push({ ...pet });  
        }
    });

    
    shuffleArray(allPets);

    const pages = [];
    const petsOnPage = new Set();

    while (allPets.length) {
        const currentPage = [];
        petsOnPage.clear();

        while (currentPage.length < petsPerPage && allPets.length) {
            const pet = allPets.shift();

            if (!petsOnPage.has(pet.name)) {
                currentPage.push(pet);
                petsOnPage.add(pet.name);
            } else {
                allPets.push(pet); 
            }
        }
        pages.push(currentPage);
    }
    return pages;
}

// Получение карточек для текущей страницы
function getPetsForPage(page) {
    return shuffledPages[page - 1] || [];
}

// Обновление количества отображаемых страниц в зависимости от ширины экрана
function updatePagesToShow() {
    const width = window.innerWidth;

    if (width >= 1280) {
        petsPerPage = 8;
    } else if (width >= 768) {
        petsPerPage = 6;
    } else {
        petsPerPage = 3;
    }

    const allPets = shuffledPages.flat();
    shuffledPages = [];

    while (allPets.length) {
        const currentPage = [];
        const petsOnPage = new Set();

        while (currentPage.length < petsPerPage && allPets.length) {
            const pet = allPets.shift();

            if (!petsOnPage.has(pet.name)) {
                currentPage.push(pet);
                petsOnPage.add(pet.name);
            } else {
                allPets.push(pet);
            }
        }
        shuffledPages.push(currentPage);
    }
    totalPages = shuffledPages.length;

    if (currentPage > totalPages) {
        currentPage = totalPages;
    }
}

// Обновление пагинационных кнопок
function updatePaginationButtons() {
    const buttons = document.querySelectorAll('.pagination-button');
    buttons.forEach(button => {
        button.classList.remove('active', 'inactive');
    });

    const firstButton = document.querySelector('.pagination-button[data-action="first"]');
    const prevButton = document.querySelector('.pagination-button[data-action="prev"]');
    const nextButton = document.querySelector('.pagination-button[data-action="next"]');
    const lastButton = document.querySelector('.pagination-button[data-action="last"]');
    const pageNumberButton = document.querySelector('.pagination-button.button-number');

    if (pageNumberButton) {
        pageNumberButton.textContent = currentPage;
    }

    if (currentPage === 1) {
        firstButton.classList.add('inactive');
        prevButton.classList.add('inactive');
        nextButton.classList.add('active');
        lastButton.classList.add('active');
    } else if (currentPage === totalPages) {
        nextButton.classList.add('inactive');
        lastButton.classList.add('inactive');
        firstButton.classList.add('active');
        prevButton.classList.add('active');
    } else {
        nextButton.classList.add('active');
        lastButton.classList.add('active');
        firstButton.classList.add('active');
        prevButton.classList.add('active');
    }
}

// Обновление отображения страниц
function updatePageNumbers() {
    const pageNumberButton = document.querySelector('.pagination-button.button-number');
    if (pageNumberButton) {
        pageNumberButton.textContent = currentPage;
    }
}

function debounce(func, wait) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), wait);
    };
}

function handleResize() {
    updatePagesToShow();
    renderCards();
    updatePageNumbers();
    updatePaginationButtons();
}

window.addEventListener('resize', debounce(handleResize, 200));

// Обновить рендеринг карточек
function renderCards() {
    const container = document.querySelector('#cards-container');
    
    clearPreviousCards(); 
    
    const pets = getPetsForPage(currentPage);

    pets.forEach(pet => {
        const card = document.createElement('div');
        card.className = 'card pet-card';
        card.dataset.name = pet.name;
        card.innerHTML = `
            <img class="card-photo" src="${pet.img}" alt="${pet.name}">
            <h4 class="card-title">${pet.name}</h4>
            <button class="button-card">Learn more</button>
        `;
        container.appendChild(card);
    });
}

function clearPreviousCards() {
    const container = document.querySelector('#cards-container');
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function handlePageChange(newPage) {
    if (newPage < 1 || newPage > totalPages) return;
    currentPage = newPage;
    renderCards();
    updatePageNumbers();
    updatePaginationButtons();
}

export function initPagination() {
    const container = document.querySelector('.pagination-container');

    shuffledPages = generateShuffledPages(); 

    updatePagesToShow();

    container.innerHTML = `
        <button class="pagination-button" data-action="first"><<</button>
        <button class="pagination-button" data-action="prev"><</button>
        <button class="pagination-button button-number">${currentPage}</button>
        <button class="pagination-button" data-action="next">></button>
        <button class="pagination-button" data-action="last">>></button>
    `;

    container.addEventListener('click', (event) => {
        const button = event.target.closest('.pagination-button');
        if (button) {
            const action = button.getAttribute('data-action');

            if (action === 'next') handlePageChange(currentPage + 1);
            if (action === 'prev') handlePageChange(currentPage - 1);
            if (action === 'first') handlePageChange(1);
            if (action === 'last') handlePageChange(totalPages);
        }
    });

    renderCards();
    updatePageNumbers();
    updatePaginationButtons();
}
