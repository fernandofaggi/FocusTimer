import state from "./state.js"
import * as el from "./elements.js"
import { reset } from "./actions.js"
import { bgaudio, kitchenTimer } from "./sounds.js"

export function countdown(){
  if(!state.isRunning){  /*Faz o break da recursão */
    return
  }
  
  let minutes = Number(el.minutes.textContent)        
  let seconds = Number(el.seconds.textContent)        

  seconds--

  if (seconds < 0){
    seconds = 59
    minutes--
  }

  if(minutes <0){
    reset()
    kitchenTimer.play()
    bgaudio.pause()
    return
  }

  updateDisplay(minutes, seconds)
  setTimeout(()=>countdown(), 1000) /* (setTimeout) executa um callback da função depois de um determinado tempo */
}


export function updateDisplay (minutes , seconds){
  
  minutes = minutes ?? state.minutes /*nullish coalescing operator */
  if(minutes > 60) {
    minutes = 60
  }
  seconds = seconds ?? state.seconds

  el.minutes.textContent = String(minutes).padStart(2,"0")
  el.seconds.textContent = String(seconds).padStart(2,"0")
  

}

export function updatetimeup(){


  let minutes = Number(el.minutes.textContent) 
  let seconds = Number(el.seconds.textContent) 
  minutes = minutes + 5

  updateDisplay(minutes, seconds)
  countdown()

}

export function updatetimedown(){


  let minutes = Number(el.minutes.textContent) 
  let seconds = Number(el.seconds.textContent) 
  minutes = minutes - 5

  updateDisplay(minutes, seconds)
  countdown()

}

// Um callback é uma função passada como argumento pra outra função para ser executa mais tarde 
// callback chame de volta depois de algum tempo 