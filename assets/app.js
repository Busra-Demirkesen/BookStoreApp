
document.addEventListener('DOMContentLoaded', function () {

const loginBtn = document.querySelector('.login-btn');
const closePopupBtn = document.querySelector('.form-popup .close-btn');

const signupBtn = document.querySelector('.signup-btn');
const signupHero = document.querySelector('.signup-btn-hero');

const loginSignGroupLink = document.querySelectorAll('.form-box .bottom-link a');
const formPopup = document.querySelector('.form-popup');

loginBtn.addEventListener('click', () => {
  document.body.classList.toggle('show-popup');
});

closePopupBtn.addEventListener('click', () => {
  document.body.classList.remove('show-popup');
});

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

function showSignupForm() {
  document.body.classList.add('show-popup');
  formPopup.classList.add('show-signup');
}

signupBtn.addEventListener('click', showSignupForm);
signupHero.addEventListener('click', showSignupForm);

// --- HAMBURGER MENU ---

document.addEventListener('DOMContentLoaded', function () {
    const menu = document.getElementById('menu');
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
  
    // Menü açma
    menuBtn.addEventListener('click', () => {
      menu.classList.add('active');
    });
  
    // Menü kapama
    closeBtn.addEventListener('click', () => {
      menu.classList.remove('active');
    });
  
    // Menüdeki linklere tıklayınca kapansın istiyorsan:

const loginBtn = document.querySelector('.login-btn');
const closePopupBtn = document.querySelector('.form-popup .close-btn');

const signupBtn = document.querySelector('.signup-btn');
const signupHero = document.querySelector('.signup-btn-hero');

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

function showSignupForm() {
    document.body.classList.add('show-popup');
    formPopup.classList.add('show-signup'); // signup formu göster
}

signupBtn.addEventListener('click', showSignupForm);
signupHero.addEventListener('click', showSignupForm);


const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');
const menuBtn = document.getElementById('menu-btn');
const menuLinks = document.querySelectorAll('.menu-container .menu-list li a');

function close(){
    menu.style.transform = 'translateX(-100%)';
}

closeBtn.addEventListener('click',close);

menuLinks.forEach((link)=>{
link.addEventListener('click',close);
})

menuBtn.addEventListener('click', ()=>{
    menu.style.transform = 'translateX(0%)';
})
    const menuLinks = document.querySelectorAll('.menu-container .menu-list li a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('active');
      });
    });
  });
});