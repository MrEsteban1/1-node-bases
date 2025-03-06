const { ladrar, aullar, rugir } = require("./exporting");
const defaultOpcion = 'l'

function ejemploImporting(opcion = defaultOpcion){
    console.info('Variable de opcion es:',process.env.ACTION )

    switch(opcion.toLowerCase()){
        case 'l': 
            ladrar()
            break;
        case 'a':
            aullar()
            break;
        case 'r':
            rugir();
            break;
        default:
            console.log('No se eligió una opción correcta. Vuelva a intentarlo en las variables .env')
    }
}

module.exports = ejemploImporting
