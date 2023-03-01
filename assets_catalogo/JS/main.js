const productos = [
    {
        id: "item 1",
        titulo: "Revestimiento",
        imagenes : [
            {
                id: 'item 1',
                url:'./assets_catalogo/IMG/Mayken/2.png',
            },   
        ],
        imagen: "./assets_catalogo/IMG/item 1.jpg",
        info:{
            tipo:'Revestimiento de pared de Hormigon',
            Material: 'Hormigón pigmentado con o sin tratamiento simil madera',
            Precio:' por m2',
            Medida: '60x14,5x3 cm',
            Peso: '5kg aproximadamente por unidad', 
            Cantidad: '11,50 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-126',
        },
        categoria: {
            nombre: "Mayken",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 2",
        titulo:"Revestimiento",
        recomend:'Recomendado',
        imagen:"./assets_catalogo/IMG/item 2.jpg",
        info:{
            tipo:'Revestimiento de pared o piso',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '50x13,5x2,5 cm',
            Peso: '4.5kg aproximadamente por unidad', 
            Cantidad: '15 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-048 ',
        },
        categoria: {
            nombre: "Quebracho y Corteza",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 3",
        titulo: "Revestimiento",
        recomend:'Recomendado',
        imagen: "./assets_catalogo/IMG/item 3.jpg",
        info:{
            tipo:'Revestimiento de pared',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '57x19x2,5 cm',
            Peso: '4.6 Kg aproximadamente por unidad', 
            Cantidad: '9 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-079',
        },
        categoria: {
            nombre: "Murete San Juan (MSJ)",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 4",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 4.jpg",
        info:{
            tipo:'Revestimiento de pared',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '44x49x3,5 cm',
            Peso: '52.2 Kg aproximadamentepor unidad', 
            Cantidad: '36 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-117',
        },
        categoria: {
            nombre: "Simil Piedra (SP)",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 5",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 5.jpg",
        info:{
            tipo:'Revestimiento de pared',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '40x20x25 cm',
            Peso: '3.5 Kg aproximadamente por unidad', 
            Cantidad: '12,5 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-126',
        },
        categoria: {
            nombre: "Roca",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 6",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 6.jpg",
        info:{
            tipo:'Revestimiento de pared',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '37x59x3+/-4 cm',
            Peso: '23 Kg aproximadamente por unidad', 
            Cantidad: '40 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-083',
        },
        categoria: {
            nombre: "Murete San Luis (MSL)",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 7",
        titulo: "Revestimiento",
        recomend:'Recomendado',
        imagen: "./assets_catalogo/IMG/item 7.jpg",
        info:{
            tipo:'Revestimiento de pared',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '10x27,5x3 cm',
            Peso: '4.6kg aproximadamente por unidad', 
            Cantidad: '36 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-101',
        },
        categoria: {
            nombre: "Traverlite",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 8",
        titulo:"Revestimiento",
        imagen: "./assets_catalogo/IMG/item 8.jpg",
        info:{
            tipo:'Revestimiento de pared',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '10x10x2 cm',
            Peso: '5kg aproximadamente por unidad', 
            Cantidad: '100 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-037',
        },
        categoria: {
            nombre: "Adoquin",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 9",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 9.jpg",
        info:{
            tipo:'Revestimiento de pared',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '44x60x3,5+/-4 cm',
            Peso: '1.2kg aproximadamente por unidad', 
            Cantidad: 'No-definido',
            Pallet: 'por pallet',
            Código: 'ER0000-097',
        },
        categoria: {
            nombre: "Piedra Umha",
            id: "Revestimientos"
        },
        precio: 1000
    },
    {
        id: "item 10",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 10.jpg",
        info:{
            tipo:'Revestimiento de pared',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '28x10x3 cm',
            Peso: '4.6kg aproximadamente por unidad', 
            Cantidad: '36 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Prisma",
            id: "Revestimientos"
        },
        precio: 1000
    }
    ,
    {
        id: "item 11",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 11.jpg",
        info:{
            tipo:'Revestimiento de pared',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '14,5x50x2 cm',
            Peso: '5kg aproximadamente por unidad', 
            Cantidad: '14 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Quarzita",
            id: "Revestimientos"
        },
        precio: 1000
    }
    ,
    {
        id: "item 12",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 12.jpg",
        info:{
            tipo:'Revestimiento de pared',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: 'No definido',
            Peso: '1.9kg aproximadamente por unidad', 
            Cantidad: '17 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-091',
        },
        categoria: {
            nombre: "Patagonia",
            id: "Revestimientos"
        },
        precio: 1000
    }
    ,
    {
        id: "item 13",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 13.jpg",
        info:{
            tipo:'Revestimiento de pared',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: 'No Definindo',
            Peso: 'No definido', 
            Cantidad: 'No definido',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Multikubik",
            id: "Revestimientos"
        },
        precio: 1000
    }
    ,
    {
        id: "item 14",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 14.jpg",
        info:{
            tipo:'Revestimiento de pared',
            Material: 'Hormigón pigmentado ',
            Precio:' por m2',
            Medida: 'No definido',
            Peso: 'No definido', 
            Cantidad: 'No definido',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "GeoKubik",
            id: "Revestimientos"
        },
        precio: 1000
    }
    ,
    {
        id: "item 15",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 15.jpg",
        info:{
            tipo:'Revestimiento de pared',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: 'No definido',
            Peso: 'No definido', 
            Cantidad: 'No definido',
            Pallet: 'por pallet',
            Código: 'ER0000-126',
        },
        categoria: {
            nombre: "Piedra Irregular",
            id: "Revestimientos"
        },
        precio: 1000
    }
    ,
    {
        id: "item 16",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 16.jpg",
        recomend:'Recomendado',
        info:{
            tipo:'Revestimiento de piso',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '40x40x3 cm || Espesor 20mm +/- 1,5mm',
            Peso: '7kg aproximadamente por unidad', 
            Cantidad: '6.25 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Quebracho cruzado",
            id: "Revestimientos"
        },
        precio: 1000
    }
    ,
    {
        id: "item 17",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 17.jpg",
        info:{
            tipo:'Revestimiento de piso',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '50x13,5x2,5 cm || Espesor 25mm +/- 1,5mm',
            Peso: '4.5kg aproximadamente por unidad', 
            Cantidad: '15 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Símil quebracho y corteza",
            id: "Revestimientos",
        },
        precio: 1000
    },
    {
        id: "item 18",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 18.jpg",
        info:{
            tipo:'Revestimiento de piso',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '60x20x3 cm || Espesor 30mm +/- 1,5mm',
            Peso: '7.2kg aproximadamente por unidad', 
            Cantidad: '8.33 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Quebracho 60",
            id: "Revestimientos",
        },
        precio: 1000
    },
    {
        id: "item 19",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 19.jpg",
        info:{
            tipo:'Revestimiento de piso',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '60x20x3 cm || Espesor 30mm +/- 1,5mm',
            Peso: '9.7kg aproximadamente por unidad', 
            Cantidad: '6.22 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Adoquín madera con Quebracho 60",
            id: "Revestimientos",
        },
        precio: 1000
    },
    {
        id: "item 20",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 20.jpg",
        info:{
            tipo:'Revestimiento de piso',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '50x50x3 cm || Espesor 30mm +/- 1,5mm',
            Peso: '15kg aproximadamente por unidad', 
            Cantidad: '4 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Deck Símil Madera (DSM)",
            id: "Revestimientos",
        },
        precio: 1000
    },
    {
        id: "item 21",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 21.jpg",
        info:{
            tipo:'Revestimiento de piso',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '1x0.12x0.04 mts || Espesor 40mm +/- 1,5mm',
            Peso: '8.15kg aproximadamente por unidad', 
            Cantidad: '7.41 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Pinotea",
            id: "Revestimientos",
        },
        precio: 1000
    },
    {
        id: "item 22",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 22.jpg",
        info:{
            tipo:'Revestimiento de piso',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '1x0.12x0.04 mts  || Espesor 40mm +/- 1,5mm',
            Peso: '8.15 kg aproximadamente por unidad', 
            Cantidad: '7.41 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Lapacho",
            id: "Revestimientos",
        },
        precio: 1000
    },
    {
        id: "item 23",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 23.jpg",
        info:{
            tipo:'Revestimiento de piso',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '50x50x3 cm || Espesor 30mm +/- 1,5mm',
            Peso: '15kg aproximadamente por unidad', 
            Cantidad: '4 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Deck antideslizante",
            id: "Revestimientos",
        },
        precio: 1000
    },
    {
        id: "item 24",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 24.jpg",
        info:{
            tipo:'Revestimiento de piso',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '50x50x3 cm || Espesor 30mm +/- 1,5mm',
            Peso: '15kg aproximadamente por unidad', 
            Cantidad: '4 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Laja",
            id: "Revestimientos",
        },
        precio: 1000
    },
    {
        id: "item 25",
        titulo: "Revestimiento",
        imagen: "./assets_catalogo/IMG/item 25.jpg",
        info:{
            tipo:'Revestimiento de piso',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '50x50x3 cm || Espesor 30mm +/- 1,5mm',
            Peso: '15kg aproximadamente por unidad', 
            Cantidad: '4 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Adoquín Colonial",
            id: "Revestimientos",
        },
        precio: 1000
    },
    {
        id: "item 26",
        titulo: "Jardin",
        imagen: "./assets_catalogo/IMG/item 26.jpg",
        info:{
            tipo:'Durmiente 50x25',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '50x25x6 cm || Espesor 60mm +/- 1,5mm',
            Peso: '16kg aproximadamente por unidad', 
            Cantidad: '8 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Durmientes simil madera",
            id: "Jardin",
        },
        precio: 1000
    },
    {
        id: "item 27",
        titulo: "Jardin",
        imagen: "./assets_catalogo/IMG/item 27.jpg",
        info:{
            tipo:'Durmiente 50x30',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '50x30x7 cm || Espesor 70mm +/- 1,5mm',
            Peso: '17kg aproximadamente por unidad', 
            Cantidad: '6.7 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Durmientes simil madera",
            id: "Jardin",
        },
        precio: 1000
    },
    {
        id: "item 28",
        titulo: "Jardin",
        imagen: "./assets_catalogo/IMG/item 28.jpg",
        info:{
            tipo:'Durmiente 1 metro',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '100x30x7 cm || Espesor 70mm +/- 1,5mm',
            Peso: '35kg aproximadamente por unidad', 
            Cantidad: '3.4 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Durmientes simil madera",
            id: "Jardin",
        },
        precio: 1000
    },

    {
        id: "item 29",
        titulo: "Jardin",
        imagen: "./assets_catalogo/IMG/item 29.jpg",
        info:{
            tipo:'Piedra',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '10x10x5 cm || Espesor 50mm +/- 1,5mm',
            Peso: '1.3kg aproximadamente por unidad', 
            Cantidad: '100 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Adoquin 10",
            id: "Jardin",
        },
        precio: 1000
    },
    {
        id: "item 30",
        titulo: "Jardin",
        imagen: "./assets_catalogo/IMG/item 30.jpg",
        info:{
            tipo:'Bloque césped Rombo',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '35x35x6 cm || Espesor 60mm +/- 1,5mm',
            Peso: '13kg aproximadamente por unidad', 
            Cantidad: '8.2 unidades por m2',
            Pallet: 'por pallet 70',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Bloque césped Rombo",
            id: "Jardin",
        },
        precio: 1000
    },
    {
        id: "item 31",
        titulo: "Jardin",
        imagen: "./assets_catalogo/IMG/item 31.jpg",
        info:{
            tipo:'Bloque césped Redondo',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '35x35x6 cm || Espesor 60mm +/- 1,5mm',
            Peso: '13kg aproximadamente por unidad', 
            Cantidad: '8.2 unidades por m2',
            Pallet: 'por pallet 70',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Bloque césped Redondo",
            id: "Jardin",
        },
        precio: 1000
    },
    {
        id: "item 32",
        titulo: "Jardin",
        imagen: "./assets_catalogo/IMG/item 32.jpg",
        info:{
            tipo:'Bloque césped Recto',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '35x35x6 cm || Espesor 60mm +/- 1,5mm',
            Peso: '13kg aproximadamente por unidad', 
            Cantidad: '8.2 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Bloque césped Recto",
            id: "Jardin",
        },
        precio: 1000
    },
    {
        id: "item 33",
        titulo: "Jardin",
        imagen: "./assets_catalogo/IMG/item 33.jpg",
        info:{
            tipo:'Durmiente 1 metro',
            Material: 'Hormigón pigmentado',
            Precio:' por m2',
            Medida: '20x10x8 cm || 80mm +/- 1,5mm',
            Peso: '1.3kg aproximadamente por unidad', 
            Cantidad: '50 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Adoquín intertrabado",
            id: "Jardin",
        },
        precio: 1000
    },
    {
        id: "item 34",
        titulo: "Atermico",
        imagen: "./assets_catalogo/IMG/item 34.jpg",
        info:{
            tipo:'Durmientes simil madera',
            Material: 'Bicapa atérmico',
            Precio:' por m2',
            Medida: '50x25x6 cm || 60mm +/- 1,5mm',
            Peso: '16kg aproximadamente por unidad', 
            Cantidad: '8 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Durmiente 50x25",
            id: "Atermicos",
        },
        precio: 1000
    },
    
    {
        id: "item 35",
        titulo: "Atermico",
        imagen: "./assets_catalogo/IMG/item 35.jpg",
        info:{
            tipo:'Durmientes simil madera',
            Material: 'Bicapa atérmico',
            Precio:' por m2',
            Medida: '50x30x7 cm || 70mm +/- 1,5mm',
            Peso: '17kg aproximadamente por unidad', 
            Cantidad: '6.7 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Durmiente 50x30",
            id: "Atermicos",
        },
        precio: 1000
    },
    {
        id: "item 36",
        titulo: "Atermico",
        imagen: "./assets_catalogo/IMG/item 36.jpg",
        info:{
            tipo:'Durmientes simil madera',
            Material: 'Bicapa atérmico',
            Precio:' por m2',
            Medida: '100x30x7 cm || 70mm +/- 1,5mm',
            Peso: '35kg aproximadamente por unidad', 
            Cantidad: '3.4 unidades por m2',
            Pallet: 'por pallet',
            Código: 'ER0000-0',
        },
        categoria: {
            nombre: "Durmiente 1 metro",
            id: "Atermicos",
        },
        precio: 1000
    },

            
];

const contenedorProductos = document.querySelector('#contenedor-productos');
const botonesCategorias = document.querySelectorAll('.boton-categoria');
const tituloPrincipal = document.querySelector('#titulo-principal');
let botonesAgregar = document.querySelectorAll('.producto-agregar')
const numerito = document.querySelector('#numerito');
const numeritoMobile = document.querySelector('#numerito-mobile');


/*Funcion para cargar los productos en la seccion todos los productos*/

function cargarProductos(productosElegidos){


    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto =>{
        
        const div = document.createElement('div');
        div.classList.add('producto');
  
        div.classList.add('flipInX')
        div.innerHTML = `

            <figure class="imghvr-reveal-down">
            
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <figcaption>
                <h3 class="producto-titulo ">${producto.titulo}</h3>
                <hr>
                <br>
                <p class="producto-precio">*Tipo: ${producto.info.tipo}</p>
                <hr>
                <br>
                <p class="producto-precio">*Material: ${producto.info.Material}</p>
                <hr>
                <br>
                <p class="producto-precio">*Medida: ${producto.info.Medida} por unidad</p>
                <hr>
                <br>
                <p class="producto-precio">*Peso: ${producto.info.Peso}</p>
                <hr>
                <button id="${producto.id}" class="producto-agregar-info">Mas informacion</button>
            </figcaption>
        </figure>
            <div class="producto-detalles">
            
                <h3 class="producto-titulo ">${producto.categoria.nombre}</h3>
                <p class="producto-precio">${producto.precio}$</p>
         
                <button id="${producto.id}" class="producto-agregar">Agregar al carrito</button>
            </div>
        `
        contenedorProductos.append(div);




        /*Funcion para dar mas informacion de cada producto */

        const btnMasInfo = document.querySelectorAll('.producto-agregar-info');
        const arrayBtnInfo = Array.apply(null,btnMasInfo);





            arrayBtnInfo.forEach(btn => btn.addEventListener('click',function(e){
                let btnClickeado = productos.find(element => element.id == e.currentTarget.id)
                let productoExtraido = productos.find(producto => producto == btnClickeado);
                let numeroCarrito = localStorage.getItem("productos-en-carrito");
                numeroCarrito = JSON.parse(numeroCarrito);
                const actualizarNumeritoAmpliado = ()=>{
                    let NuevoNumero = 0;
                    for(i=0;i<numeroCarrito.length;i++){
                        NuevoNumero = NuevoNumero + numeroCarrito[i].cantidad
                    }

                    return NuevoNumero
                    
                }
                
                
           
               

                    tituloPrincipal.innerText = '';
                        contenedorProductos.innerHTML = `
                                            <div class="contenedor-producto-ampliado flipInX">
                                            <div class="producto-ampliado">
            
                                                <img class="imagen-product-ampli" src="${productoExtraido.imagen}" alt="">

                                                </div>
                                            </div>
                                        
                                            <div class="info-producto-ampliado slideInRight">
                                            <h1>${productoExtraido.categoria.nombre}</h1>
                                            <h2>${productoExtraido.info.tipo}</h2>
                                            <p>*Material: ${productoExtraido.info.Material}</p>
                                            <hr>
                                            <p>*Peso: ${productoExtraido.info.Peso}</p>
                                            <hr>
                                            <p>*Medida: ${productoExtraido.info.Medida}</p>
                                            <hr>
                                            <p>*Cantidad: ${productoExtraido.info.Cantidad}</p>
                                            <hr>
                                            <h4>$${productoExtraido.precio}</h4>
                                            <hr>
                                            <h6>En 3,6 y 12 Cuotas </h6>
                                            
                                            <div class="cart-info-ampliado">
                                            <h5 ><ion-icon name="cart-outline"></ion-icon></h5>
                                            <span id="numerito-mobile" class="numerito class="boton-categoria"">${actualizarNumeritoAmpliado()}</span>
                                            </div>
                                            <div class="btn-add">
                                                <button id="${productoExtraido.id}" class="btn-menos"><ion-icon name="remove-outline"></ion-icon></button>
                                                <button id="${productoExtraido.id}" class="btn-mas"><ion-icon name="add-outline"></ion-icon></button>
                                            </div>
                                            </div>
                                            </div>
                                            
                                            </div> 
                                            `

                                    
                                    
            
                                    let btnReturn = document.querySelector('.btn-return') 
                                    btnReturn.addEventListener('click',function(){
                                    location.reload()
                                    setTimeout(function(){
                                        cargarProductos(productos);
                                    },1000);
                                    
                                    })
                
            
                    
                                    
            })
            
            
            );
            
            
            })
            actualizasBotonesAgregar()
            
        
        };


  


cargarProductos(productos);

/*Funcion para cambiar las categorias*/

botonesCategorias.forEach(boton =>{

    boton.addEventListener('click', (e) =>{

        botonesCategorias.forEach(boton => boton.classList.remove('active'))

        e.currentTarget.classList.add("active")

       if (e.currentTarget.id != "todos"){

            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.titulo;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
            
            

            

         }else{
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
           
            
       }
    
    })
});


/*Funcion para obtener los botones agregar una vez halla sido cargada la pagina*/
function actualizasBotonesAgregar (){
    botonesAgregar = document.querySelectorAll('.producto-agregar');
    botonesAgregar.forEach(boton =>{
        boton.addEventListener('click', agregarAlCarrito);
    });

};




let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem('productos-en-carrito');




if(productosEnCarritoLS){

    productosEnCarrito = JSON.parse(productosEnCarritoLS)
    actualizarNumerito()

}else{
    productosEnCarrito = [];
}





/*Funcion para agregar elementos al carrito*/


function agregarAlCarrito (e){

    Toastify({
        text: "Agregado al carrito",
        duration: 2000,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4a4217, #2b1c09)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
          },
        onClick: function(){} // Callback after click
      }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)){
       const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
       productosEnCarrito[index].cantidad++;
    }else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito()
    
    /*Agregamos los elementos seleccionados al localstorage*/ 
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
};

function actualizarNumerito (){
    let nuevoNumerito = productosEnCarrito.reduce((acc,producto) => acc + producto.cantidad, 0)
    numerito.innerText = nuevoNumerito;
    numeritoMobile.innerText = nuevoNumerito;
};



//Funcion para mostrar la informacion de cada producto
const imageProduct = [...document.querySelectorAll('.producto-imagen')];
const activeInfo = [...document.querySelectorAll('.info-producto')];

imageProduct.forEach((image)=>{
    image.addEventListener('click',()=>{      
        activeInfo.forEach((product)=>{
            if (product.classList.contains('active-info')){

                product.classList.remove('active-info');

           }else{
                product.classList.add('active-info')
           }
        })
    }) 
})

const loader = document.querySelector('.loader-content')

setTimeout(function(){
    loader.classList.add('hidden');
},1000);

/*Funcion para mostrar recomendados */

const btnRecomend = document.querySelector('.btn-recomend');
const btnOffert = document.querySelector('.btn-offert');
const btnTodos = document.querySelector('.btn-gral');
const btnRevestimientos = document.querySelector('.btn-revestimientos');
const btnAtermicos = document.querySelector('.btn-atermicos');

btnTodos.addEventListener('click',function(){
    cargarProductos(productos)
    tituloPrincipal.innerText = 'Todos los productos'
    
})

btnOffert.addEventListener('click',function(){
    const productosOffert = productos.filter(producto => producto.offert == 'Oferta');
   
    cargarProductos(productosOffert)
    tituloPrincipal.innerText = 'Ofertas exclusivas'
    
    
})


btnRecomend.addEventListener('click',function(){
    const productosRecomendados = productos.filter(producto => producto.recomend == 'Recomendado');

    cargarProductos(productosRecomendados)

    tituloPrincipal.innerText = 'Productos Recomendados'
    
})

btnRevestimientos.addEventListener('click',function(){
    const productosRevestimientos = productos.filter(producto => producto.titulo == 'Revestimiento');

    cargarProductos(productosRevestimientos);

    tituloPrincipal.innerText = 'Revestimientos de piso y pared'
    
})

btnAtermicos.addEventListener('click',function(){
    const productosAtermicos = productos.filter(producto => producto.titulo == 'Atermico');

    cargarProductos(productosAtermicos)

    tituloPrincipal.innerText = 'Atermicos'
    
})







