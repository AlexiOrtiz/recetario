
var tabContents = document.getElementsByClassName("tabcontent");
var tabButtons = document.getElementsByClassName("tablink");
tabButtons[0].classList.add("active"); // activar la primera receta
for (var i = 1; i < tabContents.length; i++) { // ocultar las demas
    tabContents[i].classList.add("hidden");
}

function showRecipe(recipe, button) {

    // Remover la clase "active" de todos los botones de pestañas
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
        tabContents[i].classList.add("hidden");
    }

    // Agregar la clase "active" al botón de la pestaña seleccionada
    button.classList.add("active");
    document.getElementById("div-"+recipe).classList.remove("hidden");

}

