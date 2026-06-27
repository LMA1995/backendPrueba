import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

//instanciar express
const app= express()
const PORT=3000
//middlewares :son funciones que se ejecutan entre la solicitud y la logica de mi aplicacion
app.use(cors()); //Corse nos permite conexiones remotas
app.use(express.json())// middlewar de express permite interpretar datos que lleguen en la solicitud o request en formato json
app.use(morgan());



console.log('Primer mensaje de este backend')

//diseño de endpoints (a donde nos van a hacer las solcitudes)

app.get('/api/saludo' ,(req, res)=>{
    res.json('Bienvenidos a nuestro backend')
})

app.get('/api/despedida', (req, res)=>{
    res.json('Muchas gracias por visinarnos, saludos')
})

//Endpoints de prueba en base a la tarea del 8/6
app.get('/api/productos', (req,res)=>{
    const productos= ['Cappuccino', 'Medialunas', 'tostado de jamon y queso', 'Licuados'];
    res.json(`Listado de productos : ${productos}`)
})

app.get('/api/oferta', (req,res)=>{
    res.json(`Ofertas el dia de hoy: 2x1 en licuados de frutilla`)
})
app.get('/api/horarios', (req,res)=>{
    res.json(`Horarios de atencion: Lunes a Sabados de 08:00 a 20:00 hs`)
})
//endpoint Prueba
app.get('/api/vehiculos', (req,res) =>{
    const vehiculos =['🏎️','🚕','🚗','🚔']
    res.json({
        mensaje: 'Bienvenidos a nuestro backend',
        vehiculos
    })
})

//CONFIGURACION DEL PUERTO
//Con el metodo listen de express escucho la constante donde almaceno el puerto la cual retorna el mensaje de conexion por medio del callback(funcion flecha)
app.listen(PORT, ()=>{
    console.log(`Servidor activo en el puerto : ${PORT}`)
})
