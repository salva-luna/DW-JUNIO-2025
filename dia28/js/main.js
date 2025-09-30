//Color aleatorio
function randomColorHex() {
  const r = Math.floor(Math.random()*256);
  const g = Math.floor(Math.random()*256);
  const b = Math.floor(Math.random()*256);
  const h = n => n.toString(16).padStart(2,'0');
  return '#' + h(r) + h(g) + h(b);
}

//texto
function pickContrastTextColor(hex) {
  const r = parseInt(hex.slice(1,3), 16);
  const g = parseInt(hex.slice(3,5), 16);
  const b = parseInt(hex.slice(5,7), 16);
  const lum = 0.2126*r + 0.7152*g + 0.0722*b;
  return lum > 150 ? '#111' : '#fff';
}

// DOM
const btns = document.querySelectorAll('.color-btn');
const currentColor = document.getElementById('currentColor');

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    const color = randomColorHex();
    const textColor = pickContrastTextColor(color);
    btn.style.background = color;
    btn.style.color = textColor;
    currentColor.textContent = color.toUpperCase();
    currentColor.style.color = color;
  });
});