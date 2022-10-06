var click = document.querySelectorAll('.click')
var allproducts = document.querySelector('.allproducts')
var sidecontent = document.querySelector('.side-content')
var left = document.querySelector('.fa-angle-double-left')
var right = document.querySelector('.fa-angle-double-right')

click.forEach(function(click) {

click.addEventListener('click', function () {
    allproducts.classList.toggle('lspace')
    allproducts.classList.toggle('nspace')

    right.classList.toggle('hide')
    left.classList.toggle('hide')

    sidecontent.classList.toggle('hide')

})

})

var showingg = document.querySelector('.show-ing')
var ing = document.querySelector('.ing')
var downn = document.querySelector('.downn')

var showinggg = document.querySelector('.show-ingg')
var ingg = document.querySelector('.ingg')
var downnn = document.querySelector('.downnn')

var showingggg = document.querySelector('.show-inggg')
var inggg = document.querySelector('.inggg')
var downnnn = document.querySelector('.downnnn')


    
    showingg.addEventListener('click', function () {
        ing.classList.toggle('hide')
        downn.classList.toggle('fa-angle-down')
        downn.classList.toggle('fa-angle-up')
    })
        
    showinggg.addEventListener('click', function () {
        ingg.classList.toggle('hide')
        downnn.classList.toggle('fa-angle-down')
        downnn.classList.toggle('fa-angle-up')
    })
        
    showingggg.addEventListener('click', function () {
        inggg.classList.toggle('hide')
        downnnn.classList.toggle('fa-angle-down')
        downnnn.classList.toggle('fa-angle-up')
        })

    


