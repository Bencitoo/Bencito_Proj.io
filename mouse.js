const main = document.querySelector('.main-component')
const mouseRef = document.querySelector('.mouseCursor');
gsap.set(mouseRef,{
    xPercent:-50,
    yPercent:-50,
    y:0,x:0,
    transformOrigin:"center center"
})

console.log(main,mouseRef)
// console.log(".mouseCursor .rotate")
// console.log(".mouseCursor .rotate")
gsap.set(".mouseCursor .rotate",{transformOrigin:"44.6% 48.2%"})
gsap.set(".mouseCursor .plus",{transformOrigin:"44.6% 48.2%"})
const rotateTween = gsap.to('.mouseCursor .rotate',{duration:0.5,pause:true})
const rotateTween2 = gsap.to('.mouseCursor .plus',{duration:0.5,pause:true})
const xTo = gsap.quickTo(mouseRef,"x",{duration:0.3})
const yTo = gsap.quickTo(mouseRef,"y",{duration:0.3})

const RAD2DEG = 180 / Math.PI;

let x = 0, 
    y = 0;

main.addEventListener("mousemove",(e) => {
    var rect = main.getBoundingClientRect()
    let xDif = e.clientX - x
    let yDif = e.clientY - y

    let newX = e.clientX - rect.x
    let newY = e.clientY - rect.y

    xTo(newX)
    yTo(newY)

        x = e.clientX;
        y = e.clientY;
        rotateTween.vars.rotation = (Math.atan2(yDif, xDif) * RAD2DEG - 40) + "_short";
        rotateTween2.vars.rotation = (Math.atan2(yDif, xDif) * RAD2DEG - 40) + "_short";
        
        // This one will restart the method rotation so it can rotate again once the mouse
        // is move
        rotateTween.invalidate().restart();
        rotateTween2.invalidate().restart();
    // }
})