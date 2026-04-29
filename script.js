const btn = document.getElementById("btnScroll");

btn.addEventListener("click", () => {
    document.getElementById("gallery").scrollIntoView({
        behavior: "smooth"
    });
});
