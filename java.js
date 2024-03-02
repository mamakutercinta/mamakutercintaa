let stars = document.getElementById('stars');
let penjor = document.getElementById('penjor-removebg-preview');
let PURA = document.getElementById('PURA-removebg-preview');
let text = document.getElementById('text');
let button = document.getElementById('button');

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    text.style.marginBottom= value * 1 + 'px';
    button.style.marginBottom = value * 1 + 'px';
    penjor.style.marginBottom = value * 0.5 + 'px';
    PURA.style.marginBottom = value * 0.5 + 'px';

})