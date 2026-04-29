// NAVIGATION MENU TOGGLE
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("show");
}

// CLIENT LOGIN REDIRECT
function goLogin() {
    window.location.href = "login.html";
}

// EXPAND PORTFOLIO CARD
function toggleCard(card) {
    // Optional: Close other active cards
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(c => {
        if (c !== card) c.classList.remove('active');
    });
    
    card.classList.toggle("active");
}

// SCROLL EFFECTS & ACTIVE NAV LINKS
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById("navbar");
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            const navLinksContainer = document.getElementById("navLinks");
            if(navLinksContainer) {
                navLinksContainer.classList.remove("show");
            }

            const targetId = this.getAttribute('href');
            if(targetId && targetId !== "#") {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Scroll event listener
    window.addEventListener("scroll", () => {
        // Navbar styling on scroll
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        // Active link highlighting
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.clientHeight;
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });
});

function toggleCard(card) {
    card.classList.toggle("active");
}

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
function toggleMenu() {
    const menu = document.getElementById("navLinks");
    menu.classList.toggle("active");
}