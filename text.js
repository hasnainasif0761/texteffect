const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

let t1 = gsap.timeline({
    scrollTrigger:{
     trigger:".two",
     start:"20% 50%",
     end:"100% 50%",
     markers:true,
     scrub:1,
    },
});
t1.to(".text-area-hover",{
  width:"100%",      
})