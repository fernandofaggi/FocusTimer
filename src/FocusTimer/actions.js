import state from "./state.js"
import * as timer from "./timer.js"
import  * as el from "./elements.js"
import * as sounds from "./sounds.js"

export function toggleRunning(){
  state.isRunning = document.documentElement.classList.toggle('running')
  
  console.log(state.isRunning)
  timer.countdown ()
  sounds.buttonPressAudio.play()




  
}

export function timeupdateup(){
  
  
  console.log(state.isRunning)
  timer.updatetimeup ()
  sounds.buttonPressAudio.play()

  
}

export function timeupdatedown(){
  
  
  console.log(state.isRunning)
  timer.updatetimedown ()
  sounds.buttonPressAudio.play()

  
}


export function reset(){
  state.isRunning = false;
  state.isRunning = document.documentElement.classList.remove('running')
  timer.updateDisplay() /*Volta o display para o estado inicial */
  
  sounds.buttonPressAudio.play()
  console.log(state.isRunning)
}

export function set(){
  el.minutes.setAttribute('contenteditable',true) /* Altera o conteudo do minutes no browser*/
  el.minutes.focus() /*Coloca o foco no elemento minutes na tela */

}

export function toggleMusic(){

  state.isMute = document.documentElement.classList.toggle('music-on')
  console.log('oi')

  if(state.isMute){
    sounds.bgaudio.play()
    return
  }
    sounds.bgaudio.pause()

  console.log(state.isRunning)
}

export function toggleMusicRain(){

  state.isMute = document.documentElement.classList.toggle('rain-on')
  console.log('rain')
  sounds.buttonPressAudio.play()

  if(state.isMute){
    sounds.rainaudio.play()
    return
  }
    sounds.rainaudio.pause()

  console.log(state.isRunning)
}

export function toggleMusicCoffee(){

  state.isMute = document.documentElement.classList.toggle('coffee-on')
  console.log('cafe tocando')

  if(state.isMute){
    sounds.coffeeaudio.play()
    return
  }
    sounds.coffeeaudio.pause()

  console.log(state.isRunning)
}

export function toggleMusicForest(){

  state.isMute = document.documentElement.classList.toggle('forest-on')
  console.log('forest tocando')

  if(state.isMute){
    sounds.forestaudio.play()
    return
  }
    sounds.forestaudio.pause()

  console.log(state.isRunning)
}

export function toggleMusicFire(){

  state.isMute = document.documentElement.classList.toggle('fire-on')
  console.log('fire tocando')

  if(state.isMute){
    sounds.fireaudio.play()
    
    return
  }
    sounds.fireaudio.pause()

  console.log(state.isRunning)
}