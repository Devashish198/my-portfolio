// Smooth scroll to contact
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
  
  // Form validation
  (() => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function (e) {
      if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        e.preventDefault();
        alert('Message sent! Thank you.');
        form.reset();
      }
      form.classList.add('was-validated');
    });
  })();
  