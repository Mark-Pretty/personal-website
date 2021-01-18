const navToggle = document.querySelector('.nav-toggle'); 

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open'); 
}); 


/* This closes the navbar menu when you click on a navbar link */
const navLinks = document.querySelectorAll('.nav__link'); 

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open'); //Removes nav-open from the class list
    })
})
