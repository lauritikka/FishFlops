document.addEventListener("DOMContentLoaded", function() {
    const sizeBtn = document.querySelector('.size-button');
    const sizeMenu = document.querySelector('.size-menu');
    const svgIcon = sizeBtn.querySelector('svg');

    sizeBtn.addEventListener('click', function() {
        sizeMenu.style.display = sizeMenu.style.display === 'block' ? 'none' : 'block';
        svgIcon.classList.toggle('rotate');
    });

    const sizeOptions = document.querySelectorAll('.size-menu li');
    sizeOptions.forEach(option => {
        option.addEventListener('click', function() {
            sizeBtn.firstChild.textContent = this.textContent;
            sizeMenu.style.display = 'none';
            svgIcon.classList.remove('rotate');
            console.log('Selected size:', this.dataset.size);
        });
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.size-button')) {
            sizeMenu.style.display = 'none';
            svgIcon.classList.remove('rotate');
        }
    });
});