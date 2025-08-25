document.addEventListener("DOMContentLoaded", () => {
  const createAccountBtn = document.getElementById("Create-account");
  const nameInput = document.querySelector('input[type="text"]');
  const emailInput = document.getElementById("email");
  const termsCheckbox = document.getElementById("terms");

  createAccountBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const termsAgreed = termsCheckbox.checked;

    if (!name) {
      alert("Please enter your full name.");
      nameInput.focus();
      return;
    }

    if (!email || !validateEmail(email)) {
      alert("Please enter a valid email address.");
      emailInput.focus();
      return;
    }

    if (!termsAgreed) {
      alert("You must agree to Zomato's Terms and Conditions.");
      return;
    }

    // Simulated success message
    alert(`Account created successfully!\nWelcome to Zomato, ${name}.`);

    // Simulate redirect (optional)
    // window.location.href = "/Project 1/home.html";
  });

  // Optional: Handle Google button
  const googleBtn = document.querySelector(".btn.secondary");
  if (googleBtn) {
    googleBtn.addEventListener("click", () => {
      alert("Google sign-in is currently under development.");
    });
  }

  // Email validation function
  function validateEmail(email) {
    // Basic email pattern
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
});
