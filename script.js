// Footer Date Script
const currentDate = new Date();
const year = currentDate.getFullYear();
const date = currentDate.toLocaleDateString();
document.getElementById("footer-info").innerText = `Today's date: ${date} | Year: ${year}`;

// Image Gallery Script

const images = [
    "images/black benz.jpeg",
    "images/BMW 325i.jpg",
    "images/c63.jpeg",
    "images/car 3.jpg",
    "images/golf and audi.jpeg",
    "images/apex logo.jpeg"
];

// Select header and footer for dimming
const header = document.querySelector("header");
const footer = document.querySelector("footer");

// Select gallery container (was missing — add a <div id="gallery"></div> in your HTML)
const gallery = document.getElementById("gallery");

// Load gallery images
images.forEach((src, index) => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = `Image ${index + 1}`;
    img.addEventListener("click", () => openLightbox(index));
    gallery.appendChild(img);
});

// Lightbox Functionality
let currentIndex = 0;
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const caption = document.getElementById("caption");

// Updates the caption text under the lightbox image (was missing — added)
function updateCaption() {
    caption.textContent = `Image ${currentIndex + 1} of ${images.length}`;
}

function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex];
    updateCaption();
    lightbox.style.display = "flex";

    //Dim header and footer
    header.classList.add("dimmed");
    footer.classList.add("dimmed");
}

function closeLightbox() {
    lightbox.style.display = "none";

    // Restore header and footer
    header.classList.remove("dimmed");
    footer.classList.remove("dimmed");
}

function changeImage(direction) {
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = images.length - 1;
    if (currentIndex >= images.length) currentIndex = 0;
    openLightbox(currentIndex);
}

// Close lightbox on Escape key (added for better UX)
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeLightbox();
});
