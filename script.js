
/* ==========================================
   ROYAL BERRY - INTERACTIVE JAVASCRIPT
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    // 1. SMOOTH SCROLLING

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(
                this.getAttribute("href")
            );

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // 2. MOBILE NAVIGATION MENU

    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelector(".nav-links");

    if (navbar && navLinks) {

        const menuButton = document.createElement("button");

        menuButton.className = "menu-toggle";
        menuButton.innerHTML = "☰";
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.setAttribute("aria-expanded", "false");

        navbar.appendChild(menuButton);

        menuButton.addEventListener("click", () => {

            navLinks.classList.toggle("active");

            const isOpen = navLinks.classList.contains("active");

            menuButton.innerHTML = isOpen ? "✕" : "☰";

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

        navLinks.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {

                navLinks.classList.remove("active");

                menuButton.innerHTML = "☰";

                menuButton.setAttribute("aria-expanded", "false");

            });

        });

    }


    // 3. SCROLL REVEAL ANIMATIONS

    const revealElements = document.querySelectorAll(
        ".hero-content, .hero-image, .feature, " +
        ".about-image, .about-content, .menu-card, " +
        ".section-heading, .promotion-content, " +
        ".contact-box, .whatsapp-area"
    );

    revealElements.forEach(element => {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {

        const revealObserver = new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("visible");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12,
                rootMargin: "0px 0px -40px 0px"
            }
        );

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });

    } else {

        revealElements.forEach(element => {
            element.classList.add("visible");
        });

    }


    // 4. NAVBAR SCROLL EFFECT

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            document.querySelector("header")?.classList.add("scrolled");

        } else {

            document.querySelector("header")?.classList.remove("scrolled");

        }

    }, { passive: true });


    // 5. IMAGE LOADING EFFECT

    document.querySelectorAll("img").forEach(image => {

        image.addEventListener("load", () => {
            image.classList.add("loaded");
        });

        image.addEventListener("error", () => {
            image.classList.add("image-error");
        });

        if (image.complete && image.naturalWidth > 0) {
            image.classList.add("loaded");
        }

    });


    // 6. MENU CARD TOUCH FEEDBACK

    document.querySelectorAll(".menu-card").forEach(card => {

        card.addEventListener("touchstart", () => {
            card.classList.add("touching");
        }, { passive: true });

        card.addEventListener("touchend", () => {
            card.classList.remove("touching");
        }, { passive: true });

        card.addEventListener("touchcancel", () => {
            card.classList.remove("touching");
        }, { passive: true });

    });


    // 7. WHATSAPP BUTTON FEEDBACK

    document.querySelectorAll(".whatsapp-btn").forEach(button => {

        button.addEventListener("click", () => {

            button.classList.add("clicked");

            setTimeout(() => {
                button.classList.remove("clicked");
            }, 300);

        });

    });


    // 8. FOOTER CURRENT YEAR

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        copyright.textContent =
            `© ${new Date().getFullYear()} Royal Berry Smoothie and Ice Cream. All Rights Reserved.`;

    }


    // 9. BACK TO TOP BUTTON

    const backToTop = document.createElement("button");

    backToTop.className = "back-to-top";
    backToTop.innerHTML = "↑";
    backToTop.setAttribute("aria-label", "Back to top");

    document.body.appendChild(backToTop);

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    }, { passive: true });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });


    // 10. BUTTON CLICK ANIMATION

    document.querySelectorAll(".main-btn, .second-btn, .nav-btn, .white-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                button.classList.add("button-clicked");

                setTimeout(() => {
                    button.classList.remove("button-clicked");
                }, 250);

            });

        });


    // WEBSITE READY

    console.log("Royal Berry website is ready! 🍓🍦");

});
