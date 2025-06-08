document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.querySelector('.gallery');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    const items = document.querySelectorAll('.gallery-item');
    const itemWidth = items[0].offsetWidth;
    const totalItems = items.length;

    function updateGallery() {
        gallery.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateGallery();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
            updateGallery();
        }
    });

    // Auto-advance gallery every 5 seconds
    setInterval(() => {
        if (currentIndex < totalItems - 1) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateGallery();
    }, 5000);
}); 