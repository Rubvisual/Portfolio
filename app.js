
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



