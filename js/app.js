// Variables
const menu = document.querySelector('.menu');
let navbarLinks = document.querySelector('.list-container');
const main = document.querySelector('#main');
const navbarSticky = menu.offsetTop;
const linksMenu = document.querySelectorAll('.lists li a');
let on_off = true;
let btnMenu = document.querySelector('.btn-menu');

// Sticky Menu (scroll)

window.onscroll = () => {
    
    if (window.pageYOffset >= navbarSticky) {
       menu.classList.add('sticky');
       main.style.marginTop = "160px";
    }else{
        menu.classList.remove('sticky');
        main.style.marginTop = "0px";
    }

    // Go Top
    if (window.pageYOffset >= 500) {
        document.querySelector('.go-top').style.right = "0";
    }else{
        document.querySelector('.go-top').style.right = "-100%";
    }

    document.querySelector('.go-top').addEventListener('click', () => {
        document.body.scrollTop = '0';
        document.documentElement.scrollTop = '0';
    });

}

// Add Class "active"
linksMenu.forEach((element) => {
     element.addEventListener('click', (event) => {

         linksMenu.forEach((link) => {
           link.classList.remove('active');
         });

         event.target.classList.add('active');

     });

});

// Menu Responsive

btnMenu.addEventListener('click', () => {

    if (on_off) {
       navbarLinks.style.left = "0";
       navbarLinks.style.transition = "0.5s";

       on_off = false;

    }else{

        on_off = false;

       navbarLinks.style.left = "-100%";
       navbarLinks.style.transition = "0.5s";

       on_off = true;


    }

});



