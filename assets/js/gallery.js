// Get all thumbnail images
const thumbnailImages = document.querySelectorAll('.thumbnail-image');

// Loop through each thumbnail image
thumbnailImages.forEach(thumbnailImage => {
    // Add click event listener to each thumbnail image
    thumbnailImage.addEventListener('click', function(event) {
        // Stop event propagation to prevent the click on the image from being propagated to the document body
        event.stopPropagation();

        // Toggle the visibility of the next sibling div with class "hidden"
        const hiddenDiv = this.nextElementSibling;
        hiddenDiv.classList.toggle('show');
    });
});

// Add click event listener to the document body
document.body.addEventListener('click', function() {
    // Remove the "show" class from all elements with class "hidden"
    const hiddenDivs = document.querySelectorAll('.hidden');
    hiddenDivs.forEach(hiddenDiv => {
        hiddenDiv.classList.remove('show');
    });
});