let buttons = document.querySelectorAll('.displayButton');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {

        let links = button.nextElementSibling;

        if (links.style.display == 'none') {
            links.style.display = 'block';
            button.textContent = 'Hide';
        } else {
            links.style.display = 'none';
            button.textContent = 'Show';
        }

        });
    });




  document.querySelectorAll(".Our-images img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.boxShadow = "0 0 15px rgba(0, 0, 0, 0.8)";
  });
  img.addEventListener("mouseleave", () => {
    img.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
  });
});