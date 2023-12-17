{
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.batch(".overlay", {
        start: "top 65%",
        once: true,
        onEnter: (elements) => gsap.to(elements, {y: "-100%", duration: 1.5, ease: "power4.inOut"})
    });

    // Sólo la primera vez
    ScrollTrigger.batch("img", {
        start: "top 65%",
        once: true,
        onEnter: (elements) => gsap.fromTo(elements, {scale: 1.2, opacity:0.8},  {scrollTrigger: "img", scale: 1, opacity: 1, duration: 1.75 , ease: "power4.inOut"}),
    });

    ScrollTrigger.batch("img", {
        start: "top 95%",
        onEnter: (elements) => gsap.fromTo(elements, {scale: 1.3, opacity:0.8},  {scrollTrigger: "img", scale: 1, opacity: 1, duration: 1.75 , ease: "power4.inOut"}),
        onEnterBack: (elements) => gsap.fromTo(elements, {scale: 1.3, opacity:0.8},  {scrollTrigger: "img", scale: 1, opacity: 1, duration: 1.75 , ease: "power4.inOut"}),
    });
}