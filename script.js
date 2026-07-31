let body = document.getElementById("body");
let btn = document.getElementById("btn");
let icon = document.getElementById("icon");
let navLinks = document.getElementById("nav-links");
let menu = document.getElementById("menu");

btn.addEventListener("click", function() {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
        menu.src = "./white_menu_icon.svg";
        icon.src = "./dark_mode_icon.svg";
    } else {
        icon.src = "./light_mode_icon.svg";
        menu.src = "./menu_icon.svg";
    }
});

menu.addEventListener("click", function() {
    navLinks.classList.toggle("active");
    if (navLinks.classList.contains("active")) {
        menu.src = "./close_icon.svg";
        if (body.classList.contains("dark")) {
            menu.src = "./white_close_icon.svg";
        }else {
            menu.src = "./close_icon.svg";
        }
    } else {
        menu.src = "./menu_icon.svg";
        if (body.classList.contains("dark")) {
            menu.src = "./white_menu_icon.svg";
        }
    }
});

const counters = document.querySelectorAll(".compteur");
const aboutStats = document.querySelector(".about-stats");
let counterStarted = false;
let startCounter = () => {
    if (counterStarted) return;
    counterStarted = true;

    counters.forEach ((counter) => {
        const target = Number(counter.dataset.target);
        let count = 0;
        let duration = 2000;
        const increment = target/(duration/16);
        const updateCounter = () => {
            count += increment;
            if (count < target) {
                counter.textContent = Math.ceil(count) + (target === 100 ? "%" : "+");
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (target === 100 ? "%" : "+");
            }
        };
        
        updateCounter();
    });
};

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                startCounter();

                observer.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.5,
    },
);

if(aboutStats) {
    observer.observe(aboutStats);
}