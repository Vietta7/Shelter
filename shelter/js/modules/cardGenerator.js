import { petsData } from './petsData.js';

export function generateCards(containerId, layout = 'grid') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const cardClass = layout === 'slider' ? 'slider-card' : 'grid-card';
    container.innerHTML = petsData.map(pet => `
        <div class="card pet-card ${cardClass}" data-name="${pet.name}">
            <img class="card-photo" src="${pet.img}" alt="${pet.name}">
            <h4 class="card-title">${pet.name}</h4>
            <button class="button-card">Learn more</button>
        </div>
    `).join('');
}
