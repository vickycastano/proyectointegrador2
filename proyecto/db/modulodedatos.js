const datos = {

    usuario: {
        email: "vicky@gmail.com" ,
        usuario: "vicky1234",
        contraseña: "1234vicky",
        fechaDeNacimiento: "15/09/2005",
        nroDeDocumento : "12345678",
        fotoDePerfil: "images/users/uservi.jpg"
    },

    productos: [
        {
            id:1,
            imagen:"images/products/baumeymercier.webp",
            nombreDelProducto:"Baume & Mercier- CATWALK",
            descripcion: "Un reloj con un diseño limpio y minimalista. Su caja cuadrada y su brazalete de acero le otorgan un aspecto moderno y elegante, ideal para quienes buscan un estilo sobrio pero sofisticado.", 
            comentarios: [{
                nombreDeUsuario:"LunaPixel_93",
                textoDelComentario:"La calidad es excelente por el precio. Se siente resistente y el diseño es muy moderno.",
                imagenDePerfil:"images/users/user1.webp"
            }]          
            
        },
        {
            id:2,
            imagen:"images/products/bulgarisolotempo.webp",
            nombreDelProducto:"Bulgari Solotempo",
            descripcion: "Un reloj moderno y llamativo, con un diseño minimalista pero impactante. Su caja de acero y correa de cuero negro combinan a la perfección con la esfera con números grandes y estilizados. Ideal para quienes buscan lujo con un toque contemporáneo.",  
            comentarios: [{
                nombreDeUsuario:"NeoZafiroX",
                textoDelComentario:"Es un reloj muy cómodo, ni lo sientes en la muñeca. Ideal para usar todo el día.",
                imagenDePerfil:"images/users/user2.jpg"
            }]  
        },
        {
            id:3,
            imagen:"images/products/corumromvlvs.webp",
            nombreDelProducto:"Corum Romvlvs",
            descripcion: "Un reloj de lujo con una estética clásica y sofisticada. Su esfera limpia con números romanos grabados en el bisel y su combinación de acero y oro lo convierten en un accesorio elegante y exclusivo.",  
            comentarios: [{
                nombreDeUsuario:"CaféEn8Bits",
                textoDelComentario:"Llegó antes de lo esperado y venía muy bien empaquetado. Sin duda volvería a comprar.",
                imagenDePerfil:"images/users/user3.jpg"
            }]  
        },
        {
            id:4,
            imagen:"images/products/emporloarmani.webp",
            nombreDelProducto:"Emporio Armani",
            descripcion: "Un reloj de estilo clásico con un aire deportivo gracias a su cronógrafo. Su caja de acero, esfera beige con detalles en negro y su correa de cuero le dan un aspecto sofisticado y masculino. Ideal para quienes buscan elegancia con funcionalidad.",  
            comentarios: [{
                nombreDeUsuario:"SombrasDelSur",
                textoDelComentario:"Lo compré como regalo y fue un éxito total. Se ve mucho más caro de lo que cuesta.",
                imagenDePerfil:"images/users/user4.jpg"
            }]  
        },
        {
            id:5,
            imagen:"images/products/longinesbellearti.webp",
            nombreDelProducto:"Longines -Belle Arti",
            descripcion: "Inspirado en el Art Deco, este reloj de Longines combina un diseño rectangular con una esfera negra sofisticada. Su brazalete de acero y sus detalles clásicos lo convierten en una excelente opción para quienes buscan distinción.",  
            comentarios: [{
                nombreDeUsuario:"HeladoCósmico",
                textoDelComentario:"Me sorprendió lo elegante que se ve este reloj. Es perfecto para usar tanto en ocasiones formales como casuales.",
                imagenDePerfil:"images/users/user5.jpeg"
            }]  
        },
        {
            id:6,
            imagen:"images/products/longinesdolcevita.webp",
            nombreDelProducto:"Longines DolceVita",
            descripcion: "Un modelo elegante con un diseño rectangular que lo hace destacar. Su caja de acero y su brazalete metálico brindan un look refinado, mientras que su esfera blanca con detalles sencillos refleja sofisticación y lujo. Perfecto para quienes buscan un reloj distinguido y versátil.",  
            comentarios: [{
                nombreDeUsuario:"VortexNaranja",
                textoDelComentario:"Me encanta cómo combina con todo. Lo uso a diario y sigue como nuevo.",
                imagenDePerfil:"images/users/user6.jpeg"
            }]  
        },
        {
            id:7,
            imagen:"images/products/radodiastarcremico.webp",
            nombreDelProducto:"Rado Diastar Cremico",
            descripcion: "Un reloj sofisticado con un diseño minimalista y elegante. Su caja y brazalete en cerámica blanca con detalles dorados le otorgan un look refinado y exclusivo. Ideal para quienes buscan un estilo moderno y lujoso.",  
            comentarios: [{
                nombreDeUsuario:"RayoInvisible7",
                textoDelComentario:"El diseño es simple pero elegante, justo lo que estaba buscando. Funciona perfecto.",
                imagenDePerfil:"images/users/user7.jpg"
            }]  
        },
        {
            id:8,
            imagen:"images/products/raymondweildama.webp",
            nombreDelProducto:"Raymond Weil Dama",
            descripcion: "Un reloj femenino con un diseño clásico y elegante. Su esfera blanca con números romanos y su correa de cuero negro le dan un toque sofisticado y atemporal. Perfecto para quienes buscan un accesorio refinado para cualquier ocasión.",  
            comentarios: [{
                nombreDeUsuario:"KoalaCibernético",
                textoDelComentario:"Muy buena relación calidad-precio. Se nota que está bien hecho y no es un reloj cualquiera.",
                imagenDePerfil:"images/users/user8.jpg"
            }]  
        },
        {
            id:9,
            imagen:"images/products/tagheuer.webp",
            nombreDelProducto:"Tag Heuer- Formula 1",
            descripcion: "Diseñado para los amantes de la velocidad y la adrenalina, este reloj deportivo cuenta con una caja robusta y un bisel giratorio con marcadores de tiempo. Su combinación de colores le da un aspecto dinámico y audaz.",  
            comentarios: [{
                nombreDeUsuario:"EcoDeNebula",
                textoDelComentario:"El color es precioso, aún más bonito que en las fotos. Me lo han elogiado varias veces.",
                imagenDePerfil:"images/users/user9.jpeg"
            }]  
        },
        {
            id:10,
            imagen:"images/products/tagheuerprofessional.webp",
            nombreDelProducto:"Tag Heuer Professional 2000",
            descripcion: "Un modelo de inspiración náutica con un diseño resistente y funcional. Su caja de acero con detalles dorados y su bisel giratorio lo hacen ideal para quienes buscan un reloj versátil y duradero.",  
            comentarios: [{
                nombreDeUsuario:"RunitaErrante",
                textoDelComentario:"Un reloj muy versátil y con estilo. Ideal para quienes quieren lucir bien sin gastar demasiado.",
                imagenDePerfil:"images/users/user10.webp"
            }]  
        }
    ]
   

}

module.exports = datos;