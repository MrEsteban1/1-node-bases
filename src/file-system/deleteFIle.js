const fs = require('fs')
const path = require('path')

async function borrarArchivo (){
    try {
        const ubicacion  = path.join(__dirname, 'archivo_borrable.txt')
        fs.writeFileSync(ubicacion, 'El archivo debe borrarse con Node JS')


    await setTimeout(_=> {
        fs.unlinkSync(ubicacion) 
        console.log('Archivo borrado correctamente!')

    },[5000])
        
    } catch (error) {
        console.error('No se pudo elimier el archivo especificado:', error.message)
    }
}

module.exports = borrarArchivo