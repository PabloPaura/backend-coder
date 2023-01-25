//Nota: El código se puede refactorizar para optimizar.

import {promises as fs} from "fs";

//Ceamos la clase ProductManager:

class ProductManager {
    constructor(){
        this.path = "productos.txt";
        this.products = []
    }

    static id = 0;
// Método para agregar productos y id increnmentable:
    addProduct = async (title, description, price, thumbnail, code, stock)=> {
        ProductManager.id ++;

        let newProduct = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            id : ProductManager.id
        }

        this.products.push(newProduct)

        await fs.writeFile(this.path, JSON.stringify(this.products))
    }

//Función para leer los productos:
    readProduct = async () => {
        let respuesta = await fs.readFile(this.path, 'utf-8');
        return JSON.parse(respuesta);
    }

//Método para obtener todo el array de productos:
    getProducts = async ()=> {
        let respuesta2 = await this.readProduct()
        return console.log(respuesta2);
    }


    // exist(id){
    //     return respuesta3.find(product => product.id === id)
    // }

//Método para obtener productos por ID:
    getProductById = async (id) => {
        let respuesta3 = await this.readProduct()
       
        if(!respuesta3.find(product => product.id === id)) {
            console.log("El producto no se encuentra en catalogo")
        } else {
            console.log(respuesta3.find(product => product.id === id));
        }  
    }

//Método para borrar producto por ID:
    deleteProduct = async (id) => {
        let respuesta3 = await this.readProduct();
        let productoFiltrado = respuesta3.filter(product => product.id != id)
        await fs.writeFile(this.path, JSON.stringify(productoFiltrado));
        console.log(`El producto con el id ${id} fue eliminado del catalogo`)
        console.log(productoFiltrado)
    }

//Método para modificar producto sin cambiar el ID:
     updateproducts = async ({id, ...producto}) => {
        await  this.deleteProduct(id);
        let productosAnteriores = await this.readProduct();
        let productosNuevos = [{ id, ...producto }, ...productosAnteriores];
        await fs.writeFile(this.path, JSON.stringify(productosNuevos))
     }
}

//Creamos nuevo producto:
const productos = new ProductManager

//Productos:

// productos.addProduct("Pink Floyd The dark side of the Moon", "CD Edición limitada",  4500, "https://drive.google.com/file/d/1Hd89SB-wuPU8WDn9kZwXepJfxJm91xV-/view?usp=sharing", "PF01", 10)
// productos.addProduct("Pink Floyd The division bell", "CD Edición limitada", 4800, "https://drive.google.com/file/d/14QQngh5wXh_Mi-87_qDbQ2DW5OtrWaTo/view?usp=sharing", "PF02", 8)

//Testing de los métodos:

productos.getProducts()
//productos.getProductById(1)
//productos.deleteProduct(2)