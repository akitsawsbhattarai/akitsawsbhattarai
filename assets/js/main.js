/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu=document.getElementById('nav-menu'),
 navToggle=document.getElementById('nav-toggle'),
 navClose=document.getElementById('nav-close');

 console.log(navMenu)


/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',(e)=>{
        e.preventDefault()
        console.log ('clickedd...')
        navMenu.classList.remove('show-menu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const  navLink=document.querySelectorAll('.nav__link')

// function linkAction(){
//     const navMenu=document.getElementById('nav-menu')
//     // when we click on each nav__link, we remove the show-menu class
//     navMenu.classList.remove('show-menu')
// }
// navLink.forEach(n=>n.addEventListener('click',linkAction))

if(navClose){
    navLink.forEach(n=>n.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    }))
}
/*==================== ACCORDION SKILLS ====================*/
const skillsContent=document.getElementsByClassName('skills__content')
// console.log(skillsContent)
skillsHeader=document.getElementsByClassName('skills__header')

function toggleSkills(){
    let itemClass=this.parentNode 

    if(this.parentNode.className=='skills__content skills__open'){
        this.parentNode.className ='skills__content skills__close'
      }

      
        
    else if (this.parentNode.className =='skills__content skills__close'){
        for(i=0; i< skillsContent.length; i++){
            skillsContent[i].className='skills__content skills__close'
        } 
        this.parentNode.className='skills__content skills__open'
    }

       
}
Array.from(skillsHeader).forEach((el)=>{
    // console.log(el)
    el.addEventListener('click', toggleSkills)

})

/*==================== QUALIFICATION TABS ====================*/
const tabs=document.querySelectorAll( '[data-target]')
const tabContents=document.querySelectorAll('[data-content]')
// console.log(tabs)
// console.log(tabContents)

tabs.forEach(tab=>{
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        Array.from(tabs).forEach(tab=>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')

    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal')
const modalBtns = document.querySelectorAll('.services__button')
const modalCloses = document.querySelectorAll('.services_modal-close')


let modal = function(modalClick){
    modalViews[modalClick].classList.add('active__modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', ()=>{
        modal(i)
        // modalViews[i].classList.add('active__modal')
    })
})

modalCloses.forEach((modalClose, i) => {
    modalClose.addEventListener('click', ()=>{
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active__modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiper = new Swiper(".portfolio__container", {
  cssMode: true,
  loop:true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable:true,

  },
  mousewheel: true,
  keyboard: true,
});


/*==================== TESTIMONIAL ====================*/

let swiperTestimonial = new Swiper(".testimonial__container", {
    cssMode: true,
    loop:true,
    grabCursor: true,
    spaceBetween: 48,
  
   
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
      dynamicBullets: true,
      
    },
    mousewheel: true,
    keyboard: true,

    breakpoints:{
        568:{
            slidePerView: 2
        }
    }
  });

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
 const sections = document.querySelectorAll('section[id]')
 console.log(sections)

 function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && sectionTop <= sectionTop +sectionHeight){
            let y= document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
           

        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
    const nav = document.getElementById('header')

    if (this.scrollY >=80) nav.classList.add('scroll-header');else nav.classList.remove('scroll-header')
    
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scrollup');
    console.log(scrollUp)
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');else scrollUp.classList.remove('show-scroll')
    
}

window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// previously selected topic(if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme class 
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// we validate if the user previously chose a topic
if (selectedTheme){
    // if the validation is fulfilled, we ask wht the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add': 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add': 'remove'](iconTheme)
}

// activate / deactivate the theme manually withthe button
themeButton.addEventListener('click', ()=> {
    // add/remove dark theme icon
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // save theme and icon chose by user
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon() )
})