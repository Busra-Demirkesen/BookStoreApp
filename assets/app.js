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







document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const closeBtn = document.getElementById("close-btn");
  const menuBtn = document.getElementById("menu-btn");
  const menuLinks = document.querySelectorAll(".menu-container .menu-list li a");
  const mainHeader = document.getElementById("main-header");
  const threshold = 500;

  // Menü kapat
  function closeMenu() {
    if (menu && window.innerWidth <= 800) {
      menu.style.transform = 'translateX(-100%)';
    }
  }

  // Hamburger açma
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      menu.style.transform = 'translateX(0%)';
    });
  }

  // Menü kapatma butonu
  if (closeBtn && menu) {
    closeBtn.addEventListener('click', closeMenu);
  }

  // Menü içindeki linklere tıklanınca menüyü kapat
  if (menuLinks.length > 0) {
    menuLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }

  // Scroll olunca header sabitle
  if (mainHeader) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > threshold) {
        mainHeader.classList.add('fixed-header');
      } else {
        mainHeader.classList.remove('fixed-header');
      }
    });
  }

  // Ekran genişliği artarsa menüyü açık bırak
  window.addEventListener('resize', () => {
    if (menu && window.innerWidth > 800) {
      menu.style.transform = 'translateX(0%)';
    } else {
      menu.style.transform = 'translateX(-100%)';
    }
  });
});





document.getElementById("search-button").addEventListener("click", () => {
  const query = document.getElementById("search-input").value.trim();
  if (query !== "") {
    window.location.href = `search.html?query=${encodeURIComponent(query)}`;
  }
});

