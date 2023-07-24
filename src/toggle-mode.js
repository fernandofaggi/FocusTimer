let darkMode = true
const buttonToggle = document.getElementById('toggle-mode')

buttonToggle.addEventListener('click', (event) =>{
  document.documentElement.classList.toggle('light')
  
  // Ja declara a variavel e faz if
  const mode = darkMode ? 'light' : 'dark' 

  
  
  event.currentTarget
    .querySelector('span').textContent = `${mode} mode ativado ` 

  darkMode = !darkMode
  })
