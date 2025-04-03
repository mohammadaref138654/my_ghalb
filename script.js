document.addEventListener("scroll", function () {
    let elements = document.querySelectorAll(".reveal");
    elements.forEach((element) => {
        let position = element.getBoundingClientRect().top;
        let windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            element.classList.add("visible");
        }
    });
});
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
<button onclick="toggleDarkMode()">حالت تاریک</button>
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}