const display = document.querySelector('#pantalla');

const buttons = document.querySelectorAll('button');

buttons.forEach((boton) => {
    btn.addEventListener("click", () => { 
    if(btn.id === '=') { 

} else if (boton.id === 'ac') { 
    display.value = ''; 
} else if (boton.id === 'de') {
    display.value = display.value.slice(0, -1); 
} else { 
    display.value += boton.id; 
}});

})