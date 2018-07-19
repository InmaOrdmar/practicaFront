import { Main } from './main.js'

(function(){
    window.addEventListener('load', 
    () => { new Main().defineEventListeners()
            new Main().checkNavHeight()
    })
}
)()
//import {} from './form.js'