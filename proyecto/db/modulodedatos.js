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
                idcomentario:1,
                nombreDeUsuario:"LunaPixel_93",
                textoDelComentario:"La calidad es excelente por el precio. Se siente resistente y el diseño es muy moderno.",
                imagenDePerfil:"images/users/user1.webp"
            },
            {
                idcomentario: 2,
                nombreDeUsuario: "LiliZen_82",
                textoDelComentario: "Me encantó, superó mis expectativas. Gracias por la rapidez.",
                imagenDePerfil: "images/users/user2.jpg"
            },
            {
                idcomentario: 3,
                nombreDeUsuario: "MartinGTR",
                textoDelComentario: "Funciona bien, pero esperaba un poco más de batería.",
                imagenDePerfil: "images/users/user3.jpg"
            },
            {
                idcomentario: 4,
                nombreDeUsuario: "Florencia_BsAs",
                textoDelComentario: "Llegó todo en orden. Muy útil para el trabajo diario.",
                imagenDePerfil: "images/users/user4.jpg"
            },
            {
                idcomentario: 5,
                nombreDeUsuario: "Jony_Reviews",
                textoDelComentario: "Probado por varios días. Anda bien, aunque podría ser más intuitivo.",
                imagenDePerfil: "images/users/user5.jpeg"
            }
            
        ]          
            
        },
        {
            id:2,
            imagen:"images/products/bulgarisolotempo.webp",
            nombreDelProducto:"Bulgari Solotempo",
            descripcion: "Un reloj moderno y llamativo, con un diseño minimalista pero impactante. Su caja de acero y correa de cuero negro combinan a la perfección con la esfera con números grandes y estilizados. Ideal para quienes buscan lujo con un toque contemporáneo.",  
            comentarios: [{
                idcomentario:1,
                nombreDeUsuario:"NeoZafiroX",
                textoDelComentario:"Es un reloj muy cómodo, ni lo sientes en la muñeca. Ideal para usar todo el día.",
                imagenDePerfil:"images/users/user1.webp"
            },
            {
                idcomentario: 2,
                nombreDeUsuario: "LuchoTech23",
                textoDelComentario: "Llegó antes de lo esperado y funciona perfecto. Muy buena compra.",
                imagenDePerfil: "images/users/user2.jpg"
            },
            {
                idcomentario: 3,
                nombreDeUsuario: "Sofi_Smilez",
                textoDelComentario: "Me encanta el diseño, es más lindo que en las fotos. ¡Recomiendo!",
                imagenDePerfil: "images/users/user3.jpg"
            },
            {
                idcomentario: 4,
                nombreDeUsuario: "CarlosPower88",
                textoDelComentario: "Todo bien con el producto, aunque la batería podría durar un poco más.",
                imagenDePerfil: "images/users/user4.jpg"
            },
            {
                idcomentario: 5,
                nombreDeUsuario: "ValeOnline_90",
                textoDelComentario: "Buena calidad por el precio. Ideal para uso diario, sin muchas exigencias.",
                imagenDePerfil: "images/users/user5.jpeg"
            }]  
        },
        {
            id:3,
            imagen:"images/products/corumromvlvs.webp",
            nombreDelProducto:"Corum Romvlvs",
            descripcion: "Un reloj de lujo con una estética clásica y sofisticada. Su esfera limpia con números romanos grabados en el bisel y su combinación de acero y oro lo convierten en un accesorio elegante y exclusivo.",  
            comentarios: [{
                idcomentario: 1,
                nombreDeUsuario:"CaféEn8Bits",
                textoDelComentario:"Llegó antes de lo esperado y venía muy bien empaquetado. Sin duda volvería a comprar.",
                imagenDePerfil:"images/users/user1.webp"
            },
            {
                idcomentario: 2,
                nombreDeUsuario: "Santi_Explore",
                textoDelComentario: "Buen producto, aunque me gustaría que tuviera más opciones de color.",
                imagenDePerfil: "images/users/user2.jpg"
            },
            {
                idcomentario: 3,
                nombreDeUsuario: "Naty_Fit",
                textoDelComentario: "Perfecto para hacer ejercicio, cómodo y liviano. Lo uso todos los días.",
                imagenDePerfil: "images/users/user3.jpg"
            },
            {
                idcomentario: 4,
                nombreDeUsuario: "LucasTheTech",
                textoDelComentario: "Funciona bien, pero el manual no es claro en algunos puntos.",
                imagenDePerfil: "images/users/user4.jpg"
            },
            {
                idcomentario: 5,
                nombreDeUsuario: "AnaK_Style",
                textoDelComentario: "Me llegó un poco tarde, pero el producto es de buena calidad.",
                imagenDePerfil: "images/users/user5.jpeg"
            }]  
        },
        {
            id:4,
            imagen:"images/products/emporloarmani.webp",
            nombreDelProducto:"Emporio Armani",
            descripcion: "Un reloj de estilo clásico con un aire deportivo gracias a su cronógrafo. Su caja de acero, esfera beige con detalles en negro y su correa de cuero le dan un aspecto sofisticado y masculino. Ideal para quienes buscan elegancia con funcionalidad.",  
            comentarios: [{
                idcomentario: 1,
                nombreDeUsuario:"SombrasDelSur",
                textoDelComentario:"Lo compré como regalo y fue un éxito total. Se ve mucho más caro de lo que cuesta.",
                imagenDePerfil:"images/users/user1.webp"
            },
            {
                idcomentario: 2,
                nombreDeUsuario: "BrunoPixelArt",
                textoDelComentario: "El empaque llegó en perfecto estado y el producto es tal cual la descripción.",
                imagenDePerfil: "images/users/user2.jpg"
            },
            {
                idcomentario: 3,
                nombreDeUsuario: "Tamy_love2023",
                textoDelComentario: "Muy lindo, aunque el color no era exactamente el que esperaba.",
                imagenDePerfil: "images/users/user3.jpg"
            },
            {
                idcomentario: 4,
                nombreDeUsuario: "FerRock_89",
                textoDelComentario: "Ideal para regalar. Mi pareja quedó feliz, ¡gracias!",
                imagenDePerfil: "images/users/user4.jpg"
            },
            {
                idcomentario: 5,
                nombreDeUsuario: "Naty_Gadgetz",
                textoDelComentario: "Cumple con lo prometido. Lo volvería a comprar sin dudas.",
                imagenDePerfil: "images/users/user5.jpeg"
            }]  
        },
        {
            id:5,
            imagen:"images/products/longinesbellearti.webp",
            nombreDelProducto:"Longines -Belle Arti",
            descripcion: "Inspirado en el Art Deco, este reloj de Longines combina un diseño rectangular con una esfera negra sofisticada. Su brazalete de acero y sus detalles clásicos lo convierten en una excelente opción para quienes buscan distinción.",  
            comentarios: [{
                idcomentario: 1,
                nombreDeUsuario:"HeladoCósmico",
                textoDelComentario:"Me sorprendió lo elegante que se ve este reloj. Es perfecto para usar tanto en ocasiones formales como casuales.",
                imagenDePerfil:"images/users/user1.webp"
            },
            {
                idcomentario: 2,
                nombreDeUsuario: "LeoMax360",
                textoDelComentario: "Lo estoy usando hace una semana y anda bárbaro. Súper recomendable.",
                imagenDePerfil: "images/users/user2.jpg"
            },
            {
                idcomentario: 3,
                nombreDeUsuario: "Cami_Dreamz",
                textoDelComentario: "Muy lindo estéticamente, aunque tardó un poco en llegar.",
                imagenDePerfil: "images/users/user3.jpg"
            },
            {
                idcomentario: 4,
                nombreDeUsuario: "NicoZonaSur",
                textoDelComentario: "Por el precio que tiene, está más que bien. Lo volvería a comprar.",
                imagenDePerfil: "images/users/user4.jpg"
            },
            {
                idcomentario: 5,
                nombreDeUsuario: "Andre_vibes",
                textoDelComentario: "Cumple con lo que promete. Nada para criticar, todo ok.",
                imagenDePerfil: "images/users/user5.jpeg"
            }]  
        },
        {
            id:6,
            imagen:"images/products/longinesdolcevita.webp",
            nombreDelProducto:"Longines DolceVita",
            descripcion: "Un modelo elegante con un diseño rectangular que lo hace destacar. Su caja de acero y su brazalete metálico brindan un look refinado, mientras que su esfera blanca con detalles sencillos refleja sofisticación y lujo. Perfecto para quienes buscan un reloj distinguido y versátil.",  
            comentarios: [{
                idcomentario: 1,
                nombreDeUsuario:"VortexNaranja",
                textoDelComentario:"Me encanta cómo combina con todo. Lo uso a diario y sigue como nuevo.",
                imagenDePerfil:"images/users/user1.webp"
            },
            {
                idcomentario: 2,
                nombreDeUsuario: "MatiExpress01",
                textoDelComentario: "Lo uso todos los días para trabajar, súper práctico y resistente.",
                imagenDePerfil: "images/users/user2.jpg"
            },
            {
                idcomentario: 3,
                nombreDeUsuario: "LuRojas_OK",
                textoDelComentario: "Me gustó mucho, aunque el manual podría estar en español.",
                imagenDePerfil: "images/users/user3.jpg"
            },
            {
                idcomentario: 4,
                nombreDeUsuario: "Esteban_Gamer",
                textoDelComentario: "Pensé que era más grande, pero igual funciona excelente.",
                imagenDePerfil: "images/users/user4.jpg"
            },
            {
                idcomentario: 5,
                nombreDeUsuario: "JessyStar_88",
                textoDelComentario: "Muy buena compra. El vendedor respondió todas mis dudas.",
                imagenDePerfil: "images/users/user5.jpeg"
            }]  
        },
        {
            id:7,
            imagen:"images/products/radodiastarcremico.webp",
            nombreDelProducto:"Rado Diastar Cremico",
            descripcion: "Un reloj sofisticado con un diseño minimalista y elegante. Su caja y brazalete en cerámica blanca con detalles dorados le otorgan un look refinado y exclusivo. Ideal para quienes buscan un estilo moderno y lujoso.",  
            comentarios: [{
                idcomentario: 1,
                nombreDeUsuario:"RayoInvisible7",
                textoDelComentario:"El diseño es simple pero elegante, justo lo que estaba buscando. Funciona perfecto.",
                imagenDePerfil:"images/users/user1.webp"
            },
            {
                idcomentario: 2,
                nombreDeUsuario: "Lau_musiquera",
                textoDelComentario: "Me encanta, lo uso todos los días. Súper práctico y liviano.",
                imagenDePerfil: "images/users/user2.jpg"
            },
            {
                idcomentario: 3,
                nombreDeUsuario: "Rodri_Gamer88",
                textoDelComentario: "Para el gaming va joya. Buena relación calidad-precio.",
                imagenDePerfil: "images/users/user3.jpg"
            },
            {
                idcomentario: 4,
                nombreDeUsuario: "ValeLook",
                textoDelComentario: "Muy fashion y cómodo. Me preguntan siempre dónde lo compré.",
                imagenDePerfil: "images/users/user4.jpg"
            },
            {
                idcomentario: 5,
                nombreDeUsuario: "FrancoSincero",
                textoDelComentario: "Todo bien, pero el manual vino en chino. Igual es fácil de usar.",
                imagenDePerfil: "images/users/user5.jpeg"
            }]  
        },
        {
            id:8,
            imagen:"images/products/raymondweildama.webp",
            nombreDelProducto:"Raymond Weil Dama",
            descripcion: "Un reloj femenino con un diseño clásico y elegante. Su esfera blanca con números romanos y su correa de cuero negro le dan un toque sofisticado y atemporal. Perfecto para quienes buscan un accesorio refinado para cualquier ocasión.",  
            comentarios: [{
                idcomentario: 1,
                nombreDeUsuario:"KoalaCibernético",
                textoDelComentario:"Muy buena relación calidad-precio. Se nota que está bien hecho y no es un reloj cualquiera.",
                imagenDePerfil:"images/users/user1.webp"
            },
            {
                idcomentario: 2,
                nombreDeUsuario: "DaniCool_93",
                textoDelComentario: "Excelente producto, lo recomiendo sin dudar. Llegó rapidísimo.",
                imagenDePerfil: "images/users/user2.jpg"
            },
            {
                idcomentario: 3,
                nombreDeUsuario: "RomiStylez",
                textoDelComentario: "Todo perfecto, salvo que la caja vino un poco golpeada.",
                imagenDePerfil: "images/users/user3.jpg"
            },
            {
                idcomentario: 4,
                nombreDeUsuario: "ElTano_Original",
                textoDelComentario: "Cumple con lo básico. Por ese precio, no se puede pedir más.",
                imagenDePerfil: "images/users/user4.jpg"
            },
            {
                idcomentario: 5,
                nombreDeUsuario: "CelesteMoon",
                textoDelComentario: "Muy buena atención del vendedor. El producto también es top.",
                imagenDePerfil: "images/users/user5.jpeg"
            }]  
        },
        {
            id:9,
            imagen:"images/products/tagheuer.webp",
            nombreDelProducto:"Tag Heuer- Formula 1",
            descripcion: "Diseñado para los amantes de la velocidad y la adrenalina, este reloj deportivo cuenta con una caja robusta y un bisel giratorio con marcadores de tiempo. Su combinación de colores le da un aspecto dinámico y audaz.",  
            comentarios: [{
                idcomentario: 1,
                nombreDeUsuario:"EcoDeNebula",
                textoDelComentario:"El color es precioso, aún más bonito que en las fotos. Me lo han elogiado varias veces.",
                imagenDePerfil:"images/users/user1.webp"
            },
            {
                idcomentario: 2,
                nombreDeUsuario: "Marce_bike",
                textoDelComentario: "Ideal para salir a pedalear. Muy liviano y resistente.",
                imagenDePerfil: "images/users/user2.jpg"
            },
            {
                idcomentario: 3,
                nombreDeUsuario: "JulianTech_07",
                textoDelComentario: "Buena calidad. Lo estoy usando hace un mes y sigue como nuevo.",
                imagenDePerfil: "images/users/user3.jpg"
            },
            {
                idcomentario: 4,
                nombreDeUsuario: "Noe_decohome",
                textoDelComentario: "Combina perfecto con mi escritorio. Me encantó.",
                imagenDePerfil: "images/users/user4.jpg"
            },
            {
                idcomentario: 5,
                nombreDeUsuario: "Santi_urbano",
                textoDelComentario: "Cumple con lo prometido, aunque el envío tardó más de lo indicado.",
                imagenDePerfil: "images/users/user5.jpeg"
            }]  
        },
        {
            id:10,
            imagen:"images/products/tagheuerprofessional.webp",
            nombreDelProducto:"Tag Heuer Professional 2000",
            descripcion: "Un modelo de inspiración náutica con un diseño resistente y funcional. Su caja de acero con detalles dorados y su bisel giratorio lo hacen ideal para quienes buscan un reloj versátil y duradero.",  
            comentarios: [{
                idcomentario: 1,
                nombreDeUsuario:"RunitaErrante",
                textoDelComentario:"Un reloj muy versátil y con estilo. Ideal para quienes quieren lucir bien sin gastar demasiado.",
                imagenDePerfil:"images/users/user1.webp"
            },
            {
                idcomentario: 2,
                nombreDeUsuario: "Gise_enlinea",
                textoDelComentario: "Lo compré para regalar y fue un éxito total. Muy recomendable.",
                imagenDePerfil: "images/users/user2.jpg"
            },
            {
                idcomentario: 3,
                nombreDeUsuario: "TomiBetaX",
                textoDelComentario: "No esperaba mucho, pero me sorprendió para bien. Buena compra.",
                imagenDePerfil: "images/users/user3.jpg"
            },
            {
                idcomentario: 4,
                nombreDeUsuario: "PauPau_dsgn",
                textoDelComentario: "Lindo y funcional. Lo uso para estudiar y me sirve un montón.",
                imagenDePerfil: "images/users/user4.jpg"
            },
            {
                idcomentario: 5,
                nombreDeUsuario: "RafaOpinador",
                textoDelComentario: "Todo ok con el producto, pero el correo me lo dejó en la casa del vecino.",
                imagenDePerfil: "images/users/user5.jpeg"
            }]  
        }]
}

module.exports = datos;