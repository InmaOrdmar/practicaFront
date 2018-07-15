export class Main {
    constructor() {
        //HANDLERS
        // sections
        this.eduSection = document.querySelector('#education')
        this.expSection = document.querySelector('#work-experience')
        this.h1About = document.querySelector('#about-me')
        this.h1Contact = document.querySelector('#contact')
        // section headers
        this.eduHeader = document.querySelector('#h1-edu')
        this.expHeader = document.querySelector('#h1-exp')
        this.aboutHeader = document.querySelector('#h1-about')
        this.contactHeader = document.querySelector('#h1-contact')
        // nav
        this.nav = document.querySelector('nav')
        // links 
        this.eduLink = document.querySelector('#edu-link')
        this.expLink = document.querySelector('#exp-link')
        this.aboutLink = document.querySelector('#about-link')
        this.contactLink = document.querySelector('#contact-link')
        // form
        this.form = document.querySelector('form')
    }
        // EVENT LISTENERS 
    defineEventListeners() {
        window.addEventListener('scroll', this.stickyNav)
        window.addEventListener('scroll', this.highlightCurrentSection)
        this.eduLink.addEventListener('click', this.animateEdu)
        this.expLink.addEventListener('click', this.animateExp)
        this.aboutLink.addEventListener('click', this.animateAbout)
        this.contactLink.addEventListener('click', this.animateContact)
    }

    stickyNav() {
        window.pageYOffset >= this.nav.offsetTop ? this.nav.classList.add('scroll') : this.nav.classList.remove('scroll')
    }
    // problema: con cada scroll recalcula el nav.offsetTop

    animateEdu() {
        console.log('click on education section')
    }
}