
var tabContents = document.getElementsByClassName("tabcontent");
var tabButtons = document.getElementsByClassName("tablink");
tabButtons[0].classList.add("active"); // activar la primera receta
for (var i = 1; i < tabContents.length; i++) { // ocultar las demas
    tabContents[i].classList.add("hidden");
}

function showRecipe(recipeId) {
    // Ocultar todas las pestañas de recetas
    var recipeTabs = document.querySelectorAll('.recipe-tab');
    recipeTabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    // Mostrar la pestaña de la receta seleccionada
    document.getElementById(recipeId).style.display = 'block';
}

