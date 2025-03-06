function saludarUsuario(nombre){
    if(nombre)
        console.log('Bienvenido '+ nombre)
    else
        console.log('Bienvenid! Por favor declara tu nombre en el .env')
}


module.exports = saludarUsuario