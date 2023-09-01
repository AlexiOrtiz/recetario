function showRecipe(recipeId) {
    // Ocultar todas las pestañas de recetas
    var recipeTabs = document.querySelectorAll('.recipe-tab');
    recipeTabs.forEach(function(tab) {
        tab.style.display = 'none';
    });

    // Mostrar la pestaña de la receta seleccionada
    document.getElementById(recipeId).style.display = 'block';
}


function showRecipe(recipe, button) {
    var content = "";
    if (recipe === 'pizza') {
        content = "<h3>Pizza</h3><p>Aquí va la receta de la pizza...</p>";
    } else if (recipe === 'ravioles') {
        content = "<h3>Ravioles</h3><p>Aquí va la receta de los ravioles...</p>";
    } else if (recipe === 'sopa-paraguaya') {
        content = "<h3>Sopa Paraguaya</h3><p>Aquí va la receta de la sopa paraguaya...</p>";
    }
}