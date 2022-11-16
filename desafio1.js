//Desafío 1:

//Declaración de la clase:

class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    };

    getFullName(){
        return `${this.nombre} ${this.apellido}`
    };

    addMascotas(mascota){
        (this.mascotas).push(mascota);
    };

    countMascotas() {
        return (this.mascotas).length
    };

    addBook(titulo, autor){
        (this.libros).push({titulo: titulo, autor: autor});
    };

    getBookNames(){
        let titulo = [];
        (this.libros).forEach(libro =>{
            titulo.push(libro.titulo);
        });
        return titulo
    };
};

//Instancia:
const nombre = 'Pablo';
const apellido = 'Paura';
const libros = [{titulo: 'El nombre de la rosa', autor: 'Umberto Eco'}, {titulo: 'La mesa de los galanes', autor: 'Roberto Fontanarrosa'}, {titulo: 'Bar del infierno', autor: 'Alejandro Dolina'}];
const mascotas = ['Bondiola', 'Chimuela', 'Gandalf']
const usuario1 = new Usuario(nombre, apellido, libros, mascotas);

//Devoluciones por consola:

//Nombre completo del usuario1:
console.log(usuario1.getFullName());

//Cantidad de mascotas en el array inicial:
console.log(usuario1.countMascotas());

//Agrego una mascota al array del usuario1:
usuario1.addMascotas('Rudecindo');
//Logueo de la nueva cantidad de mascotas en el array:
console.log(usuario1.countMascotas());

//Lista de libros por título del array del usuario1:
console.log(usuario1.getBookNames());

//Agrego un nuevo libro al array de libros:
usuario1.addBook('Cuentos completos', 'Isaac Asimov');
console.log(usuario1.getBookNames());