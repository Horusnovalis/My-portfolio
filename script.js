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

const sections = document.querySelectorAll("section")
const links = document.querySelectorAll(".nav-links a")

window.addEventListener ("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 250;

        if(scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    links.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

const progressBar = document.querySelectorAll(".progress-bar");
const skillsSection = document.querySelector(".skills");

const skillsObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                progressBar.forEach((bar) => {
                    const width = bar.dataset.width;
                    bar.style.width = `${width}%`;      
                });

                skillsObserver.unobserve(skillsSection);
            }
        });
    },
    {
        threshold: 0.5,
    },
);

skillsObserver.observe(skillsSection);