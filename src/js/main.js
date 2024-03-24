
window.addEventListener('scroll', function() {
    const navbar = document.getElementsByClassName('navbar');
    if(window.scrollY > 0){
        navbar.classList.add('scroll');
    }
    else{
        navbar.classList.remove('scroll');
    }
});


