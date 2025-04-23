// LOGIN - SIGNUP FORM
const loginBtn = document.querySelector('.login-btn');
const closePopupBtn = document.querySelector('.form-popup .close-btn');
const signupBtn = document.querySelector('.signup-btn');
const signupHero = document.querySelector('.signup-btn-hero');
const loginSignGroupLinks = document.querySelectorAll('.form-box .bottom-link a');
const formPopup = document.querySelector('.form-popup');

function showSignupForm() {
  document.body.classList.add('show-popup');
  formPopup.classList.add('show-signup');
}

if (loginBtn && closePopupBtn && formPopup) {
  loginBtn.addEventListener('click', () => {
    document.body.classList.toggle('show-popup');
  });

  closePopupBtn.addEventListener('click', () => {
    document.body.classList.remove('show-popup');
    formPopup.classList.remove('show-signup'); // signup form açık kalmasın
  });

  loginSignGroupLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      if (link.id === 'signup-link') {
        formPopup.classList.add('show-signup');
      } else {
        formPopup.classList.remove('show-signup');
      }
    });
  });

  if (signupBtn) signupBtn.addEventListener('click', showSignupForm);
  if (signupHero) signupHero.addEventListener('click', showSignupForm);
}



const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');
const menuBtn = document.getElementById('menu-btn');
const menuLinks = document.querySelectorAll('.menu-container .menu-list li a');
const mainHeader = document.getElementById('main-header');

const threshold = 500;

function close(){
  if(window.innerWidth <= 800){
    menu.style.transform = 'translateX(-100%)';
  }
  
}


closeBtn.addEventListener('click', close);

menuLinks.forEach((link)=>{
  link.addEventListener('click',close)
});

menuBtn.addEventListener('click',()=>{
  menu.style.transform = 'translateX(0%)';
});

window.addEventListener('scroll', ()=>{
  if(window.pageYOffset > threshold) {
    mainHeader.classList.add('fixed-header');
    }
});

window.addEventListener('resize', ()=>{
  if(window.innerWidth > 800){
    menu.style.transform = 'translateX(0%)';
  }
});




document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search-input").value.trim();
  if (query !== "") {
    window.location.href = `search.html?query=${encodeURIComponent(query)}`;
  }
});

