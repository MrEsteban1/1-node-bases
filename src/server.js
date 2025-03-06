require('dotenv').config()
const saludarUsuario = require('./env-variables/env-handler')
const borrarArchivo = require('./file-system/deleteFIle')
const leerArchivo = require('./file-system/readFile')
const { escribirAchivo_1, escribirAchivo_2 } = require('./file-system/writeFIle')
const ejemploImporting = require("./importar-exportar/importing")

function saludar(){
    console.log('hola mundo!')
}

console.info('Iniciando Aplicación de Bases de Node:')

console.info('\nEjemplo 1: Funcion Saludo')
saludar()

console.info('\nEjemplo 2: Funcion Saludos con nombre en variable ENV')
saludarUsuario(process.env.NOMBRE)

console.info('\nEjemplo 3: Funcion Importar')
ejemploImporting(process.env.ACTION)

console.info('\nEjemplo 4: Funcion leerArchivo')
leerArchivo()

console.info('\nEjemplo 5: Funciones para escribir archivo')
console.info('\nFunción nro 1:')
escribirAchivo_1()

console.info('\nFunción nro 2:')
escribirAchivo_2()

console.info('\nEjemplo 6: Funciones para borrar archivo')
borrarArchivo()