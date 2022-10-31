/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu=document.getElementById('nav__menu'),
 navToggle=document.getElementById('nav-toggle'),
 navClose=document.getElementById('nav-close');


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
//     const navMenu=document.getElementById('nav__menu')
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


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/


/*==================== CHANGE BACKGROUND HEADER ====================*/ 


/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 