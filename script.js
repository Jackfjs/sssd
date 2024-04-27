// Обработчики для модального окна обратной связи
const feedbackModal = document.getElementById("myModal");
const feedbackCloseBtn = feedbackModal.querySelector(".close");
const feedbackForm = document.getElementById("feedbackForm");

feedbackCloseBtn.addEventListener('click', function() {
    feedbackModal.style.display = "none";
});

feedbackForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Логика отправки данных формы
    feedbackModal.style.display = "none";
});

document.addEventListener('DOMContentLoaded', function() {
    // Обработчики для изображений портфолио
    const images = document.querySelectorAll('.image-container .image-wrapper img');

    images.forEach(image => {
        image.addEventListener('click', function() {
            const galleryId = this.dataset.gallery;
            if (galleryId && galleryData[galleryId]) {
                const galleryImages = galleryData[galleryId];
                const galleryModal = document.getElementById('galleryModal');
                const galleryImagesContainer = document.getElementById('galleryImages');
                galleryImagesContainer.innerHTML = ''; // Очищаем контейнер
                
                // Добавляем изображения в модальное окно
                galleryImages.forEach(src => {
                    const img = document.createElement('img');
                    img.src = src;
                    galleryImagesContainer.appendChild(img);
                });

                // Показываем модальное окно
                galleryModal.style.display = 'block';
            }
        });
    });

    // Обработчик закрытия модального окна
    const closeBtn = document.querySelector('.Portf-close');
    closeBtn.addEventListener('click', function() {
        const galleryModal = document.getElementById('galleryModal');
        galleryModal.style.display = 'none';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function(event) {
        const galleryModal = document.getElementById('galleryModal');
        if (event.target === galleryModal) {
            galleryModal.style.display = 'none';
        }
    });
});

// Закрытие любого модального окна при клике вне его области
window.addEventListener('click', function(event) {
    if (event.target === feedbackModal) {
        feedbackModal.style.display = "none";
    } else if (event.target === galleryModal) {
        galleryModal.style.display = 'none';
    }
});

// Ваши существующие функции для анимации и модального окна "Звонок" и "Заказать"
const callButton = document.querySelector('.callback');
const orderButtons = document.querySelectorAll('.service-card button');

callButton.addEventListener('click', function() {
    feedbackModal.style.display = "block";
});

orderButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        const serviceName = this.getAttribute('data-service');
        // Тут должна быть логика для отображения информации о выбранной услуге
        feedbackModal.style.display = "block";
    });
});



// Обработчики наведения для изображений портфолио (добавлены в событие 'DOMContentLoaded')
document.addEventListener('DOMContentLoaded', function() {
    const imageWrappers = document.querySelectorAll('.image-wrapper');
  
    imageWrappers.forEach(wrapper => {
      wrapper.addEventListener('mouseover', function() {
        const overlay = this.querySelector('.overlay');
        const text = this.querySelector('.text');
        overlay.style.opacity = '1';
        text.style.opacity = '1';
      });
  
      wrapper.addEventListener('mouseout', function() {
        const overlay = this.querySelector('.overlay');
        const text = this.querySelector('.text');
        overlay.style.opacity = '0';
        text.style.opacity = '0';
      });
    });
});

   

// Карусель

let currentSlide = 0;
const slides = document.getElementsByClassName('slide');

function showSlide(index) {
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  // Сначала скрываем все слайды
  Array.from(slides).forEach(slide => slide.style.display = "none"); 

  // Затем делаем активным текущий слайд
  slides[currentSlide].style.display = "block";
  slides[currentSlide].style.opacity = "1";
}

function changeSlide(step) {
  showSlide(currentSlide += step);
}

document.addEventListener("DOMContentLoaded", () => {
  showSlide(currentSlide); // Показываем первый слайд при загрузке
});

// При необходимости добавьте автопрокрутку
setInterval(() => {
  showSlide(currentSlide += 1);
}, 8000); // Меняйте слайд каждые 3 секунды
