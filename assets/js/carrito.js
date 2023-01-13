// Carrito
// #1 BASE DE DATOS
let db = [
  {
    id: 1,
    nombre: 'Camiseta',
    descripcion: 'Camiseta blanca con logo de TypseScript',
    precio: 18.00,
    imagen: './assets/img/10.png',
    categoria: 'camisetas',
    cantidad: 20
  },
  {
    id: 2,
    nombre: 'Camiseta',
    descripcion: 'Camiseta gris con estampado de Vue',
    precio: 12.00,
    imagen: './assets/img/1.png',
    categoria: 'camisetas',
    cantidad: 28
  },
  {
    id: 3,
    nombre: 'Camiseta',
    descripcion: 'Camiseta gris claro con estampado de AngularJs',
    precio: 16.00,
    imagen: './assets/img/2.png',
    categoria: 'camisetas',
    cantidad: 32
  },
  {
    id: 4,
    nombre: 'Camiseta',
    descripcion: 'Playera negra con estampado de React',
    precio: 15.00,
    imagen: './assets/img/3.png',
    categoria: 'camisetas',
    cantidad: 12
  },
  {
    id: 5,
    nombre: 'Camiseta',
    descripcion: 'Playera amarilla con logo de Redux',
    precio: 10.00,
    imagen: './assets/img/4.png',
    categoria: 'camisetas',
    cantidad: 5
  },
  {
    id: 6,
    nombre: 'Camiseta',
    descripcion: 'Playera gris con logo de NodeJs',
    precio: 14.00,
    imagen: './assets/img/5.png',
    categoria: 'camisetas',
    cantidad: 40
  },
  {
    id: 7,
    nombre: 'Camiseta',
    descripcion: 'Playera negra con estampado de Sass',
    precio: 13.00,
    imagen: './assets/img/6.png',
    categoria: 'camisetas',
    cantidad: 23
  },
  {
    id: 8,
    nombre: 'Camiseta',
    descripcion: 'Playera gris con logo de HTML',
    precio: 15.00,
    imagen: './assets/img/7.png',
    categoria: 'camisetas',
    cantidad: 8
  },
  {
    id: 9,
    nombre: 'Camiseta',
    descripcion: 'Playera morada con logo de GitHub',
    precio: 11.00,
    imagen: './assets/img/8.png',
    categoria: 'camisetas',
    cantidad: 9
  }
]

// #2 Pintar los productos en el DOM
let productos = db

function pintarProductos() {
  for (let { id, nombre, precio, cantidad } of productos) {
    console.log(id, nombre, 'price', precio, 'qty:', cantidad)
  }
}

console.log('#1 pintando productos')
pintarProductos()

// #3 Carrito
let carrito = []

console.log('#Creando el carrito')

// #4 agregar al carrito
function agregarCarrito(id, cantidad = 1) {
  const productoEncontrado = productos.find((p) => p.id === id)

  if (productoEncontrado && productoEncontrado.cantidad > 0) {
    const articuloEncontrado = carrito.find((p) => p.id === id)

    if (articuloEncontrado) {
      if (checarStock(id, cantidad + articuloEncontrado.cantidad)) {
        articuloEncontrado.cantidad++
      } else {
        window.alert('No hay stock suficiente')
      }
    } else {
      carrito.push({ id: productoEncontrado.id, cantidad })
    }
  } else {
    window.alert('Producto agotado')
  }
}

console.log('Agregando productos')
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(5)
agregarCarrito(2)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)
agregarCarrito(1)

function checarStock(id, cantidad) {
  const producto = productos.find((p) => p.id === id)

  return producto.cantidad - cantidad >= 0
}

// #5 remover articulos
function removerDelCarrito(id, cantidad = 1) {
  const articulo = carrito.find((p) => p.id === id)

  if (articulo && articulo.cantidad - cantidad > 0) {
    articulo.cantidad--
  } else {
    carrito = carrito.filter((p) => p.id !== id)
  }
}

console.log('Removiendo uno por uno del carrito')
removerDelCarrito(1)

// #6 Eliminar del carrito
function eliminarDelCarrito(id) {
  console.log(id)
  const articulo = carrito.find((p) => p.id === id)
  const findIndex = carrito.indexOf(articulo)

  carrito.splice(findIndex, 1)
}

console.log('Eliminando un producto del carrito')
eliminarDelCarrito(5)

// #7 Contar Articulos
function contadorDeArticulos() {
  let suma = 0

  for (let articulo of carrito) {
    suma += articulo.cantidad
  }

  return suma
}

// #8 El total
function obtenerTotal() {
  let suma = 0

  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    suma += producto.precio * articulo.cantidad
  }

  return suma
}

// #9 Limpiar carrito
function limpiarCarrito() {
  carrito = []
}

// limpiarCarrito()

// #10 Comparar
function comprar() {
  for (let articulo of carrito) {
    const producto = productos.find(p => p.id === articulo.id)

    producto.cantidad -= articulo.cantidad
  }
  console.log('Productos actualizados')
  pintarProductos()
}


console.log('#Carrito:', carrito)
console.log('Total a pagar:', obtenerTotal())
console.log('Cantidad de articulos agregados al carrito:', contadorDeArticulos())

comprar()