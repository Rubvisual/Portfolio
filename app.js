
// Mostrar y ocultar dropdown en hover usando JS para mantenerlo activo cuando el cursor está dentro
const container = document.querySelector('.dropdown-container');
const dropdown = container.querySelector('.dropdown');
container.addEventListener('mouseenter', () => dropdown.style.display = 'flex');
container.addEventListener('mouseleave', () => dropdown.style.display = 'none');
