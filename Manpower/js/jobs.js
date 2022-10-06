let noOfChar = 200;
let contents = document.querySelectorAll('.post-content');

contents.forEach(content => {
    if (content.textContent.length < noOfChar) {
        content.nextElementSibling.style.display = "none";
    }

    else {
        let displayText = content.textContent.slice(0, noOfChar);
        let moreText = content.textContent.slice(noOfChar);

        content.innerHTML = `${displayText}<span class="dots">...</span> <span class="hide more">${moreText}</span>`;
    }
});

function readMore(btn) {

    let post = btn.parentElement;

    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");

    btn.textContent == "Read More" ? btn.textContent = "Read Less" : btn.textContent = "Read More";

    
}