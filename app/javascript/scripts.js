function initNavbarCollapse() {
  console.log("Navbar collapse initialized!"); // Debugging message

  // Navbar shrink function
  var navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink');
      } else {
          navbarCollapsible.classList.add('navbar-shrink');
      }
  };

  // Shrink the navbar when page is scrolled
  navbarShrink();
  document.addEventListener('scroll', navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          rootMargin: '0px 0px -40%',
      });
  }

  // Collapse responsive navbar when a link is clicked
  const navbarToggler = document.querySelector('.navbar-toggler');
  const responsiveNavItems = document.querySelectorAll('#navbarResponsive .nav-link');

  if (navbarToggler && responsiveNavItems.length > 0) {
      responsiveNavItems.forEach((navItem) => {
          navItem.addEventListener('click', () => {
              if (window.getComputedStyle(navbarToggler).display !== 'none') {
                  navbarToggler.click();
              }
          });
      });
  }
}

// Run function on first page load
document.addEventListener('DOMContentLoaded', initNavbarCollapse);

// Ensure function runs after Turbo Drive page updates
document.addEventListener('turbo:load', initNavbarCollapse);

function enableSmoothScroll() {
  document.querySelectorAll('.nav-link').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 70, // Adjust offset if needed
                  behavior: 'smooth'
              });
          }
      });
  });
}

// Run smooth scroll function on page load and Turbo navigation
document.addEventListener('DOMContentLoaded', enableSmoothScroll);
document.addEventListener('turbo:load', enableSmoothScroll);

