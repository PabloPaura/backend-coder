class ProductManager {
    constructor(){
        this.products = [];
    }

    static id = 0;

    //Método para generar nuevo producto:
    addProduct(title, description, price, thumbnail, code, stock){

        ProductManager.id++;
        this.products.push({title, description, price, thumbnail, code, stock, id: ProductManager.id});
    }

    //Método para agregar producto:
    getProduct(){
        return this.products;
    }

    //Método para buscar existencia por id:

    //Función para buscar id con método find:
    buscarProducto(id){
        return this.products.find((producto) => producto.id === id)
    }

    //Opeerador ternario para devolver producto o not found:
    getProductById(id){
        this.buscarProducto(id) ? console.log(this.buscarProducto(id)) : console.log("Not found");
    }
}

const productos = new ProductManager;

//Producto1:
productos.addProduct("Pink Floyd The dark side of the Moon", "CD Edición limitada", 4500, "https://drive.google.com/file/d/1Hd89SB-wuPU8WDn9kZwXepJfxJm91xV-/view?usp=sharing", "PF01", 10);

//Producto2, para testing ID autoincrementable:
productos.addProduct("Pink Floyd The division bell", "CD Edición limitada", 4800, "https://drive.google.com/file/d/14QQngh5wXh_Mi-87_qDbQ2DW5OtrWaTo/view?usp=sharing", "PF02", 8);


//Testing productos:
//console.log(productos.getProduct());

//Testing oproducto by id:
productos.getProductById(3);

