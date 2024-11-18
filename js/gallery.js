document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeBtn = document.querySelector(".lightbox .close");

    // Abrir el lightbox
    document.querySelectorAll(".lightbox-img").forEach((img) => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImage.src = img.src;
        });
    });

    // Cerrar el lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    // Cerrar al hacer clic fuera de la imagen
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImage) {
            lightbox.style.display = "none";
        }
    });
});
