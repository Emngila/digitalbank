const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menu-icon');
const overlay = document.getElementById('overlay');
hamburger.addEventListener('click', () => {
  const isClosed = mobileMenu.classList.contains('max-h-0');
  mobileMenu.classList.toggle('max-h-0');
  mobileMenu.classList.toggle('max-h-[300px]');
  mobileMenu.classList.toggle('opacity-0');
  mobileMenu.classList.toggle('opacity-100');
  mobileMenu.classList.toggle('-translate-y-3');
  mobileMenu.classList.toggle('translate-y-0');
  overlay.classList.toggle('opacity-0');
  overlay.classList.toggle('opacity-100');
  overlay.classList.toggle('pointer-events-none');
  overlay.classList.toggle('pointer-events-auto');
  hamburger.setAttribute('aria-expanded', isClosed);
  if (isClosed) {
    menuIcon.src = './src/Assets/images/icon-close.svg';
    menuIcon.alt = 'Close Menu';
  } else {
    menuIcon.src = './src/Assets/images/icon-hamburger.svg';
    menuIcon.alt = 'Open Menu';
  }
});


