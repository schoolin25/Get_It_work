const countBtn = document.getElementById('countBtn');
const countDisplay = document.getElementById('countDisplay');
let count = 0;

countBtn.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});