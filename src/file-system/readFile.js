const fs = require('fs')

function leerArchivo(){
    try {
        const mensaje = fs.readFileSync(__dirname +'/Example.txt',{encoding:'utf-8'})
        console.log('El archivo dice lo siguiente: ' + mensaje)        
    } catch (error) {
        console.error('No se pudo leer el archivo Example.md', error.message)
    }
}

module.exports = leerArchivo
