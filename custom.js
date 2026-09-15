const menuBtn = document.getElementById("menuBtn");

const navbar = document.getElementById("navbar");


menuBtn.addEventListener("click", function () {

    navbar.classList.toggle("active");

});

const navLinks = document.querySelectorAll("#navbar a");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navbar.classList.remove("active");

    });

});

const learnButtons =
    document.querySelectorAll(".learn-btn");


learnButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "Insects are fascinating creatures " +
            "that play an important role in our environment!"
        );

    });

});

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been received."
    );

    contactForm.reset();

});

document.getElementById("year").textContent =
    new Date().getFullYear();