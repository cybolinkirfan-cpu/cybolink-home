// side images scroll animation
gsap.registerPlugin(ScrollTrigger);

/* MASTER TIMELINE */
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+=170%",
        scrub: true,
        pin: ".video-pin",
        anticipatePin: 1
    }
});

/* Delay phase – video stays still */
tl.to({}, { duration: 0.5 });

/* Shrink + rounded corners */
tl.to(".hero-video", {
    scale: 0.25,
    borderRadius: "42px",
    duration: 1.2,
    ease: "power2.inOut"
});

/* Floating items entrance */
tl.fromTo(".tv-frame",
    { x: -200, y: 100, rotate: 25, scale: 0.5, opacity: 0 },
    { x: 0, y: 0, rotate: 21, scale: 1, opacity: 1, duration: 1.2, ease: "power4.out" }
)

    .fromTo(".porsche",
        { y: -200, rotate: 20, scale: 0.5, opacity: 0 },
        { y: 0, rotate: 14, scale: 1, opacity: 1, duration: 1.2, ease: "power4.out" },
        "-=1"
    )

    .fromTo(".porsche2",
        { x: 200, rotate: -40, scale: 0.5, opacity: 0 },
        { x: 0, rotate: -30, scale: 1, opacity: 1, duration: 1.2, ease: "power4.out" },
        "-=1"
    )

    .fromTo(".phone2",
        { x: -150, y: 150, rotate: -25, scale: 0.5, opacity: 0 },
        { x: 0, y: 0, rotate: -15, scale: 1, opacity: 1, duration: 1.2, ease: "power4.out" },
        "-=1"
    )

    .fromTo(".phone",
        { x: -100, y: 200, rotate: -15, scale: 0.5, opacity: 0 },
        { x: 0, y: 0, rotate: -8, scale: 1, opacity: 1, duration: 1.2, ease: "power4.out" },
        "-=1"
    )

    .fromTo(".detail",
        { x: 200, y: 200, scale: 0.5, opacity: 0 },
        { x: 0, y: 0, scale: 1, opacity: 1, duration: 1.2, ease: "power4.out" },
        "-=1"
    );


/* PARALLAX */
gsap.utils.toArray(".item").forEach((el) => {
    gsap.to(el, {
        y: -60,
        scrollTrigger: {
            trigger: ".showcase-section",
            scrub: true
        }
    });
});


// IMAGE HOVER – Smooth Scroll to Target Image
const items = document.querySelectorAll(".leftSection li");
const images = document.querySelectorAll(".imageWrapper");
const scroller = document.querySelector(".imageScroller");

const IMAGE_HEIGHT = 400;

items.forEach(item => {
    item.addEventListener("mouseenter", () => {
        const key = item.dataset.service;
        const index = [...images].findIndex(
            img => img.dataset.service === key
        );

        images.forEach(img => img.classList.remove("active"));
        images[index].classList.add("active");

        const offset =
            -index * IMAGE_HEIGHT + (window.innerHeight * 0.2);

        scroller.style.transform = `translateY(${offset}px)`;

    });
});


//portfolio SWIPER
new Swiper(".portfolioSwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    speed: 1200,
    grabCursor: true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1200: {
            slidesPerView: 2,
            spaceBetween: 30,
        }
    }
});

// Testimonials Swiper
const commonConfig = {
    direction: 'vertical',
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    allowTouchMove: false,
    slideClass: 'swiper-slide-t',
};

// Column 1: Moves UP, Normal Speed
new Swiper('.swiper1', {
    ...commonConfig,
    speed: 5000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});

// Column 2: Moves DOWN, Slightly Slower (for organic look)
new Swiper('.swiper2', {
    ...commonConfig,
    speed: 5500,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
        reverseDirection: true,
    },
});

// Column 3: Moves UP, Normal Speed
new Swiper('.swiper3', {
    ...commonConfig,
    speed: 4800,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});