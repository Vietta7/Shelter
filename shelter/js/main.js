// // BURGER

// document.addEventListener("DOMContentLoaded", function(){
//     const burgerMenu = document.getElementById("burger-menu");
//     const header = document.querySelector(".header");
//     const overlay = document.getElementById("overlay");
//     const navLinks = document.querySelectorAll(".nav-link", ".link-active");
//     const body = document.body;
    
//     // открыть бургер-меню
//     burgerMenu.addEventListener("click", function(){
//         header.classList.toggle("open");
//         body.classList.toggle('no-scroll');
        
//     });
//     // открыть бургер меню на второй странице
//     burgerMenu.addEventListener("click", function(){
//         body.classList.toggle('open');
//         body.classList.toggle('no-scroll');
//     });

//     // закрыть бургер-меню при нажатии на область
//     overlay.addEventListener("click", function(){
//         header.classList.remove("open");
//         body.classList.remove('open');
//     });

//     overlay.addEventListener('click', function(){
//         body.classList.remove('open');
//     }) 

//     // закрыть меню и убрать затемнение при нажатии на ссылку в меню
//     navLinks.forEach(link => {
//         link.addEventListener("click", function(event) {
//             const href = link.getAttribute("href");
//             if (!href.startsWith("#")) {
//                 // Если ссылка ведет на другую страницу, сначала плавно закрываем меню
//                 event.preventDefault(); // Останавливаем стандартный переход по ссылке
//                 header.classList.remove("open");
//                 body.classList.remove('open');
//                 body.classList.remove('no-scroll');

//                 // Ждем завершения анимации, затем переходим по ссылке
//                 setTimeout(() => {
//                     window.location.href = href;
//                 }, 700); // Задержка соответствует времени анимации в CSS
//             } else {
//                 // Для ссылок на той же странице просто закрываем меню
//                 header.classList.remove("open");
//                 body.classList.remove('open');
//                 body.classList.remove('no-scroll');
//             }
//         });
//     });

//     navLinks.forEach(link => {
//         link.addEventListener("click", function(event) {
//             const href = link.getAttribute("href");
//             if (!href.startsWith("#")) {
//                 // Если ссылка ведет на другую страницу, сначала плавно закрываем меню
//                 event.preventDefault(); // Останавливаем стандартный переход по ссылке
                
//                 body.classList.remove('open');
//                 body.classList.remove('no-scroll');

//                 // Ждем завершения анимации, затем переходим по ссылке
//                 setTimeout(() => {
//                     window.location.href = href;
//                 }, 700); // Задержка соответствует времени анимации в CSS
//             } else {
//                 // Для ссылок на той же странице просто закрываем меню
                
//                 body.classList.remove('open');
//                 body.classList.remove('no-scroll');
//             }
//         });
//     });


//     navLinks.forEach(link => {
//         link.addEventListener('click', function() {
//             body.classList.remove('open');
//         })
//     });
//     // закрыть меню при нажатии на эскейп
//     window.addEventListener('keydown', function(e) {
//         if (e.key === "Escape") {
//             header.classList.remove("open");
//             body.classList.remove('open');
//         }
//     });

//     window.addEventListener('keydown', function(e) {
//         if (e.key === "Escape") {
//             body.classList.remove('open');
//         }
//     });
    
//      // Закрыть меню перед переходом на другую страницу
//      window.addEventListener("beforeunload", function() {
//         header.classList.remove("open");
//         body.classList.remove('open');
//     });
// });


// // MODAL

