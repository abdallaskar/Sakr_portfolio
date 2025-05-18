import ProjectController from "./prController.js";
import { createProject } from "./utils.js";
import { projectsData, longDescription } from "./Data.js";

const projectContainer = document.querySelector('#projects .container .row');

const projects = new ProjectController();


projects.createProject(...projectsData[0], ...longDescription[0]);
projects.createProject(...projectsData[1], ...longDescription[1]);
projects.createProject(...projectsData[2], ...longDescription[2]);
projects.createProject(...projectsData[3], ...longDescription[3]);
projects.createProject(...projectsData[4], ...longDescription[4]);




// Assuming ProjectController stores projects in an array called 'projects'
projects.projects.forEach((project) => {
    const projectElement = createProject(project);
    projectContainer.innerHTML += projectElement;
});







// start navebar animation
// Smooth scrolling and active state on click
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(nav => nav.classList.remove('active'));
        this.classList.add('active');
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Active state on scroll
window.addEventListener('scroll', () => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];
    let current = '';
    for (const section of sections) {
        const element = document.querySelector(`#${section}`);
        if (element && window.scrollY >= element.offsetTop - 100) {
            current = section;
        }
    }
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// end navbar animation 
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
// Set the initial slide
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
        dots[i].classList.toggle('active', i === index);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    // Initialize the carousel with faster transition
    const carouselElement = document.getElementById('homeCarousel');
    if (!carouselElement) return;

    const carousel = new bootstrap.Carousel(carouselElement, {
        interval: 3500, // Change slide every 2 seconds (2000ms)
        wrap: true      // Enable continuous looping
    });

    // Set custom transition speed on every slide change
    const carouselInner = carouselElement.querySelector('.carousel-inner');
    if (carouselInner) {
        carouselInner.style.transition = 'transform 1s ease-in-out';
    }

    // Pause on hover, resume on mouse leave
    carouselElement.addEventListener('mouseenter', function () {
        carousel.pause();
    });
    carouselElement.addEventListener('mouseleave', function () {
        carousel.cycle();
    });
});


// contact section animation
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated', 'animate__fadeInUp');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.contact-card').forEach(card => {
        observer.observe(card);
    });
});

