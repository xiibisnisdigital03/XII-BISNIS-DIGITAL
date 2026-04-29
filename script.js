// DARK / LIGHT MODE
const toggle = document.getElementById("toggleMode");

toggle.onclick = () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        toggle.textContent = "☀️";
    } else {
        toggle.textContent = "🌙";
    }
};
