// PLAY scroll
document.querySelector(".play").onclick = () => {
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });
};

// INFO popup
document.querySelector(".info").onclick = () => {
    alert("Website kenangan kelas XII BISNIS DIGITAL 🎓");
};

// SEND
document.getElementById("sendBtn").onclick = () => {
    alert("Pesan terkirim (simulasi)");
};
