import { Main } from './main.js'

import { Form } from './form.js'

(function(){
    window.addEventListener('load', 
    () => { new Main().defineEventListeners()
            new Form()
    })
}
)()