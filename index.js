import express from 'express'

//instanciar express
const app= express()
const PORT=3000


console.log('Primer mensaje de este backend')

//CONFIGURACION DEL PUERTO
//Con el metodo listen de express escucho la constante donde almaceno el puerto la cual retorna el mensaje de conexion por medio del callback(funcion flecha)
app.listen(PORT, ()=>{
    console.log(`Servidor activo en el puerto : ${PORT}`)
})
