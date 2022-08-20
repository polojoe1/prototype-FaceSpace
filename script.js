var videoPattern = document.getElementById("video")
        window.addEventListener("scroll", function(){
            videoPattern.style.backgroundPosition = (+window.pageYOffset  +"px");
        })

var videoPattern1 = document.getElementById("video1")
        window.addEventListener("scroll", function(){
            videoPattern1.style.backgroundPosition = (+window.pageYOffset  +"px");
        })

const main_nav = document.getElementById('main_stuff');

window.addEventListener("scroll", () => {
    var y = window.scrollY;
    if (y >= 220){
        main_nav.classList.add('fade');
        return;
    }
    else{
        main_nav.classList.remove('fade');
        // note that this is a class defined in your CSS.
    }
});
// document.getElementById('vid').play();

const next_nav = document.getElementById("next_stuff");

window.addEventListener("scroll", () => {
    var y = window.scrollY;
    if (y >= 920){
        next_nav.classList.add('fade');
        return;
    }
    else{
        next_nav.classList.remove('fade');
        // note that this is a class defined in your CSS.
    }
});

const tough_nav = document.getElementById("tough_stuff");
window.addEventListener("scroll", () => {
    var y = window.scrollY;
    if (y >= 1650){
        tough_nav.classList.add('fade');
        return;
    }
    else{
        tough_nav.classList.remove('fade');
        // note that this is a class defined in your CSS.
    }
});
const forever_nav = document.getElementById("forever_stuff");
window.addEventListener("scroll", () => {
    var y = window.scrollY;
    if (y >= 2400){
        forever_nav.classList.add('fade');
        return;
    }
    else{
        forever_nav.classList.remove('fade');
        // note that this is a class defined in your CSS.
    }
});
