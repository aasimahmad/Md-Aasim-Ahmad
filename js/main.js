/*===== MENU SHOW Y HIDDEN =====*/
const navMenu = document.getElementById("nav-menu"),
  toggleMenu = document.getElementById("nav-toggle"),
  closeMenu = document.getElementById("nav-close"),
  navCursor = document.querySelector('.nav__logo');

// SHOW
toggleMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// HIDDEN
closeMenu.addEventListener("click", () => {
  navMenu.classList.remove("show");
});


/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*===== SCROLL SECTIONS ACTIVE LINK =====*/
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', scrollActive);

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
            if (sectionId != 'home') {
              navCursor.style.display = 'block';
            } else {
              navCursor.style.display = 'none';
            }
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
    })
}

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '70px',
  duration: 1100,
  cleanup: true
});


/*SCROLL HOME*/
sr.reveal('.home__title',{}); 
sr.reveal('.home__profession',{});
sr.reveal('.home__data',{delay: 200});
sr.reveal('.home__img',{delay: 300}); 
sr.reveal('.home__social',{}); 
sr.reveal('.home__social-link',{interval: 200}); 

/*SCROLL ABOUT*/
sr.reveal('.about__img',{}); 
sr.reveal('.about__data',{delay: 200}); 
sr.reveal('.about__information',{delay: 100}); 

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle',{}); 
sr.reveal('.skills__content',{}); 
sr.reveal('.skills__data',{interval: 100});

/*SCROLL EXPERIENCE*/
sr.reveal('.experience__subtitle',{}); 
sr.reveal('.experience__content',{}); 

/*SCROLL EDUCATION*/
sr.reveal('.education__subtitle',{}); 
sr.reveal('.education__content',{interval: 200});

/*SCROLL SERVICES*/
sr.reveal('.services__content',{interval: 200}); 

sr.reveal('.project__title',{}); 
sr.reveal('.project__description',{});
sr.reveal('.button',{}); 

/*SCROLL QUOTE*/
sr.reveal('.quote__title',{}); 

/*SCROLL CONTACT*/
sr.reveal('.contact__input',{interval: 200}); 

sr.reveal('.footer__social',{}); 

// Message to Developers

console.log(`
██╗  ██╗███████╗██╗     ██╗      ██████╗     ██╗    ██╗ ██████╗ ██████╗ ██╗     ██████╗ 
██║  ██║██╔════╝██║     ██║     ██╔═══██╗    ██║    ██║██╔═══██╗██╔══██╗██║     ██╔══██╗
███████║█████╗  ██║     ██║     ██║   ██║    ██║ █╗ ██║██║   ██║██████╔╝██║     ██║  ██║
██╔══██║██╔══╝  ██║     ██║     ██║   ██║    ██║███╗██║██║   ██║██╔══██╗██║     ██║  ██║
██║  ██║███████╗███████╗███████╗╚██████╔╝    ╚███╔███╔╝╚██████╔╝██║  ██║███████╗██████╔╝
╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝ ╚═════╝      ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═════╝ 

Hi Geek, 
I love to be friends with like minded people. Message me, maybe we could help each other.
Cheers,
Md Aasim Ahmad
mailto: aasimahmad5@gmail.com`)