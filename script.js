
AOS.init({
  duration: 1200, // Animationens varaktighet i ms
  once: true      // Animationen sker bara en gång när elementet blir synligt
});


document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const navbarToggle = document.querySelector('.navbar__toggle');
    const navbar = document.querySelector('.navbar');
    const dropdownToggle = document.querySelector('.dropdown__toggle');

    function toggleNavbar() {
      navbar.classList.toggle('active');
      const expanded = navbarToggle.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
      navbarToggle.setAttribute('aria-expanded', expanded);
    }

    // Click event for mobile toggle
    navbarToggle.addEventListener('click', toggleNavbar);
    // Keydown event for mobile toggle (Enter or Space)
    navbarToggle.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleNavbar();
      }
    });

    // Dropdown Toggle for "Tjänster"
    if (dropdownToggle) {
      function toggleDropdown(e) {
        e.preventDefault();
        const parentLi = this.parentElement;
        parentLi.classList.toggle('active');
        const expanded = this.getAttribute('aria-expanded') === 'true' ? 'false' : 'true';
        this.setAttribute('aria-expanded', expanded);
      }
      dropdownToggle.addEventListener('click', toggleDropdown);
      dropdownToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
          toggleDropdown.call(this, e);
        }
      });
    }





    // Navbar Scroll Behavior for Desktop and Mobile
    let prevScrollPos = window.pageYOffset;
    const scrollThreshold = 100; // Adjust this threshold as needed

    window.addEventListener('scroll', function() {
      const currentScrollPos = window.pageYOffset;
      const isMobile = window.innerWidth < 768; // Adjust breakpoint as needed

      if (isMobile) {
        // For mobile: Navbar remains fixed, but change background after threshold
        if (currentScrollPos > scrollThreshold) {
          navbar.classList.add("bg-white");
        } else {
          navbar.classList.remove("bg-white");
        }
        navbar.style.transform = "translateY(0)";
      } else {
        // For desktop: Hide navbar on scroll down, show on scroll up (after threshold)
        if (currentScrollPos > scrollThreshold) {
          if (prevScrollPos > currentScrollPos) {
            // Scrolling up – show navbar
            navbar.style.transform = "translateY(0)";
          } else {
            // Scrolling down – hide navbar
            navbar.style.transform = "translateY(-100%)";
          }
        } else {
          navbar.style.transform = "translateY(0)";
        }
        prevScrollPos = currentScrollPos;
        navbar.classList.toggle("bg-white", currentScrollPos > scrollThreshold);
      }
    });
  });

  document.querySelectorAll('.faq__question').forEach(button => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const answer = button.nextElementSibling;
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });




      // Slider Functionality
      const slides = document.querySelectorAll('.slider__slide');
      let currentSlide = 0;
      const nextBtn = document.querySelector('.slider__arrow--next');
      const prevBtn = document.querySelector('.slider__arrow--prev');
  
      nextBtn.addEventListener('click', function() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
      });
  
      prevBtn.addEventListener('click', function() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
      });


