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


