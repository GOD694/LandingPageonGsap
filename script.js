var tl = gsap.timeline()
var tls = gsap.timeline()
gsap.from(".nav h3",{
    y:-100,
    duration:0.7,
    stagger:1    

}
)
tls.from(".box h1",{
    opacity:0,
    x:-1000,
    duration:1.5,
    delay:0.1,
stagger:1

})
tl.from(".imgdiv img",{
    opacity:0,
    x:1000,
    rotate:460,
    duration:1,
    delay:0.2,
stagger:1

})
gsap.from(".last h4",{
    opacity:0,
    x:-100,
    duration:0.8,
    delay:1,
stagger:1

})