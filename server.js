const express = require('express');
const {router} = express
const routerCart = require('./routes/cart/index')
const routerProd = require('./routes/products/index')


const app = express();
const PORT = 8080
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const admin = Boolean(true)

app.use( "/cart", routerCart)
app.use( "/productos", routerProd)

app.get ("/", (req,res)=> res.send("proyecto final 1.0"))

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
});
server.on("error", error => console.log(`Error en servidor ${error}`))
