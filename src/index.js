require("../assets/stylesheets/styles.scss");

import ComponentLoader, {Component} from 'component-loader-js';

import logoTwitter from '/assets/icons/logo-twitter.png';
import logoDiscord from '/assets/icons/logo-discord.png';
import logoGithub from '/assets/icons/logo-github.png';
import logoInstagram from '/assets/icons/logo-instagram.png';
import logoFacebook from '/assets/icons/logo-facebook.png';

class Navbar extends Component {

    constructor() {
        super(...arguments);
        this.leftElements = document.createElement('div')
        this.rightElements = document.createElement('div')
        this.leftElements.classList.add('navbar-left')
        this.rightElements.classList.add('navbar-right')
        this.el.appendChild(this.leftElements)
        this.el.appendChild(this.rightElements)
        this.el.classList.add('navbar-container')

        this._addNavbarButton('HOME')
        this._addNavbarButton('ABOUT')
        this._addNavbarButton('PROJECTS')
        this._addNavbarButton('CONTACT')

        this._addContactButton('twitter', logoTwitter, "https://twitter.com/ePierre_dev")
        this._addContactButton('discord', logoDiscord, "https://discord.gg/rkS6f29tAP")
        this._addContactButton('github', logoGithub, "https://github.com/PierreEVEN")
        this._addContactButton('instagram', logoInstagram, "https://www.instagram.com/pieeerre_even")
        this._addContactButton('facebook', logoFacebook, "https://www.facebook.com/profile.php?id=100012040879211")
    }

    _addNavbarButton(text) {
        const navbarContainer = document.createElement('div')
        navbarContainer.id = text
        this.leftElements.appendChild(navbarContainer)
        new NavbarButton(navbarContainer)
    }

    _addContactButton(alias, image, link) {
        const contactContainer = document.createElement('div')
        contactContainer.id = alias
        contactContainer.image = image
        contactContainer.link = link
        this.rightElements.appendChild(contactContainer)
        new ContactButton(contactContainer)
    }


    destroy() {
        super.destroy();
    }
}

class NavbarButton extends Component {
    constructor() {
        super(...arguments);
        this.button = document.createElement('button')

        this.text = document.createElement('p')
        this.text.innerHTML = this.el.id

        this.button.appendChild(this.text)
        this.el.appendChild(this.button)
    }

    destroy() {
        super.destroy();
    }
}

class ContactButton extends Component {
    constructor() {
        super(...arguments);
        this.button = document.createElement('button')
        this.button.onclick = () => {
            window.open(this.el.link)
        }

        this.image = document.createElement('img')
        this.image.src = this.el.image
        this.image.innerHTML = this.el.id

        this.button.appendChild(this.image)
        this.el.appendChild(this.button)
    }

    destroy() {
        super.destroy();
    }
}

const componentLoader = new ComponentLoader({Navbar, NavbarButton, ContactButton});

document.addEventListener("DOMContentLoaded", function (event) {
    componentLoader.scan();
}); 