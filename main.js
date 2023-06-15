//selecciona el elemento html con la clase pantalla y lo asigna en la variable 
const pantalla = document.querySelector(".pantalla");
//seleciona todos los elementos del html con un btn y lso guarda con una variable botones 
const botones = document.querySelectorAll(".btn");

//realiza una iteracion sobre cada boton de la lista botones 
botones.forEach(boton => {
    boton.addEventListener("click", () => { //agrega un elemento click 
        //console.log(.boton.textContent);
        //obtner el texto y guardarlo en una variable
        const botonApretado = boton.textContent;
        if (boton.id === "c") { //verificamos si el boton tiene id c 
            pantalla.textContent = "0"; //de cumplirse establece el cont de la pantalla como 0 y restablece la function
            return;
        }

        if (boton.id === "borrar") { //verifica si el id tiene el btn tiene el id borrar
            if (pantalla.textContent.length === 1 || pantalla.textContent === "error") { //de ser el borrar, verifica la longituddel cont de pantalla
                pantalla.textContent = "0"; //si long es 1 o el cont es error, el cont de pantalla sera 0
            } else {
                pantalla.textContent = pantalla.textContent.slice(0, -1); //de lo contrario elimina el ult caracter del cont de pantalla
            }
            return; //se retorna y termina la function
        }

        if (boton.id === "igual") {
            try {
                pantalla.textContent = eval(pantalla.textContent);
                return;
            } catch {
                pantalla.textContent = "error";
            }
            return;
        }

        if (pantalla.textContent === "0" || pantalla.textContent === "error") { //verifica si es 0 o error
            pantalla.textContent = botonApretado; //reemplaza el cont de pantalla x boton apretado
        } else {
            pantalla.textContent += botonApretado; //agrega el text de boton apretado al cont existente de pantalla 
        }
    })
})