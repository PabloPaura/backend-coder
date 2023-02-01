
//Imports:
import express from 'express';
import ProductManager from './components/ProductManager.js';

const app = express();
app.use(express.urlencoded({ extend : true}));

//Llamamos al productManager para crear los productos y leerlos:
const productos = new ProductManager()
const readProducts = productos.readProduct();

//console.log(await readProducts)


//Creamos el limit para traer la cantidad de productos deseada:
app.get('/products', async (req, res) => {
    let limit = parseInt(req.query.limit);
    if(!limit) return res.send(await readProducts)
    let allProducts = await readProducts;
    let productLimit = allProducts.slice(0, limit)
    //console.log(limit)
    res.send(productLimit);
});

//Filtramos productos por ID:
app.get('/products/:id', async (req, res) => {
    let id = parseInt(req.params.id);
    let allProducts = await readProducts;
    let productById = allProducts.find(product => product.id === id);
    res.send(productById)
});

//Creamos puerto y servidor:
const PORT = 4000;
const server =  app.listen(PORT, () => {
    console.log(`Servidor express en local host ${PORT}`)
});

server.on("error", (error) => console.log(`Error en el servidor ${error}`));