function pageAnimation(){
var tl = gsap.timeline()

tl.from("nav h1, nav h4, nav button",{
    y:-20,
    duration:0.5,
    delay:1,
    opacity:0,
    stagger:0.2

})
tl.from(".centerpr1 h1",{
    x:-200,
    opacity:0,
    duration:0.5
    
})
tl.from(".centerpr1 p",{
    x:-100,
    opacity:0,
    duration:0.4
})
tl.from(".centerpr1 button",{
    opacity:0,
    duration:0.4
})
tl.from(".centerpr2 img",{
    opacity:0,
    duration:0.5
},"-=0")
}
pageAnimation()

var tl2 = gsap.timeline({
    scrollTrigger:{
        delay:2,
        trigger:".section2",
        scroller:"body",
        marker:true,
        start:"top 60%",
        scrub:5,
        end:"top 0"
        
    }
})

tl2.from(".services",{
    y:30,
    opacity:0
})
tl2.from(".elem.line1.left",{
    x:-300,
    opacity:0,
    duration:1
},"anime")
tl2.from(".elem.line1.right",{
    x:300,
    opacity:0,
    duration:1
},"anime")
tl2.from(".elem.line2.left",{
    x:-300,
    opacity:0,
    duration:1
},"left")
tl2.from(".elem.line2.right",{
    x:300,
    opacity:0,
    duration:1
},"left")
tl2.from(".part3, .gray, .gray-part1, .gray-part2",{
    x:-600,
    duration:1,
    opacity:0,
   
})
tl2.from(".case-study",{
    y:30,
    opacity:0,
   
})
tl2.from(".ABC",{
    x:300,
    opacity:0,
    

})