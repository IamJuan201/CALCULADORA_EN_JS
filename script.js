const display = document.getElementById('pantalla');
const botones = document.querySelectorAll('button');

botones.forEach(function(boton) {
    boton.addEventListener('click', function(event) {
        // Para que el formulario no limpie la pantalla
        event.preventDefault();

        // Se guarda el texto del botón que se presiono
        const textoBoton = boton.textContent;

        if (textoBoton == 'AC') {
            display.value = '';
        } 
        else if (textoBoton == 'DE') {
            display.value = display.value.slice(0, -1);
        } 
        else if (textoBoton == '=') {
            // Se guarda la operación, calculamos y mostramos todo junto
            const operacion = display.value;
            const resultado = eval(operacion);
            display.value = operacion + '=' + resultado;
        } 
        else {
            // Si ya hay un resultado con = se limpia la pantalla antes de empezar de nuevo
            if (display.value.includes('=')) {
                display.value = '';
            }
            // Agregamos el número o signo a lo que ya había
            display.value = display.value + textoBoton;
        }
    });
});
