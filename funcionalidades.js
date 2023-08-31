function showRecipe(recipeId) {
    // Ocultar todas las pestañas de recetas
    var recipeTabs = document.querySelectorAll('.recipe-tab');
    recipeTabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    // Mostrar la pestaña de la receta seleccionada
    document.getElementById(recipeId).style.display = 'block';
}