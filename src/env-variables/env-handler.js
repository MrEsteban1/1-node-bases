require('dotenv').config()

const nombre = process.env.NOMBRE
console.log(process.env.NOMBRE)
function saludarUsuario(){
    if(nombre)
        console.log('Bienvenido '+ nombre)
    else
        console.log('Bienvenid! Por favor declara tu nombre en el .env')
}

saludarUsuario()