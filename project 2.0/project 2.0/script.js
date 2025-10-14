// WhatsApp Floating Button
document.addEventListener("DOMContentLoaded", () => {
  const whatsappBtn = document.createElement("a");
  whatsappBtn.href = "https://wa.me/+254768115452"; // Replace with your WhatsApp number
  whatsappBtn.target = "_blank";
  whatsappBtn.classList.add("whatsapp-float");
  whatsappBtn.innerHTML = "💬";

  document.body.appendChild(whatsappBtn);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
