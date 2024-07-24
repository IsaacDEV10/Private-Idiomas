let buttonMenu = document.getElementById('button-menu')
let menu = document.getElementById('menu-mobile')
let overlay = document.getElementById('overlay-menu')

buttonMenu.addEventListener('click', ()=>{
    menu.classList.add('open-menu')
})

menu.addEventListener('click', ()=>{
    menu.classList.remove('open-menu')
})

overlay.addEventListener('click', ()=>{
    menu.classList.remove('open-menu')
})

