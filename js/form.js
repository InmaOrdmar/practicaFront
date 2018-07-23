export class Form {
    constructor() {
    // HANDLERS
        this.form = document.querySelector('form')
        this.nameField = document.querySelector('#name')
        this.emailField = document.querySelector('#email')
        this.selectionField = document.querySelector('#selection')
        this.otherField = document.querySelector('#other-text')
        this.phoneField = document.querySelector('#phone')
        this.messageField = document.querySelector('#message')
        this.button = document.querySelector('button')

        this.data = {
            name: '',
            email: '',
            selection: '',
            other: '',
            phone: '',
            message: ''
        }

        // LISTENERS
        this.form.addEventListener('submit', this.readForm.bind(this))
        this.selectionField.addEventListener('change', this.showOtherField.bind(this))
        this.messageField.addEventListener('change', this.validateMessage.bind(this))
    }
    //METHODS

    showOtherField() {
        if (this.selectionField.options.selectedIndex === 3) {
            this.otherField.classList.remove('hidden')
        } else {
            this.otherField.classList.add('hidden')
        }
    }

    readForm(e) {
        e.preventDefault(e)
        if (this.validateMessage()) {
            this.saveData()
        }
    }

    saveData() {
        this.data = {
            name: this.nameField.value,
            email: this.emailField.value,
            selection: this.selectionField.options[this.selectionField.selectedIndex].value,
            other: this.otherField.value,
            phone: this.phoneField.value,
            message: this.messageField.value
        }
        console.dir(this.data)
    }

    validateMessage() {
        if (this.messageField.value.split(' ').length <= 150) {
            this.messageField.setCustomValidity('')
            return true
        } else {
            this.messageField.setCustomValidity('Please write a maximum of 150 words. Thank you!')
            return false
        }
    }

}