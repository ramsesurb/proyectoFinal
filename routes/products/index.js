const {Router} = require ("express")
const Contenedor = require('../../controllers/products/Contenedor')
const productos = new Contenedor('../../api/productos.json')
const { promises: fs } = require('fs');


const routerProd = new Router ()

//getAll productos

routerProd.get('/', async (req, res) => {
    
    try
    {const prod = await productos.getAll();
     res.send (prod) 
    }  
    catch (err) {
     console.log(err);
    }
});

//get by id

routerProd.get('/:id', async (req, res) => {
    
    const id = parseInt(req.params.id)
    ;
    try
    {const prodById = await productos.getByid(id);  
     res.send (prodById) 
     
    }  
    catch (err) {
     console.log(err);
    }
});


//save new product
routerProd.post ("/" , async (req,res) => {
    
    const prod= req.body;
    try
    {const saveProd = await productos.save(prod);  
     res.send (saveProd) 
    }  
    catch (err) {
     console.log(err);
    }
    
});

//edit product

routerProd.put ("/:id" , async (req,res) => {
    const prod = req.body;
    const id = parseInt(req.params.id)
    try
    {
     const saveProd = await productos.getByid(id);
     const newProd = {id:id, tittle: prod.tittle ,price: prod.price, thumbnail: prod.thumbnail }
     const deleteProd = await productos.deleteById(id);
     await deleteProd.push(newProd);
     await fs.writeFile('../primeraEntrega/api/productos.json', JSON.stringify(deleteProd ,null, 2))
     res.send ( newProd )
    }  
    catch (err) {
     console.log(err);
    }
})

//delete by id
routerProd.delete ("/:id" , async (req,res) => {
      const id = parseInt(req.params.id)
        try
        {const deleteProd = await productos.deleteById(id);  
        res.send (deleteProd) 
        }  
        catch (err) {
        console.log(err);
        }
})


module.exports = routerProd