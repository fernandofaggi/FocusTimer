import state from "./state.js"
import { controls } from './elements.js';
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from './timer.js';
import { controls2 } from './elements.js';


export function registerControls() {
    controls.addEventListener('click', (event) => {

      console.log(event.target) // Registra no console.log o que foi clicado
      // console.log(event.target.dataset.action) // Registra no console.log o com a clase dataaction


        const action = event.target.dataset.action
        if(typeof actions[action] != "function") {  //busca no modulo de acoes se ação clicada esta sendo exportada de actions 
            return
        }

        actions[action]()

    })

}

export function setMinutes(){
  el.minutes.addEventListener('focus',()=>{
    el.minutes.textContent =""
  })

  el.minutes.onkeypress = (event) => /\d/ .test(event.key) /*faz a verificação se é numero /\d/ se for retorna tru e libera a digitação */
  /*el.minutes.onkeydown = (event) => /\d/ .test(event.key) /*faz a verificação se é numero /\d/ se for retorna tru e libera a digitação */
  el.minutes.addEventListener('blur', (event) =>{
    let time =event.currentTarget.textContent
    time = time >60 ? 60 : time

    state.minutes =time
    state.seconds = 0;

    updateDisplay()
    el.minutes.removeAttribute('contenteditable')
  })
}

