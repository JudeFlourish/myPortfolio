// Function to open the modal and display the clicked image
function openModal(linkElement) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal_img");
    
    // Set the modal image source to the source of the project image associated with the "View" link
    var projectImage = linkElement.closest(".project").querySelector("img").src;
    modal.style.display = "block";
    modalImg.src = projectImage;
}

// Function to close the modal without scrolling the page to the top
function closeModal(event) {
    var modal = document.getElementById("modal");
    modal.style.display = "none";

    // Prevent the default behavior of the click (which scrolls to the top)
    event.preventDefault();
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






//show/hide nav menu
const menu = document.querySelector(".nav_content");
const menuBtn = document.querySelector(".open_menu_btn");
const closeBtn = document.querySelector(".close_menu_btn");

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//close nav menu
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)

