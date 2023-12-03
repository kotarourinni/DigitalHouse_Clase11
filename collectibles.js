const fs = require("fs");

function importar(marca){
    switch (marca.toUpperCase())
    {
        case "HOT TOYS":
        const data = fs.readFileSync('./datos/figuras1.json', 'utf-8');
        return JSON.parse(data);

        case "BANDAI":
        const dataB = fs.readFileSync('./datos/figuras2.json', 'utf-8');
        return JSON.parse(dataB);

        case "STAR WARS":
        const dataSW = fs.readFileSync('./datos/figuras3.json', 'utf-8');
        return JSON.parse(dataSW);

        default:
            return "Ingrese una marca valida"
    }

}

module.exports = importar;