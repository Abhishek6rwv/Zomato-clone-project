// Wait until DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Log welcome message to console
    console.log("Welcome to Zomato Clone!");

    // Feature Hover Animation - Optional
    const features = document.querySelectorAll(".feature");

    features.forEach((feature) => {
        feature.addEventListener("mouseenter", () => {
            feature.style.boxShadow = "0 8px 16px rgba(0,0,0,0.2)";
            feature.style.transform = "translateY(-5px)";
        });

        feature.addEventListener("mouseleave", () => {
            feature.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
            feature.style.transform = "translateY(0)";
        });
    });

   
        });

