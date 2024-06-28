let timeout;

let move = document.getElementById("mouse-move");

function mousemove(xscale,yscale){
window.addEventListener("mousemove",function(dets){
    move.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`
})
}

function page1animation(){
    gsap.to(".boundingelem",{
        y:0,
        duration: 1,
        stagger: 0.5
    })
    gsap.to(".navbound>h3",{
        y:0,
        duration:.5
    })
}
function page1animation2(){
    gsap.to(".boundingelem1",{
        y:0,
        duration:.3,
        stagger:.2
    })
}
page1animation();
setTimeout(page1animation2,1000)
setTimeout(() => {gsap.to("#page1-bottom",{
    opacity:1,
    duration:.8
    })
}, 1000);

function mouseskew(){
    let xscale = 1;
    let yscale = 1;
    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove",(dets) => {
        clearTimeout(timeout);
        xscale = gsap.utils.clamp(.8,1.2,dets.clientX - xprev);
        yscale = gsap.utils.clamp(.8,1.2,dets.clientY - yprev);
        xprev = dets.clientX;
        yprev = dets.clientY;
      
       mousemove(xscale,yscale);
})

timeout = setTimeout(() => {window.addEventListener("mousemove",function(dets){
    move.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`})
}, 100)
}

mouseskew();

document.querySelectorAll(".elem").forEach((elem) => {
            elem.addEventListener("mouseleave",() => {
                gsap.to(elem.querySelector(".image"),{
                 opacity: 0,
                 ease: Power1
                })
             })

         let rotate = 0;
         elem.addEventListener("mousemove",(dets) => {
           let diff = dets.clientY - elem.getBoundingClientRect().top;
           let diffrot = dets.clientX - rotate;
           rotate = dets.clientX;
           gsap.to(elem.querySelector(".image"),{
            opacity: 1,
            ease: Power2,
            duration: 0.5,
            top: diff - 235,
            left: dets.clientX - 450,
            rotate: gsap.utils.clamp(-20,20,diffrot)
           })
        })
})


