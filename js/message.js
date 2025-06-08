document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const messageFull = document.querySelector('.message-full');
    const readMoreText = document.querySelector('.read-more-text');

    readMoreBtn.addEventListener('click', function() {
        messageFull.classList.toggle('active');
        readMoreBtn.classList.toggle('active');
        
        if (messageFull.classList.contains('active')) {
            readMoreText.textContent = 'Read Less';
        } else {
            readMoreText.textContent = 'Read More';
        }
    });
}); 