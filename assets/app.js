const loginBtn = document.querySelector('.login-btn');
const closePopupBtn = document.querySelector('.form-popup .close-btn');

const signupBtn = document.querySelector('.signup-btn');

const loginSignGroupLink = document.querySelectorAll('.form-box .bottom-link a'); // Tüm bağlantıları seçiyoruz

// Form popup elementini tanımlıyoruz
const formPopup = document.querySelector('.form-popup');

// Show the login popup when the button is clicked
loginBtn.addEventListener('click', showLoginPopup);

function showLoginPopup() {
    document.body.classList.toggle('show-popup');
}

// Hide the login popup when the close button is clicked
closePopupBtn.addEventListener('click', hideLoginPopup);

function hideLoginPopup() {
    document.body.classList.remove('show-popup');
}

// Eğer birden fazla bağlantı varsa, her birine event listener ekliyoruz
loginSignGroupLink.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        if (link.id === 'signup-link') {
            formPopup.classList.add('show-signup');
        } else {
            formPopup.classList.remove('show-signup');
        }
    });
});

signupBtn.addEventListener('click', () => {
    document.body.classList.add('show-popup');
    formPopup.classList.add('show-signup'); // signup formu göster
});
