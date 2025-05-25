CREATE SCHEMA proyecto_db;
USE proyecto_db; 

CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
email VARCHAR (50) NOT NULL,
contraseña VARCHAR(100) NOT NULL,
fechaDeNacimiento DATE,
dni INT UNSIGNED,
fotoDePerfil VARCHAR(100),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE productos (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    usuarioId INT UNSIGNED NOT NULL,
    imagenDelProducto VARCHAR(255),
    nombreDelProducto VARCHAR(100),
    descripcion TEXT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (usuarioId) REFERENCES usuarios(id)
);
CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
idPost INT UNSIGNED,
idUsuario INT UNSIGNED,
comentario TEXT,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
FOREIGN KEY (idPost) REFERENCES productos(id),
FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

SELECT * FROM USUARIOS;
INSERT INTO usuarios (id, email, contraseña, fechaDeNacimiento, dni, fotoDePerfil)
VALUES 
(DEFAULT, "vicky@gmail.com", "1234vicky", "2005-09-15", 12345678, "images/users/uservi.jpg"),
(DEFAULT, "lunapixel_93@gmail.com", "fYFAEl4Etw", "1996-09-20", 44097247, "images/users/user1.webp"),
(DEFAULT, "neozafirox@gmail.com", "5ZaLjZ7aes", "2003-06-18",17402384, "images/users/user2.jpg"),
(DEFAULT, "caféen8bits@gmail.com", "JOEqZQQMMM", "1985-10-17", 90405264, "images/users/user3.jpg"), 
(DEFAULT, "sombrasdelsur@gmail.com", "9tAM5q8265", "1985-07-01", 12824561, "images/users/user4.jpg"),
(DEFAULT, "heladocósmico@gmail.com", "hJKg4LAmYe", "2000-06-24", 65791676, "images/users/user5.jpeg");

SELECT * FROM PRODUCTOS;
INSERT INTO productos (id, usuarioId, imagenDelProducto, nombreDelProducto, descripcion)
VALUES 
(DEFAULT,1, "images/products/baumeymercier.webp", "Baume & Mercier- CATWALK", "Un reloj con un diseño limpio y minimalista. Su caja cuadrada y su brazalete de acero le otorgan un aspecto moderno y elegante, ideal para quienes buscan un estilo sobrio pero sofisticado."),
(DEFAULT,1, "images/products/bulgarisolotempo.webp", "Bulgari Solotempo", "Un reloj moderno y llamativo, con un diseño minimalista pero impactante. Su caja de acero y correa de cuero negro combinan a la perfección con la esfera con números grandes y estilizados. Ideal para quienes buscan lujo con un toque contemporáneo."),
(DEFAULT,1, "images/products/corumromvlvs.webp", "Corum Romvlvs", "Un reloj de lujo con una estética clásica y sofisticada. Su esfera limpia con números romanos grabados en el bisel y su combinación de acero y oro lo convierten en un accesorio elegante y exclusivo."), 
(DEFAULT,1, "images/products/emporloarmani.webp", "Emporio Armani", "Un reloj de estilo clásico con un aire deportivo gracias a su cronógrafo. Su caja de acero, esfera beige con detalles en negro y su correa de cuero le dan un aspecto sofisticado y masculino. Ideal para quienes buscan elegancia con funcionalidad."),
(DEFAULT,1, "images/products/longinesbellearti.webp", "Longines -Belle Arti", "Inspirado en el Art Deco, este reloj de Longines combina un diseño rectangular con una esfera negra sofisticada. Su brazalete de acero y sus detalles clásicos lo convierten en una excelente opción para quienes buscan distinción."),
(DEFAULT,1,"images/products/longinesdolcevita.webp", "Longines DolceVita", "Un modelo elegante con un diseño rectangular que lo hace destacar. Su caja de acero y su brazalete metálico brindan un look refinado, mientras que su esfera blanca con detalles sencillos refleja sofisticación y lujo. Perfecto para quienes buscan un reloj distinguido y versátil."),
(DEFAULT,1,"images/products/radodiastarcremico.webp", "Rado Diastar Cremico", "Un reloj sofisticado con un diseño minimalista y elegante. Su caja y brazalete en cerámica blanca con detalles dorados le otorgan un look refinado y exclusivo. Ideal para quienes buscan un estilo moderno y lujoso."),
(DEFAULT,1,"images/products/raymondweildama.webp", "Raymond Weil Dama", "Un reloj femenino con un diseño clásico y elegante. Su esfera blanca con números romanos y su correa de cuero negro le dan un toque sofisticado y atemporal. Perfecto para quienes buscan un accesorio refinado para cualquier ocasión."),
(DEFAULT,1,"images/products/tagheuer.webp", "Tag Heuer- Formula 1", "Diseñado para los amantes de la velocidad y la adrenalina, este reloj deportivo cuenta con una caja robusta y un bisel giratorio con marcadores de tiempo. Su combinación de colores le da un aspecto dinámico y audaz."),
(DEFAULT,1,"images/products/tagheuerprofessional.webp", "Tag Heuer Professional 2000", "Un modelo de inspiración náutica con un diseño resistente y funcional. Su caja de acero con detalles dorados y su bisel giratorio lo hacen ideal para quienes buscan un reloj versátil y duradero.");

