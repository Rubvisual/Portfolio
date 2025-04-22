
// Mostrar y ocultar dropdown en hover usando JS para mantenerlo activo cuando el cursor está dentro
const container = document.querySelector('.dropdown-container');
const dropdown = container.querySelector('.dropdown');
container.addEventListener('mouseenter', () => dropdown.style.display = 'flex');
container.addEventListener('mouseleave', () => dropdown.style.display = 'none');

// MODAL DE IMAGEN
const images = document.querySelectorAll('.carousel-img');
const imgModal = document.getElementById('imgModal');
const modalImg = document.getElementById('modalImg');
const closeImg = document.querySelector('.close-img');

images.forEach(img => {
  img.addEventListener('click', () => {
    modalImg.src = img.src;
    imgModal.style.display = 'flex';
  });
});

closeImg.addEventListener('click', () => {
  imgModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === imgModal) {
    imgModal.style.display = 'none';
  }
});


// Carruseles múltiples
document.querySelectorAll('.carousel-container').forEach(container => {
  const carousel = container.querySelector('.photo-carousel');
  const btnLeft = container.querySelector('.carousel-btn.left');
  const btnRight = container.querySelector('.carousel-btn.right');

  btnLeft.addEventListener('click', () => {
    carousel.scrollBy({ left: -300, behavior: 'smooth' });
  });

  btnRight.addEventListener('click', () => {
    carousel.scrollBy({ left: 300, behavior: 'smooth' });
  });
});

// Abrir video en modal
document.querySelectorAll('.videoTrigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const videoSrc = trigger.dataset.video;
    const modal = document.getElementById('videoModal');
    const video = document.getElementById('modalVideo');

    video.querySelector('source').src = videoSrc;
    video.load();
    modal.style.display = 'flex';
  });
});

// Cerrar modal
document.querySelector('.close').addEventListener('click', () => {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  video.pause();
  modal.style.display = 'none';
});