// const petsData = [
//     {
//         name: "Jennifer",
//         img: "./img/modal/jennifer.png",
//         type: "Dog",
//         breed: "Labrador",
//         description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
//         age: "2 months",
//         inoculations: ["none"],
//         diseases: ["none"],
//         parasites: ["none"]
//     },
//     {
//         name: "Sophia",
//         img: "./img/modal/sophia.png",
//         type: "Dog",
//         breed: "Shih tzu",
//         description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
//         age: "1 month",
//         inoculations: ["parvovirus"],
//         diseases: ["none"],
//         parasites: ["none"]
//     },
//     {
//         name: "Woody",
//         img: "./img/modal/woody.png",
//         type: "Dog",
//         breed: "Golden Retriever",
//         description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
//         age: "3 years 6 months",
//         inoculations: ["adenovirus", "distemper"],
//         diseases: ["right back leg mobility reduced"],
//         parasites: ["none"]
//       },
//       {
//         name: "Scarlett",
//         img: "./img/modal/scarlett.png",
//         type: "Dog",
//         breed: "Jack Russell Terrier",
//         description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
//         age: "3 months",
//         inoculations: ["parainfluenza"],
//         diseases: ["none"],
//         parasites: ["none"]
//       },
//       {
//         name: "Katrine",
//         img: "./img/modal/katrine.png",
//         type: "Cat",
//         breed: "British Shorthair",
//         description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
//         age: "6 months",
//         inoculations: ["panleukopenia"],
//         diseases: ["none"],
//         parasites: ["none"]
//       },
//       {
//         name: "Timmy",
//         img: "./img/modal/timmy.png",
//         type: "Cat",
//         breed: "British Shorthair",
//         description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
//         age: "2 years 3 months",
//         inoculations: ["calicivirus", "viral rhinotracheitis"],
//         diseases: ["kidney stones"],
//         parasites: ["none"]
//       },
//       {
//         name: "Freddie",
//         img: "./img/modal/freddie.png",
//         type: "Cat",
//         breed: "British Shorthair",
//         description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
//         age: "2 months",
//         inoculations: ["rabies"],
//         diseases: ["none"],
//         parasites: ["none"]
//       },
//       {
//         name: "Charly",
//         img: "./img/modal/charly.png",
//         type: "Dog",
//         breed: "Jack Russell Terrier",
//         description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
//         age: "8 years",
//         inoculations: ["bordetella bronchiseptica", "leptospirosis"],
//         diseases: ["deafness", "blindness"],
//         parasites: ["lice", "fleas"]
//       }
// ];
//   document.addEventListener('DOMContentLoaded', function() {
//     const modalsContainer = document.getElementById('modals-container');

//     // Функция для создания модального окна
//     function createModal(pet) {
//         return `
//         <div class="modal" id="${pet.name.toLowerCase()}-modal">
//             <button class="close-modal">&times;</button>
//             <div class="pet-card-modal">
//                 <img src="${pet.img}" alt="${pet.name}">
//                 <div class="content-modal">
//                     <h4 class="title-modal">${pet.name}</h4>
//                     <p class="subtitle-modal">${pet.type} - ${pet.breed}</p>
//                     <p class="info-text-modal">${pet.description}</p>
//                     <ul class="info-modal">
//                         <li class="personal-info-modal"><b>Age:</b> ${pet.age}</li>
//                         <li class="personal-info-modal"><b>Inoculations:</b> ${pet.inoculations.join(', ')}</li>
//                         <li class="personal-info-modal"><b>Diseases:</b> ${pet.diseases.join(', ')}</li>
//                         <li class="personal-info-modal"><b>Parasites:</b> ${pet.parasites.join(', ')}</li>
//                     </ul>
//                 </div>
//             </div>
//         </div>
//         `;
//     }

//     // Открытие модального окна
//     document.querySelectorAll('.card').forEach(card => {
        
//         card.addEventListener('click', function() {
//             // Открытие модального окна по клику на карточку питомца
//             const petName = this.getAttribute('data-name').toLowerCase();
//             const pet = petsData.find(p => p.name.toLowerCase() === petName);

//             if (pet) {
//                 const modalHTML = createModal(pet);
                
//                 // Очищаем предыдущие модальные окна
//                 modalsContainer.innerHTML = '';
                
//                 // Добавляем новое модальное окно в контейнер
//                 modalsContainer.insertAdjacentHTML('beforeend', modalHTML);
                
//                 // Показываем контейнер
//                 modalsContainer.style.display = 'flex'; 
                
//                 // Добавляем класс для отображения модального окна
//                 document.getElementById(`${petName}-modal`).classList.add('active-modal');
//                 document.body.classList.toggle('no-scroll');
//             } else {
//                 console.error(`Pet data not found for ${petName}`);
//             }
//         });
//     });

//     // Закрытие модального окна по нажатию на крестик
//     modalsContainer.addEventListener('click', function(e) {
//         if (e.target.classList.contains('close-modal')) {
//             e.target.closest('.modal').remove(); // Удаляем текущее модальное окно
//             document.body.classList.remove('no-scroll');
//             if (modalsContainer.children.length === 0) {
//                 modalsContainer.style.display = 'none'; // Скрываем контейнер, если нет модальных окон
//             }
//         } else if (e.target === this) {
//             const activeModal = document.querySelector('.modal.active-modal');
//             if (activeModal) {
//                 activeModal.remove(); // Удаляем активное модальное окно
//                 if (modalsContainer.children.length === 0) {
//                     modalsContainer.style.display = 'none'; // Скрываем контейнер, если нет модальных окон
//                 }
//                 document.body.classList.remove('no-scroll');
//             }
//         }
//     });
// });


import { initBurgerMenu } from './modules/burgerMenu.js';
import { initModal } from './modules/modal.js';


document.addEventListener('DOMContentLoaded', function() {
    initBurgerMenu();
    initModal();
});
