gsap.from("#image_1", { x: 300, opacity: 0, duration: 1, delay: 0.5 });

gsap.to(".logo-2", {
    rotation: 360,
    duration: 5,     
    repeat: -1,      
    ease: "linear"
});


gsap.registerPlugin(SplitText);

let split = SplitText.create(".text", { type: "chars, words, lines" });

let split2 = SplitText.create(".text2", { type: "chars, words, lines" });

gsap.from(split.lines, {
    rotationX: -100,
    transformOrigin: "50% 50% -160px",
    opacity: 0,
    duration: 0.8,
    ease: "power3",
    stagger: 0.25

})

gsap.from(split2.chars, {
    opacity: 0,
      y: 50,
      stagger: 0.05,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".text2",
        start: "top 80%", // منين يوصل العنصر لـ 80% من الشاشة
        toggleActions: "play none none reverse"
      }
});