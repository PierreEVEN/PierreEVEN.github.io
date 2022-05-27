require("../assets/stylesheets/styles.scss");

import ComponentLoader, {Component} from 'component-loader-js';

class Navbar extends Component {

    constructor() {
        super(...arguments);
        this.el.classList.add('navbar-container')
        this._addNavbarButton('HOME')
        this._addNavbarButton('ABOUT')
        this._addNavbarButton('PROJECTS')
        this._addNavbarButton('CONTACT')

        this._addContactButton('twitter', '', "https://twitter.com")
        this._addContactButton('discord', '', "https://discord.com")
        this._addContactButton('github', '', "https://github.com")
        this._addContactButton('instagram', '', "https://instagram.com")
    }

    _addNavbarButton(text) {
        this.test = document.createElement('div')
        this.test.id = text
        this.el.appendChild(this.test)
        new NavbarButton(this.test)
    }

    _addContactButton(alias, image, link) {
        this.test = document.createElement('div')
        this.test.id = alias
        this.el.appendChild(this.test)
        new NavbarButton(this.test)
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

        this.text = document.createElement('p')
        this.text.innerHTML = this.el.id

        this.button.appendChild(this.text)
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