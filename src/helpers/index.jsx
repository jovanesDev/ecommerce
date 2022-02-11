export const dameTotat = (carrito) => {
  let suma = 0;
  for (let i = 0; i < carrito.length; i++) {
    suma = suma + carrito[i].cantidad * carrito[i].precio;
  }
  return suma;
};

export const verificaSiExisteEnCarrito = (carrito, item) => {
  // let existe = false;
  // for (let i = 0; i < carrito.length; i++) {
  //   if (carrito[i].id === item.id) existe = true;
  // }
  // return existe;
   return carrito.some((a) => a.id === item.id)
};

export const unificarItems = (carrito, item) => {
  // let array = carrito;
  // for (let i = 0; i < array.length; i++) {
  //   if (array[i].id === item.id) {
  //     array[i].cantidad = item.cantidad;
  //     array[i].stock = item.stock;
  //   }
  // }
  //return array;

  return carrito.map((a) => {
    if(a.id === item.id){
      a.cantidad = item.cantidad;
      a.stock = item.stock;
    }
    return a;
  } )
};


export const validarTodoLLeno = (campos) => {
  // let invalid = false;
  // campos.map((campo) => campo === "" ? invalid = true : invalid = false)
  // return invalid
  return campos.some((campo) => campo === "")
}

