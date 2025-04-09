const slides = [
  { number: '1', text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit' },
  { number: '2', text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit' },
  { number: '3', text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit' },
  { number: '4', text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit' },
  { number: '5', text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit' },
  { number: '6', text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit' },
];

let current = 0;

function updateSlide(direction = 'next') {
  const card = document.querySelector('.slider-card');
  card.classList.remove('fade-in-left', 'fade-in-right');

  void card.offsetWidth;
  card.classList.add(direction === 'next' ? 'fade-in-right' : 'fade-in-left');

  document.getElementById('slide-number').innerHTML = slides[current].number;
  document.getElementById('slide-text').innerHTML = slides[current].text;
}

function prevSlide() {
  current = (current === 0) ? slides.length - 1 : current - 1;
  updateSlide('prev');
}

function nextSlide() {
  current = (current === slides.length - 1) ? 0 : current + 1;
  updateSlide('next');
}

let touchStartX = 0;
let touchEndX = 0;

const card = document.querySelector('.slider-card');

card.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
});

card.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
});

function handleSwipe() {
  const deltaX = touchEndX - touchStartX;
  if (Math.abs(deltaX) > 50) {
    if (deltaX > 0) {
      prevSlide();
    } else {
      nextSlide();
    }
  }
}