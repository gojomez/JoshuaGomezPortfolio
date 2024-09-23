// Hide the preloader and show the content once the page fully loads
window.onload = function() {
    var preloader = document.getElementById("preloader");
    var content = document.getElementById("content");

    setTimeout(function() {
        preloader.style.display = "none";  // Hide preloader
        content.style.display = "block";   // Show the main content
    }, 3000); // 2.5 seconds to match animation time
};
