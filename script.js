const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    const formData = {
        name: name,
        email: email,
        message: message
    };

    console.log(formData);

    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';

    contactForm.reset();
});

const toggleGrid = document.getElementById('toggleGrid');
const gridContainer = document.querySelector('.grid_container');

toggleGrid.addEventListener('click', function() {
    toggleGrid.style.display = 'none';
    gridContainer.style.display = 'grid';
});

window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        toggleGrid.style.display = 'block';
        gridContainer.style.display = 'none';
    } else {
        toggleGrid.style.display = 'none';
        gridContainer.style.display = 'grid';
    }
});

window.dispatchEvent(new Event('resize'));



