document.addEventListener("DOMContentLoaded", () => {
  const otpBtn = document.getElementById("otp-btn");
  const phoneInput = document.querySelector('input[type="tel"]');
  const errorMessage = document.querySelector(".error-message");

  // Hide error message initially
  errorMessage.style.display = "none";

  otpBtn.addEventListener("click", () => {
    const phone = phoneInput.value.trim();

    // Validate 10-digit numeric phone number
    if (!/^\d{10}$/.test(phone)) {
      errorMessage.textContent = "Please enter a valid 10-digit phone number";
      errorMessage.style.display = "block";
      phoneInput.style.borderColor = "#e23744"; // Red border for error
    } else {
      errorMessage.style.display = "none";
      phoneInput.style.borderColor = "#ccc"; // Reset border color

      // Simulate sending OTP - replace with actual backend integration
      alert(`OTP sent to +91-${phone}`);
    }
  });

  // Remove error message and reset border color on input
  phoneInput.addEventListener("input", () => {
    errorMessage.style.display = "none";
    phoneInput.style.borderColor = "#ccc";
  });

  // Handle clicks on secondary buttons (Email, Google)
  const secondaryButtons = document.querySelectorAll(".btn.secondary");
  secondaryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("This feature is under development.");
    });
  });
});
