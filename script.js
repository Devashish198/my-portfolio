function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  }
  
  const form = document.getElementById("contactForm");
  const thankYou = document.getElementById("thank-you");
  
  form.addEventListener("submit", function (e) {
    e.preventDefault();
  
    // Simulate success
    form.style.display = "none";
    thankYou.style.display = "block";
  });
  