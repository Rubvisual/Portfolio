
// Mostrar y ocultar dropdown en hover usando JS para mantenerlo activo cuando el cursor está dentro
const container = document.querySelector('.dropdown-container');
const dropdown = container.querySelector('.dropdown');
container.addEventListener('mouseenter', () => dropdown.style.display = 'flex');
container.addEventListener('mouseleave', () => dropdown.style.display = 'none');

  const videoThumbnail = document.getElementById('videoTrigger');
  const modal = document.getElementById('videoModal');
  const closeModal = document.querySelector('.modal .close');
  const modalVideo = document.getElementById('modalVideo');

  videoThumbnail.addEventListener('click', () => {
    modal.style.display = 'block';
    modalVideo.currentTime = 0;
    modalVideo.play();
  });

  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    modalVideo.pause();
  });

  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
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

// AUTO SCROLL INFINITO
const carousel = document.querySelector('.photo-carousel');
let scrollAmount = 0;

function autoScrollCarousel() {
  scrollAmount += 1;
  if (scrollAmount >= carousel.scrollWidth / 2) {
    scrollAmount = 0;
    carousel.scrollLeft = 0;
  } else {
    carousel.scrollLeft = scrollAmount;
  }
}

setInterval(autoScrollCarousel, 20);



