const toggleMenu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')

// display the mobile toggle menu
const mobileMenu = () =>{
    toggleMenu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')

}

toggleMenu.addEventListener('click', mobileMenu);

// show active menu when scrolling

const highlightMenu = () =>{
    const elem = document.querySelector('.highlight'); // elem is the highlight class
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    let scrollPos = window.scrollY  // need a scroll position to see at which position we are at
   console.log('position:', scrollPos);

    // adds the 'highlight' class to the menu items
    // we want the highlight only to be shown on big screen not mobile --> so greater than 960px
    // and scrollPos less than 600px the highlight should switch to the other section
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight') // removing it from about again so it doesn't keep adding it when scrolling back up
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight')
        homeMenu.classList.remove('highlight')
        servicesMenu.classList.remove('highlight')
        return

    } else if (window.innerWidth > 960 && scrollPos < 2345){
        servicesMenu.classList.add('highlight')
        aboutMenu.classList.remove('highlight')
        return

    }

    if((elem && window.innerWidth > 960 && scrollPos < 600) || elem) {
        elem.classList.remove('highlight')
    }

}

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

// close mobile menu when clicking on mobile item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars){
        toggleMenu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu)