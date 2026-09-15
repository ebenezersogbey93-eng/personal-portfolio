const projectDetails = {
    business: {
        title: "Business Website",
        description: "A modern business website built to showcase services, convert visitors, and create a strong digital presence for brands and companies.",
        tech: ["HTML", "CSS", "JavaScript", "Responsive Design"],
        images: [
            "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
        ]
    },
    design: {
        title: "Creative Design Project",
        description: "A visually engaging design project focused on branding, campaign visuals, and marketing content for businesses and events.",
        tech: ["Branding", "Canva", "Creative Layout", "Marketing Design"],
        images: [
            "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80"
        ]
    },
    mobile: {
        title: "Mobile Responsive Website",
        description: "A mobile-first website designed to provide a smooth browsing experience across smartphones, tablets, and desktop screens.",
        tech: ["Mobile UX", "HTML", "CSS", "JavaScript"],
        images: [
            "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=800&q=80"
        ]
    }
};

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("active");
    }
}

function openProjectModal(projectKey) {
    const modal = document.getElementById("projectModal");
    const title = document.getElementById("modalTitle");
    const description = document.getElementById("modalDescription");
    const techContainer = document.getElementById("modalTech");
    const gallery = document.getElementById("projectGallery");
    const details = projectDetails[projectKey];

    if (!modal || !details) return;

    title.textContent = details.title;
    description.textContent = details.description;
    techContainer.innerHTML = details.tech.map((item) => `<span>${item}</span>`).join("");
    gallery.innerHTML = details.images.map((image) => `
        <img src="${image}" alt="${details.title} preview" />
    `).join("");

    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

function closeProjectModal() {
    const modal = document.getElementById("projectModal");

    if (!modal) return;

    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.querySelectorAll(".view-project-btn").forEach((button) => {
    button.addEventListener("click", function (event) {
        event.preventDefault();
        openProjectModal(button.dataset.project);
    });
});

document.querySelectorAll(".portfolio-card").forEach((card) => {
    card.addEventListener("click", function (event) {
        if (event.target.closest("a")) return;
        openProjectModal(card.dataset.project);
    });
});

document.querySelector(".close-modal")?.addEventListener("click", closeProjectModal);

document.getElementById("projectModal")?.addEventListener("click", function (event) {
    if (event.target === this) closeProjectModal();
});

document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeProjectModal();
});

function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
    }

    alert(
        "Thank you, " + name +
        "! Your message has been received successfully."
    );

    document.querySelector("form").reset();
}