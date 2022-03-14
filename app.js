'use strict'
//nav
const navSlide = ()=>{
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.nav-links')
    const navLinks= document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active')
    
        navLinks.forEach((link,index) => {
            if (link.style.animation) {
                link.style.animation = ''
            } else{
            link.style.animation = `navLinkFade 0.5s ease forwards  ${index / 7 + 0}s`
            }
        });
        burger.classList.toggle('toggle')

    });
}
navSlide();
//slider
const slider = document.querySelector('.slider-images')
const sliderImages = document.querySelectorAll('.slider-images img')

let prevBtn = document.querySelector('#prevBtn')
let nextBtn = document.querySelector('#nextBtn')

//Count
let counter = 1
const size = sliderImages[0].clientWidth

slider.style.transform = 'translateX(' + (-size * counter) + 'px)'

nextBtn.addEventListener('click',()=>{
    if(counter >= sliderImages.length - 1) return;
    slider.style.transition = "transform 0.8s ease-in-out";
    counter++
    // console.log(counter)
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    slider.style.transition = "transform 0.8s ease-in-out";
    counter--
    // console.log(counter)
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
})

slider.addEventListener('transitionend', () => {
    if(sliderImages[counter].id === 'lastClone'){
        slider.style.transition = "none"
        // console.log("none")
        counter = sliderImages.length -2
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
}
    if(sliderImages[counter].id === 'firstClone'){
        slider.style.transition = "none"
        counter = sliderImages.length - counter
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})
//social media buttons
    function goFace() {
    window.open("https://www.facebook.com/hixongreen/")
  }
    function goInsta() {
      window.open("https://www.instagram.com/hixongreen/")
  }

