
// Menu script
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("open");
}

// Dark mode toggle script
// imposta dark mode automatica al primo caricamento
const themeButton = document.getElementById('toggle-theme');
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark-mode');
    themeButton.textContent = '☀️';
}

// toggle manuale
themeButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    themeButton.textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

//Scroll effect
window.addEventListener('scroll', () => {
    document.body.classList.toggle('scrolled', window.scrollY > 10);
});

// Progress bar
const progress = document.createElement("div");
progress.id = "progress-bar";
document.body.appendChild(progress);

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scroll / height) * 100;
    progress.style.width = scrolled + "%";
});