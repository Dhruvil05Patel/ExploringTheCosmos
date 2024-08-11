var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

document.addEventListener("mousemove", function (dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blur.style.left = dets.x - 150 + "px";
  blur.style.top = dets.y - 150 + "px";
});

gsap.to("#nav", {
  backgroundColor: "#000",
  height: "85px",
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    // markers: true,
    start: "top- 10%",
    end: "top -11%",
    scrub: 2
  }
});

gsap.to("#main", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -30%",
    end: "top -100%",
    scrub: 2
  }
});
gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:3
    }

})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        start:"top 60%",
        end:"top 58%",
        scrub:1
    }
})
gsap.from("#colon1",{
    y:-70,
    x:-70000,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:2
    }
})
gsap.from("#colon2",{
    y:-70,
    x:70000,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:2
    }
})
gsap.from("#quote-text", {
    opacity: 0, // Start with opacity 0
    y: 100,    // Move 100px downward from its original position
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 47%",
        scrub:1     
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:4
    }
})