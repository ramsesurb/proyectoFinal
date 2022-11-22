const { promises: fs } = require('fs');


class ContenedorCart {

    //metodos prod
   
    async getAll(){
        try {
            const content = JSON.parse(await fs.readFile(`./api/productos.json`,'utf-8'))
            return content
            
        } catch (error) {
        console.log(error)
        return []
        }
    }

    async getByid (id){
        try {
            const prod = await this.getAll()
            const getByid = prod.filter(e => e.id === id)
            
            
            return getByid
        } catch (error) {
        console.log(error)
        }

    }
//metodos cart
    async getCart() {
        try {
            const content = JSON.parse(await fs.readFile(`./api/cart.json`,'utf-8'))
            return content
            
        } catch (error) {
        console.log(error)
        return []
        }
    }
    async addToCart (id){
            
        try {
            const time = Date.now()
            const cart = await rute.getCart()
            const product = await rute.getByid(id)
            const addProd= {time, product}
            const  newCart = cart.concat (addProd)
            await fs.writeFile(`./api/cart.json`, JSON.stringify(newCart ,null, 2)) 
            
 
            return cart
        } catch (error) {
        console.log(error)
        }

    }
   
    async deleteByIdCart (id){
        try {
            const cart = await rute.getCart()
            const deleteByid = cart.filter(e => e.id !== id)
            await fs.writeFile(`./api/cart.json`, JSON.stringify(deleteByid ,null, 2))
           
            return deleteByid
        } catch (error) {
        console.log(error)
        }

    }
    async emptyCart (){
        try {
            let products = await rute.getCart()
            products = []
            await fs.writeFile(`./api/cart.json`, JSON.stringify(products,null, 2))
        } catch (error) {
        console.log(error)
        }

    }
    

    
}
    
const rute = new ContenedorCart ("cart.json")
module.exports = ContenedorCart


