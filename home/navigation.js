document.addEventListener("DOMContentLoaded", function() {
    var navbutton = document.getElementById('navbutton');
    var popupNavbar = document.getElementById('popupNavbar');

    navbutton.addEventListener('click', function() {
        if (popupNavbar.style.display === "none") {
            popupNavbar.style.display = "block";
        } else {
            popupNavbar.style.display = "none";
        }
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#popupNavbar').addEventListener('click', (event) => {
        if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
            event.preventDefault();
            let targetId = event.target.getAttribute('href');
            let targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                
            }
        }
    });
});
