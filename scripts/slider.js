const slides = [
    { number: '1', text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit' },
    { number: '2', text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit' },
    { number: '3', text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit' },
    { number: '4', text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit' },
    { number: '5', text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit' },
    { number: '6', text: 'Lorem ipsum dolor sit amet,<br>consectetur adipiscing elit' },
];
let current = 0;
function updateSlide() {
  document.getElementById('slide-number').innerHTML = slides[current].number;
  document.getElementById('slide-text').innerHTML = slides[current].text;
}
function prevSlide() {
  current = (current === 0) ? slides.length - 1 : current - 1;
  updateSlide();
}
function nextSlide() {
  current = (current === slides.length - 1) ? 0 : current + 1;
  updateSlide();
}