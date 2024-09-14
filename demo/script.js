// demo/script.js

document.addEventListener('DOMContentLoaded', () => {
    const dropdowns = document.querySelectorAll('.dropdown-btn');

    dropdowns.forEach(button => {
        button.addEventListener('click', () => {
            const dropdownContent = button.nextElementSibling;
            dropdownContent.classList.toggle('visible');
        });
    });
});
