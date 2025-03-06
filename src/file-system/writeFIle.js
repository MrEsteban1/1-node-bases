const fs = require('fs')
const path = require('path')

/*
    ----- Primer forma de escribir un archivo -------
    Recordemos que si no esta creado lo crea y escribe.
    Si existe el archivo, entonces reemplaza el contenido con lo que se le indique
*/

function escribirAchivo_1 (){
    try {
        // Con ayuda de path, se captura la ubicación exacta de la carpeta y se indica donde guardar el archivo
        const ubicacion = path.join(__dirname, 'files/metodo_1.txt')
        const mensaje = 'Metodo 1: Escribir con appendFile()'
        fs.appendFileSync(ubicacion, mensaje)
        
        //El archivo debería estar en la carpeta 'files'
        console.log('Archivo con metodo appendFIleSync  creado!')
    } catch (error) {
        // En caso de no poder crearse el archivo, se captura el error.
        console.log('Error ejecutando el metodo 1 para escribir un archivo:', error.message)
    }
}


/*
    ----- Sgunda forma de escribir un archivo -------
    Igual al primer metodo, si no esta creado el archivo lo crea y escribe.
    Si existe el archivo, entonces reemplaza el contenido con lo que se le indique
*/

function escribirAchivo_2(){
    try {
        const ubicación = path.join(__dirname, 'files/metodo_2.txt')
        const mensaje = 'Metodo 2: Escribir con writeFile()'

        fs.writeFileSync(ubicación, mensaje)

        console.log('Archivo metodo writeFIleSync creado!')
    } catch (error) {
        // En caso de no poder crearse el archivo, se captura el error.
        console.log('Error ejecutando el metodo 2 para escribir un archivo:', error.message)
    }
}

module.exports = {
    escribirAchivo_1,
    escribirAchivo_2
}