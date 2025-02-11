const { ladrar, aullar, rugir } = require("./exporting");
const defaultOpcion = ladrar
const opcion = process.env.ACTION || ladrar

switch(opcion){
    default:
        console.log('No se eligió una opción correcta. Vuelva a intentarlo en las variables .env')
}