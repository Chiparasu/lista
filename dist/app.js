//se crea la clase padre
class Producto {
constructor(name,price,year){
this.name= name;
this.price= price;
this.year= year;
}

}

class UI{
    //se crean los modulos para las funciones
addProductos(producto){
   const productoLista= document.querySelector("#product-list")
   const elementosLista= document.createElement("div");
   //innerhtml hace un pequeño espacio de html dentro del java
   elementosLista.innerHTML=` <ul class="cont-list"> 
 
   <li class="list"><span>nombre</span> ${producto.name}</li>
   <li class="list"><span>precio</span> ${producto.price}</li>
   <li class="list"><span>año</span> ${producto.year}</li>
   <a class="delete" name= "delete" href="#">Delete</a>
   </ul>
   `//los simbolos de dollar le agregan el valor de las constantes en las listas
   productoLista.appendChild(elementosLista)
}
//se le agrega el efecto de borrar al boton
borrarProducto(productoLista){
    if(productoLista.name==="delete"){
        productoLista.parentElement.parentElement.remove()
    }
}
resetearFormulario(){}
mostrarMensaje(){}
}

//forma base de hacer un formulario
document.querySelector("#product-form").addEventListener("submit",function(e){
e.preventDefault()
//aqui se le agrega el hecho de tomar y  guardar los datos
const name=document.querySelector("#name").value
const price=document.querySelector("#price").value
const year=document.querySelector("#year").value

//instanciando a una nueva clase que es rama de la clase padre
const producto=new Producto(name,price,year)
//se crea una nueva clase para agregar los productos
const ui= new UI()
ui.addProductos(producto)
})
//aqui se crea una nueva clase que aunque se llame igual tiene un efecto distinto ya que esta fuera 
document.querySelector("#product-list").addEventListener("click",function(e){
    const ui = new UI()
    ui.borrarProducto(e.target)
})



