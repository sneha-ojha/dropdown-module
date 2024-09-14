import './styles.css';

class Dropdown {
    constructor(selector) {
        this.dropdownButton = document.querySelector(selector);
        this.dropdownContent = this.dropdownButton.nextElementSibling;

        this.dropdownButton.addEventListener('click', () => {
            this.toggleDropdown();
        });
    }

    toggleDropdown() {
        this.dropdownContent.classList.toggle('visible');
    }
}

export default Dropdown;
