const {Router} = require ("express")
const ContenedorCart = require('../../controllers/cart/ContenedorCart')
const productos = new ContenedorCart('../../api/cart.json')
const { promises: fs } = require('fs');

const routerCart = new Router ()

//get cart
routerCart.get('/', async (req, res) => {
    
    try
    {const prod = await productos.getCart();
     res.send (prod) 
    }  
    catch (err) {
     console.log(err);
    }
});

//delete products cart

routerCart.delete ("/:id" , async (req,res) => {
    const id = parseInt(req.params.id)
      try
      {const deleteProd = await productos.deleteByIdCart(id);  
      res.send (deleteProd) 
      }  
      catch (err) {
      console.log(err);
      }
})

// empty cart


routerCart.delete ("/" , async (req,res) => {
      
    try
    {const cart = await productos.emptyCart();
     res.send (cart) 
    }  
    catch (err) {
     console.log(err);
    }
})

routerCart.post ("/:id" , async (req,res) => {

    const id = parseInt(req.params.id)
    ;
    try
    {const addToCart = await productos.addToCart(id);  
     res.send (addToCart) 
     
    }  
    catch (err) {
     console.log(err);
    }
} )






module.exports = routerCart