import { decorateIcons } from '../../scripts/aem.js';

export default function decorate(block) {
  const slides = [...block.children];
  let currentSlide = 0;

  block.innerHTML = `
    <div class="carousel-container">
      <div class="carousel-slides">
        ${slides.map(slide => (`<div class="carousel-slide">${slide.innerHTML}</div>`)).join('')}
      </div>
      <button class="carousel-nav carousel-prev"><span class="icon icon-arrow-left"></span></button>
      <button class="carousel-nav carousel-next"><span class="icon icon-arrow-right"></span></button>
      <div class="carousel-dots">
        ${slides.map((_, index) => `<span class="carousel-dot" data-slide="${index}"></span>`).join('')}
      </div>
    </div>
  `;

  const slideElems = block.querySelectorAll('.carousel-slide');
  const dotElems = block.querySelectorAll('.carousel-dot');
  const prevButton = block.querySelector('.carousel-prev');
  const nextButton = block.querySelector('.carousel-next');

  function updateCarousel(newSlide) {
    slideElems[currentSlide].classList.remove('active');
    dotElems[currentSlide].classList.remove('active');

    currentSlide = newSlide;

    slideElems[currentSlide].classList.add('active');
    dotElems[currentSlide].classList.add('active');
  }

  dotElems.forEach(dot => {
    dot.addEventListener('click', () => {
      updateCarousel(parseInt(dot.dataset.slide, 10));
    });
  });

  prevButton.addEventListener('click', () => {
    const newSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateCarousel(newSlide);
  });

  nextButton.addEventListener('click', () => {
    const newSlide = (currentSlide + 1) % slides.length;
    updateCarousel(newSlide);
  });

  // Initialize
  updateCarousel(0);
  decorateIcons(block);
}
