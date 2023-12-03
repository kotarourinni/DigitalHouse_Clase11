let importarJ = require("./collectibles");

/*Crear una variable por cada una de las marcas, invocando a la función (importar) y pasarle como argumento
 cada una de las marcas de las figurascoleccionables (hotToys - bandai - starWars).*/
let hotToys = importarJ("HOT TOYS");
let bandai = importarJ("BANDAI");
let starWars = importarJ("STAR WARS");

//Crear un único array (unifiedCollectibles) con todas las listas de las marcas de las figuras coleccionables.
let unifiedCollectibles = [...hotToys, ...bandai, ...starWars];

/*Crear un objeto literal (collectibles) que tenga como primer atributo (figuras) y
contenga la lista de todas las figuras importadas. */
let collectibles = {
    figuras: unifiedCollectibles,
    /*Desarrollar la funcionalidad (listFigures). Tendrá la responsabilidad de
    mostrar al usuario todos los datos de las diferentes figuras almacenadas. */
    listFigures: function(){
        this.figuras.forEach(figure => console.log(figure));
    },
    /* Crear una funcionalidad (figuresByBrand) que reciba por parámetro la
    marca de la figura. Tendrá la responsabilidad de retornar todas aquellas
    figuras que correspondan a la marca recibida por parámetro.*/
    figuresByBrand: function (marca) {
        return this.figuras.filter(figure => figure.marca === marca);
    }
}

console.log("Todas las figuras:");
console.log("----------------------");
collectibles.listFigures();
console.log("\nFiguras de Hot Toys:");
console.log("----------------------");
console.log(collectibles.figuresByBrand("Hot Toys"));
console.log("\nFiguras de Bandai:");
console.log("----------------------");
console.log(collectibles.figuresByBrand("Bandai"));
console.log("\nFiguras de Star Wars:");
console.log("----------------------");
console.log(collectibles.figuresByBrand("Star Wars"));
