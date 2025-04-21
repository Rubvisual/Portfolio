
// Mostrar y ocultar dropdown en hover usando JS para mantenerlo activo cuando el cursor está dentro
const container = document.querySelector('.dropdown-container');
const dropdown = container.querySelector('.dropdown');
container.addEventListener('mouseenter', () => dropdown.style.display = 'flex');
container.addEventListener('mouseleave', () => dropdown.style.display = 'none');

const videoTriggers = document.querySelectorAll('.videoTrigger');
const videoModal = document.getElementById('videoModal');
const modalVideo = document.getElementById('modalVideo');
const closeVideo = document.querySelector('.modal .close');

videoTriggers.forEach(trigger => {
  trigger.addEventListener('click', () => {
    const videoSrc = trigger.getAttribute('data-video');
    modalVideo.querySelector('source').src = videoSrc;
    modalVideo.load();
    videoModal.style.display = 'flex';
    modalVideo.play();
  });
});

closeVideo.addEventListener('click', () => {
  videoModal.style.display = 'none';
  modalVideo.pause();
});

window.addEventListener('click', (e) => {
  if (e.target === videoModal) {
    videoModal.style.display = 'none';
    modalVideo.pause();
  }
});


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




