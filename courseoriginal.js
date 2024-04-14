// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function() {
    // Find the "BUY NOW" button by its id
    var buyNowButton = document.getElementById("buy-now-button");
  
    // Add a click event listener to the "BUY NOW" button
    buyNowButton.addEventListener("click", function() {
      // Redirect to the desired URL when the button is clicked
      window.location.href = "https://www.coursera.org/courses?query=web%20development";
    });
  });
  