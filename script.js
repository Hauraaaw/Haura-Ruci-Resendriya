let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 170;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            let activeLink = document.querySelector('header nav a[href="#'+id+'"]');
            if(activeLink){
                activeLink.classList.add("active");
            }
        }
    });

    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
};

const typedSpans = document.querySelectorAll(".text-animation .typed-text");
const wordsList = [
    "Software Engineering Student", 
    "Web Developer", 
    "Frontend Developer", 
    "Backend Developer", 
    "Database Developer"
];

typedSpans.forEach(span => {
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        let currentWord = wordsList[wordIndex];
        
        if (isDeleting) {
            span.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            span.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && charIndex === currentWord.length) {
            typeSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % wordsList.length;
            typeSpeed = 500;
        }

        setTimeout(type, typeSpeed);
    }

    type();
});

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        filterButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filterValue = btn.dataset.filter;

        projectCards.forEach(card => {
            if (filterValue === "all" || card.classList.contains(filterValue)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

// ===========================
// VIEW ALL CERTIFICATES FUNCTION
// ===========================
const viewBtn = document.getElementById("viewMoreBtn");
const certificatesContainer = document.querySelector(".certificates-container");

if (viewBtn && certificatesContainer) {
    viewBtn.addEventListener("click", () => {
        certificatesContainer.classList.toggle("expanded");

        if (certificatesContainer.classList.contains("expanded")) {
            viewBtn.innerText = "View Less";
        } else {
            viewBtn.innerText = "View All Certificates";
            document.getElementById("certificates").scrollIntoView({
                behavior: "smooth"
            });
        }
    });
}

// ===========================
// WHATSAPP CONTACT FORM
// ===========================
const whatsappForm = document.getElementById("whatsappForm");

if (whatsappForm) {
    whatsappForm.addEventListener("submit", function(e) {
        e.preventDefault();

        let name = document.getElementById("name").value;
        let subject = document.getElementById("subject").value;
        let message = document.getElementById("message").value;

        let phoneNumber = "6281282346044"; 

        let textString = `Halo Haura, saya ${name}.\nSubjek: ${subject}\n\nPesan:\n${message}`;
        let encodedText = encodeURIComponent(textString);

        let whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        window.open(whatsappURL, "_blank");
    });
}