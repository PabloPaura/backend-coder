import {promises as fs} from "fs";

//Ceamos la clase ProductManager:

export default  class ProductManager {
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
//const productos = new ProductManager

//Productos:

// productos.addProduct("Pink Floyd The dark side of the Moon", "CD Edición limitada",  4500, "https://drive.google.com/file/d/1Hd89SB-wuPU8WDn9kZwXepJfxJm91xV-/view?usp=sharing", "PF01", 10)
// productos.addProduct("Pink Floyd The division bell", "CD Edición limitada", 4800, "https://drive.google.com/file/d/14QQngh5wXh_Mi-87_qDbQ2DW5OtrWaTo/view?usp=sharing", "PF02", 8)
// productos.addProduct("Eric Clapton Umplugged", "CD Edición limitada", 4600, "https://drive.google.com/file/d/1dZAMR5FFE9sqBvn2Bj1bm1wdbeK4i2vH/view?usp=sharing", "EC01", 15)
// productos.addProduct("Queen A night at the opera", "CD Edición limitada", 5200, "https://drive.google.com/file/d/1OxOhy07VFA3f4JDyYf1yO10O2oRNLVOE/view?usp=sharing", "QU01", 6)
// productos.addProduct("Pink Floyd The wall", "CD Edición limitada", 4700, "https://drive.google.com/file/d/1e3f3rVgxi5hzqQt5AZCVZi6ayxuLV021/view?usp=sharing", "PF03", 5)
// productos.addProduct("El natty combo Sonido real", "CD Edición nacional", 3800, "https://drive.google.com/file/d/1KOAP-XRF-QFAN-1O9s_HimrYbTIalZh6/view?usp=sharing", "NC01", 12)
// productos.addProduct("Madness Complete madness", "CD Edición limitada", 4200, "https://drive.google.com/file/d/1ly_wLK3Lvj5ByAU8GA23PiqkWdERMdge/view?usp=sharing", "MD01", 4)
// productos.addProduct("Soda Stereo Doble vida", "CD Edición nacional", 4900, "https://drive.google.com/file/d/16yZyOVC7ttfjcWuMqHI1V3lQg9A93IoO/view?usp=sharing", "SS01", 7)
// productos.addProduct("Redondos Bang bang", "CD Edición nacional", 5300, "https://drive.google.com/file/d/16OJmANFStDAAprf2i7jUIN6Vt0wmkmr_/view?usp=sharing", "RR01", 10)
// productos.addProduct("Divididos 40 dibujos", "CD Edición nacional", 5100, "https://drive.google.com/file/d/1-nTk009It9S2YSbLAL5J3EmlN5_rIG5b/view?usp=sharing", "DV01", 9)




//Testing de los métodos:

//productos.addProduct();
//productos.getProducts();
//productos.getProductById(1);
//productos.deleteProduct(2);