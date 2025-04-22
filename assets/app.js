
  // LOGIN - SIGNUP FORM
  const loginBtn = document.querySelector('.login-btn');
  const closePopupBtn = document.querySelector('.form-popup .close-btn');
  const signupBtn = document.querySelector('.signup-btn');
  const signupHero = document.querySelector('.signup-btn-hero');
  const loginSignGroupLinks = document.querySelectorAll('.form-box .bottom-link a');
  const formPopup = document.querySelector('.form-popup');

  if (loginBtn && closePopupBtn && formPopup) {
    loginBtn.addEventListener('click', () => {
      document.body.classList.toggle('show-popup');
    });

    closePopupBtn.addEventListener('click', () => {
      document.body.classList.remove('show-popup');
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

    function showSignupForm() {
      document.body.classList.add('show-popup');
      formPopup.classList.add('show-signup');
    }

signupBtn.addEventListener('click', showSignupForm);
signupHero.addEventListener('click', showSignupForm);