SELECT * FROM COMENTARIOS;
INSERT INTO comentarios (id, idPost, idUsuario, comentario)
VALUES

(DEFAULT, 1, 1,"Muy buen producto, llegó en tiempo y forma."),
(DEFAULT, 1, 2,"La calidad es excelente, superó mis expectativas."),
(DEFAULT, 1, 3,"Todo perfecto. Repetiré la compra."),
(DEFAULT, 2, 4,"El embalaje podría mejorar, pero el producto llegó bien."),
(DEFAULT, 2, 5,"Buena atención al cliente, resolvieron mi duda enseguida."),
(DEFAULT, 2, 6,"Me gustó, aunque la talla es un poco más chica de lo esperado."),
(DEFAULT, 3, 1,"Producto tal cual la descripción. Muy recomendable."),
(DEFAULT, 3, 2,"Me encantó. Volveré a comprar."),
(DEFAULT, 3, 3,"Buen precio por la calidad que ofrece."),
(DEFAULT, 4, 4,"Tardó un poco más de lo previsto, pero valió la pena."),
(DEFAULT, 4, 5,"Me hubiera gustado más variedad de colores."),
(DEFAULT, 4, 6,"Funciona bien, aunque el manual no estaba en español."),
(DEFAULT, 5, 1,"Excelente atención, muy amables."),
(DEFAULT, 5, 2,"Muy buen servicio postventa."),
(DEFAULT, 5, 3,"Fácil de usar, ideal para principiantes."),
(DEFAULT, 6, 4,"El producto llegó con una falla, pero lo reemplazaron rápido."),
(DEFAULT, 6, 5,"No era lo que esperaba, aunque el proceso de devolución fue sencillo."),
(DEFAULT, 6, 6,"Cumple con su función, pero el material podría ser más resistente."),
(DEFAULT, 7, 1,"Recomendado 100%. Muy confiable."),
(DEFAULT, 7, 2,"Buena relación calidad-precio."),
(DEFAULT, 7, 3,"El diseño es muy lindo, justo lo que buscaba."),
(DEFAULT, 8, 4,"El envío fue muy rápido. Gracias."),
(DEFAULT, 8, 5,"Un poco caro para lo que es, pero funciona bien."),
(DEFAULT, 8, 6,"Muy práctico y fácil de armar."),
(DEFAULT, 9, 1,"Llego antes de lo esperado. Excelente."),
(DEFAULT, 9, 1,"Repetí la compra porque me encantó."),
(DEFAULT, 9, 2,"Todo ok, sin inconvenientes."),
(DEFAULT, 10, 3,"Recomiendo este vendedor, muy responsable."),
(DEFAULT, 10, 4,"Todo bien, aunque no vino con todos los accesorios."),
(DEFAULT, 10, 5,"El color difiere un poco de la foto, pero me gustó igual.")

