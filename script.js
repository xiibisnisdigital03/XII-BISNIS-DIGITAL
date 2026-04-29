// SCROLL KE GALERI (tombol PLAY)
document.querySelector(".play").addEventListener("click", () => {
    const gallery = document.getElementById("gallery");
    if (gallery) {
        gallery.scrollIntoView({ behavior: "smooth" });
    }
});

// INFO BUTTON (popup sederhana)
document.querySelector(".info").addEventListener("click", () => {
    alert("Website kenangan kelas XII BISNIS DIGITAL 🎓\n\nBerisi dokumentasi kegiatan, momen seru, dan kenangan selama sekolah.");
});

// EFEK FADE MASUK (biar cinematic dikit)
window.addEventListener("load", () => {
    document.body.style.opacity = 0;
    setTimeout(() => {
        document.body.style.transition = "opacity 1s";
        document.body.style.opacity = 1;
    }, 100);
});
