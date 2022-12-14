/* Navbar toggler */

var toggler = document.querySelector('.toggler')
var navlinks = document.querySelector('.nav-links')

toggler.addEventListener('click', function () {
    navlinks.classList.toggle('circle-toggle')
})

/* Dropdown List */

var categories = document.querySelector('.categories')
var dropdown = document.querySelector('.dropdown-list')

categories.addEventListener('click', function () {
    dropdown.classList.toggle('hide')
})

/* Navbar-Scroll Behavior */

var navbarDefault = document.querySelector('.navbar-default')

window.addEventListener('scroll', function () {
    navbarDefault.classList.toggle('navbar-default', window.scrollY <= 50)
    navbarDefault.classList.toggle('navbar-scroll', window.scrollY > 50) 

})


/* Dark Light Mood */

var allPage = document.querySelector('.all-page')
var dark = document.querySelectorAll('.dark-light')
var sun = document.querySelector('.fa-sun')
var moon = document.querySelector('.fa-moon')

allPage.classList.add(localStorage.getItem("pagecolor") || "light")

var classes = [];

for(var i = 0; i < dark.length; i++){
    classes.push(dark[i].getAttribute("data-color"));

    dark[i].addEventListener(
        "click",function(){
            allPage.classList.remove(...classes);

            allPage.classList.add(this.getAttribute("data-color"));

            localStorage.setItem("pagecolor", this.getAttribute("data-color"));
        })}

if(allPage.classList[1] === "light"){
    sun.classList.add('hide')
}
if(allPage.classList[1] === "dark"){
    moon.classList.add('hide')
}

sun.addEventListener('click',function(){
    sun.classList.toggle('hide')
    moon.classList.toggle('hide')
})

moon.addEventListener('click',function(){
    sun.classList.toggle('hide')
    moon.classList.toggle('hide')
})


