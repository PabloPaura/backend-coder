class ProductManager {
  constructor() {
    this.products = [];
  }

  static id = 0;

  //Método para generar nuevo producto:
  addProduct(title, description, price, thumbnail, code, stock) {
    for(let i = 0; i < this.products.length; i++){
        if(this.products[i].code === code){
            console.log(`El codigo ${code} ya se encuentra en uso.`);
            break;
        }
    }
    
    //Creamos new product:
    let newProduct = { title, description, price, thumbnail, code, stock};

    //Validamos los campos obligatorios:

  if(!Object.values(newProduct).includes(undefined)){
    ProductManager.id++;
    this.products.push({...newProduct, id: ProductManager.id});
  }else{
    console.log("Todos los campos son requeridos")
  }

  }

  //Método para agregar producto:
 getProduct() {
    return this.products;
 }


  //Función para buscar id con método find:
  exist(id) {
    return this.products.find((producto) => producto.id === id);
  }

  //Opeerador ternario para devolver producto o not found:
  getProductById(id) {
    this.exist(id)
      ? console.log(this.buscarProducto(id))
      : console.log("Not found");
  }
}

//Creamos un nuevo Product manager:
const productos = new ProductManager();

//Primer llamada a getproduct opara obtener el array vacío;
console.log(productos.getProduct());

//Producto1:
productos.addProduct(
  "Pink Floyd The dark side of the Moon",
  "CD Edición limitada",
  4500,
  "https://drive.google.com/file/d/1Hd89SB-wuPU8WDn9kZwXepJfxJm91xV-/view?usp=sharing",
  "PF01",
  10
);

//Producto2, para testing ID autoincrementable:
productos.addProduct(
  "Pink Floyd The division bell",
  "CD Edición limitada",
  4800,
  "https://drive.google.com/file/d/14QQngh5wXh_Mi-87_qDbQ2DW5OtrWaTo/view?usp=sharing",
  "PF02",
  8
);

//Segunda llamada de product para obrtener los productos ingresados:
console.log(productos.getProduct());

//Testing oproducto by id:
productos.getProductById(3);
