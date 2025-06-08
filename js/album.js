function openFullImage(src) {
    const modal = document.getElementById('imageModal');
    const fullImage = document.getElementById('fullImage');
    fullImage.src = src;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
}

function closeFullImage() {
    const modal = document.getElementById('imageModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}

// Close modal when clicking the close button
document.querySelector('.close-btn').addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent the modal from closing when clicking the close button
    closeFullImage();
});

// Close modal when pressing Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeFullImage();
    }
}); 