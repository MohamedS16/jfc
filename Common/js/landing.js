// new fullpage("#fullpage", {
//     autoScrolling: true,
//     navigation: true,
//     onLeave: (origin, destination, direction) => {
//         const section = destination.item;
//         const logg = section.querySelector("h1");
//         const tl = new TimelineMax({ delay: 0.5 });
        
//         tl.fromTo(logg, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });

//     }
// });


var contt = document.querySelector('.contain2');
var slider = document.querySelector('.slider');
var cardo = document.querySelector('.card1');
var cardt = document.querySelector('.card2');

var layy = document.querySelector('.layer');

var nnav = document.querySelector('.nnaavv');



const tl = new TimelineMax();

tl.fromTo(slider, 1.2, { x: "-100%" }, { x: "0%", ease: Power2.easeInOut })

.fromTo(contt, 1.2, { height: "0%", opacity: 0 }, { height: "80%",opacity: 1, ease: Power2.easeInOut }, "-=0.3")
.fromTo(contt, 1.2, {width: "100%"}, {width: "80%", ease: Power2.easeInOut},"-=0.3")

.fromTo(cardo, 1.2 , {opacity: 0, x:-1000}, {opacity:1, x:0, ease: Power2.easeInOut}, "-=1.2")
.fromTo(cardt, 1.2 , {opacity: 0, x:1000}, {opacity:1, x:0, ease: Power2.easeInOut}, "-=1.2")


.fromTo(nnav, 1.2 , {opacity: 0}, {opacity:1, ease: Power2.easeInOut}, "-=0.2")

    






            
