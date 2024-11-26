document.addEventListener("DOMContentLoaded", () => {
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeBtn = document.querySelector(".lightbox .close");

    // Abrir el lightbox para imágenes
    document.querySelectorAll(".lightbox-img").forEach((img) => {
        img.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImage.src = img.src;
            lightboxImage.style.display = "block"; // Asegura que la imagen sea visible
        });
    });

    // Abrir el lightbox para videos
    document.querySelectorAll(".lightbox-video").forEach((video) => {
        video.addEventListener("click", () => {
            lightbox.style.display = "flex";
            lightboxImage.style.display = "none"; // Oculta la imagen
            const videoElement = document.createElement("video");
            videoElement.src = video.querySelector("source").src;
            videoElement.controls = true;
            videoElement.autoplay = true;
            videoElement.classList.add("lightbox-video-content");
            lightbox.appendChild(videoElement);
        });
    });

    // Cerrar el lightbox
    closeBtn.addEventListener("click", () => {
        lightbox.style.display = "none";
        lightboxImage.style.display = "none";
        const videoElement = document.querySelector(".lightbox-video-content");
        if (videoElement) {
            videoElement.pause();
            videoElement.remove();
        }
    });

    // Cerrar al hacer clic fuera del contenido
    lightbox.addEventListener("click", (e) => {
        if (e.target !== lightboxImage && !e.target.classList.contains("lightbox-video-content")) {
            lightbox.style.display = "none";
            const videoElement = document.querySelector(".lightbox-video-content");
            if (videoElement) {
                videoElement.pause();
                videoElement.remove();
            }
        }
    });
});
