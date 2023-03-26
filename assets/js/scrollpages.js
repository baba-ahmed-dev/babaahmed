var $body = $('body')

const scroll_about = () => {
    $body.removeClass('is-menu-visible');
    let one = document.querySelector('#one');
    window.scrollTo(0, one.offsetTop - 130 );
}

const scroll_skill = () => {
    $body.removeClass('is-menu-visible');
    let two = document.querySelector('#two');
    window.scrollTo(0, two.offsetTop - 170 );
}

const scroll_certificate = () => {
    $body.removeClass('is-menu-visible');
    let three = document.querySelector('#three');
    window.scrollTo(0, three.offsetTop - 140 );
}

const scroll_projects = () => {
    $body.removeClass('is-menu-visible');
    let four = document.querySelector('#four');
    window.scrollTo(0, four.offsetTop - 50 );
}

const scroll_contact = () => {
    $body.removeClass('is-menu-visible');
    let footer = document.querySelector('#footer');
    window.scrollTo(0, footer.offsetTop + 50 );
}



var one = document.querySelector('#about').addEventListener('click', function(){
    scroll_about();
});
var two = document.querySelector('#skills').addEventListener('click', function(){
    scroll_skill();
});
var three = document.querySelector('#certificate').addEventListener('click', function(){
    scroll_certificate();
});
var four = document.querySelector('#projects').addEventListener('click', function(){
    scroll_projects();
});
var footer = document.querySelector('#contact').addEventListener('click', function(){
    scroll_contact();
});