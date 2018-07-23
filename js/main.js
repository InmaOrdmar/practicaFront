export class Main {
    constructor() {
        //HANDLERS
        // sections
        this.sections = document.querySelectorAll('main section')
        // nav
        this.nav = document.querySelector('nav')
        this.navButton = document.querySelector('#nav-button')
        this.navElements = document.querySelector('#nav-elements-container')
        // links 
        this.homeLink = document.querySelector('#home-link')
        this.menuLinks = document.querySelectorAll('nav li.sections')
        this.sectionsAndLinks = this.joinArrays(this.sections, this.menuLinks)
    }
        // EVENT LISTENERS 
    defineEventListeners() {
        window.addEventListener('scroll', this.stickyNav.bind(this))
        window.addEventListener('scroll', this.highlightLinks.bind(this))
        this.navButton.addEventListener('click', this.toggleNavElements.bind(this))
    }
        //METHODS
    stickyNav() {        
        if (this.navHeight) {
            if (window.pageYOffset > this.navHeight) {
                this.nav.classList.add('scroll')  
            } else if (window.pageYOffset < this.navHeight) {
                this.nav.classList.remove('scroll')
            }
        } else if (window.pageYOffset >= this.nav.offsetTop) {
            this.navHeight = this.nav.offsetTop
        }
    }

    toggleNavElements() {
        this.navElements.classList.toggle('open')
        setTimeout(() => {this.navElements.classList.remove('open')}, 4000)
    }

    highlightLinks() {
        if (window.pageYOffset < this.sections[0].offsetTop) {
            this.homeLink.classList.add('current')
            this.menuLinks.forEach(link => link.classList.remove('current'))
        } else {
            this.homeLink.classList.remove('current')
            this.sectionsAndLinks.forEach((pair, i, array) => {
                if (window.pageYOffset >= (pair[0].offsetTop - 30)) {
                    if (!array[i + 1]) {
                        array[i - 1][1].classList.remove('current')
                        pair[1].classList.add('current')
                    } else if (window.pageYOffset < array[i + 1][0].offsetTop - 30) {
                    pair[1].classList.add('current')
                    } else {
                        pair[1].classList.remove('current')
                    }
                } else {
                    pair[1].classList.remove('current')
                }
            })
        }
    }



    joinArrays(arr1, arr2) {
        let result = []
        arr1.forEach((element, i) => {
            let dupla = [element, arr2[i]]
            result.push(dupla)
        })
        return result
    }
}