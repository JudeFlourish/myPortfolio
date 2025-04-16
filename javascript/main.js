// Function to open modal from "View" button
function openModal(linkElement, event) {
  event.preventDefault();
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const projectImage = linkElement.closest(".project").querySelector("img").src;

  // Log to check if the modal is triggered
  console.log('Opening modal with image:', projectImage);

  // Show the modal
  modal.style.display = "block";
  modalImg.src = projectImage;

  // Disable body scroll
  document.body.style.overflow = "hidden";
}

// Function to close modal when clicking on background or close button
function closeModal(event) {
  const modal = document.getElementById("imageModal");
  if (event.target.classList.contains("modal") || event.target.classList.contains("close")) {
    // Hide the modal
    modal.style.display = "none";

    // Re-enable body scroll
    document.body.style.overflow = "auto";
  }
}





//ANIMATION
const animatedSections = document.querySelectorAll('.fade-slide');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    } else {
      entry.target.classList.remove('active'); // <- this makes it re-animate when scrolling back up
    }
  });
}, {
  threshold: 0.15 // adjust this to your liking
});

animatedSections.forEach(section => observer.observe(section));



//NAV SECTION
const navContent = document.querySelector('.nav_content');
  const closeBtn = document.querySelector('.close_menu_btn');
  const openBtn = document.querySelector('.open_menu_btn');
  const navLinks = document.querySelectorAll('.nav_menu li a');

  // Show nav
  openBtn.addEventListener('click', () => {
    navContent.style.display = 'block';
    closeBtn.style.display = 'inline-block';
    openBtn.style.display = 'none';
  });

  // Hide nav
  closeBtn.addEventListener('click', () => {
    navContent.style.display = 'none';
    openBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
  });

  // Hide nav when any menu link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navContent.style.display = 'none';
      openBtn.style.display = 'inline-block';
      closeBtn.style.display = 'none';
    });
  });

