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
imagenDelProducto VARCHAR(50),
nombreDelProducto VARCHAR(50),
descripcion VARCHAR(300),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);

CREATE TABLE comentarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
idPost INT UNSIGNED,
idUsuario INT UNSIGNED,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,

FOREIGN KEY (idPost) REFERENCES productos(id),
FOREIGN KEY (idUsuario) REFERENCES usuarios(id)
);

<<<<<<< HEAD
=======
ALTER TABLE productos
ADD COLUMN usuarioId INT UNSIGNED;

ALTER TABLE productos
ADD CONSTRAINT usuario_producto
FOREIGN KEY (usuarioId) REFERENCES usuarios(id);

ALTER TABLE comentarios
ADD COLUMN textoComentario VARCHAR(300) NOT NULL;

>>>>>>> 136c40ee243e1d7cb536cabf1655b6b31e8dd235
SELECT * FROM USUARIOS;

INSERT INTO usuarios (id, email, contraseña, fechaDeNacimiento, dni, fotoDePerfil)
VALUES 
(DEFAULT, "vicky@gmail.com", "1234vicky", "2005-09-15", 12345678, "images/users/uservi.jpg"),
(DEFAULT, "lunapixel_93@gmail.com", "fYFAEl4Etw", "1996-09-20", 44097247, "images/users/user1.webp"),
(DEFAULT, "neozafirox@gmail.com", "5ZaLjZ7aes", "2003-06-18",17402384, "images/users/user2.jpg"),
(DEFAULT, "caféen8bits@gmail.com", "JOEqZQQMMM", "1985-10-17", 90405264, "images/users/user3.jpg"), 
(DEFAULT, "sombrasdelsur@gmail.com", "9tAM5q8265", "1985-07-01", 12824561, "images/users/user4.jpg"),
(DEFAULT, "heladocósmico@gmail.com", "hJKg4LAmYe", "2000-06-24", 65791676, "images/users/user5.jpeg");

INSERT INTO productos (id, imagenDelProducto, nombreDelProducto, descripcion)
VALUES 
(DEFAULT,"images/products/baumeymercier.webp", "Baume & Mercier- CATWALK", "Un reloj con un diseño limpio y minimalista. Su caja cuadrada y su brazalete de acero le otorgan un aspecto moderno y elegante, ideal para quienes buscan un estilo sobrio pero sofisticado."),
(DEFAULT,"images/products/bulgarisolotempo.webp", "Bulgari Solotempo", "Un reloj moderno y llamativo, con un diseño minimalista pero impactante. Su caja de acero y correa de cuero negro combinan a la perfección con la esfera con números grandes y estilizados. Ideal para quienes buscan lujo con un toque contemporáneo."),
(DEFAULT,"images/products/corumromvlvs.webp", "Corum Romvlvs", "Un reloj de lujo con una estética clásica y sofisticada. Su esfera limpia con números romanos grabados en el bisel y su combinación de acero y oro lo convierten en un accesorio elegante y exclusivo."), 
(DEFAULT,"images/products/emporloarmani.webp", "Emporio Armani", "Un reloj de estilo clásico con un aire deportivo gracias a su cronógrafo. Su caja de acero, esfera beige con detalles en negro y su correa de cuero le dan un aspecto sofisticado y masculino. Ideal para quienes buscan elegancia con funcionalidad."),
(DEFAULT,"images/products/longinesbellearti.webp", "Longines -Belle Arti", "Inspirado en el Art Deco, este reloj de Longines combina un diseño rectangular con una esfera negra sofisticada. Su brazalete de acero y sus detalles clásicos lo convierten en una excelente opción para quienes buscan distinción."),
(DEFAULT,"images/products/longinesdolcevita.webp", "Longines DolceVita", "Un modelo elegante con un diseño rectangular que lo hace destacar. Su caja de acero y su brazalete metálico brindan un look refinado, mientras que su esfera blanca con detalles sencillos refleja sofisticación y lujo. Perfecto para quienes buscan un reloj distinguido y versátil."),
(DEFAULT,"images/products/radodiastarcremico.webp", "Rado Diastar Cremico", "Un reloj sofisticado con un diseño minimalista y elegante. Su caja y brazalete en cerámica blanca con detalles dorados le otorgan un look refinado y exclusivo. Ideal para quienes buscan un estilo moderno y lujoso."),
(DEFAULT,"images/products/raymondweildama.webp", "Raymond Weil Dama", "Un reloj femenino con un diseño clásico y elegante. Su esfera blanca con números romanos y su correa de cuero negro le dan un toque sofisticado y atemporal. Perfecto para quienes buscan un accesorio refinado para cualquier ocasión."),
(DEFAULT,"images/products/tagheuer.webp", "Tag Heuer- Formula 1", "Diseñado para los amantes de la velocidad y la adrenalina, este reloj deportivo cuenta con una caja robusta y un bisel giratorio con marcadores de tiempo. Su combinación de colores le da un aspecto dinámico y audaz."),
(DEFAULT,"images/products/tagheuerprofessional.webp", "Tag Heuer Professional 2000", "Un modelo de inspiración náutica con un diseño resistente y funcional. Su caja de acero con detalles dorados y su bisel giratorio lo hacen ideal para quienes buscan un reloj versátil y duradero.");

SELECT * FROM COMENTARIOS;

INSERT INTO comentarios (id, idPost, idUsuario)
VALUES
(DEFAULT, 1, 1),
(DEFAULT, 1, 2), 
(DEFAULT, 1, 3), 
(DEFAULT, 2, 4),
(DEFAULT, 2, 5), 
(DEFAULT, 2, 6), 
(DEFAULT, 3, 1),
(DEFAULT, 3, 2),
(DEFAULT, 3, 3),
(DEFAULT, 4, 4),
(DEFAULT, 4, 5),
(DEFAULT, 4, 6), 
(DEFAULT, 5, 1), 
(DEFAULT, 5, 2),
(DEFAULT, 5, 3),
(DEFAULT, 6, 4),
(DEFAULT, 6, 5), 
(DEFAULT, 6, 6),
(DEFAULT, 7, 1), 
(DEFAULT, 7, 2), 
(DEFAULT, 7, 3),
(DEFAULT, 8, 4),
(DEFAULT, 8, 5),
(DEFAULT, 8, 6),
(DEFAULT, 9, 1),
(DEFAULT, 9, 1), 
(DEFAULT, 9, 2), 
(DEFAULT, 10, 3),
(DEFAULT, 10, 4),
(DEFAULT, 10, 5);
<<<<<<< HEAD
=======

UPDATE comentarios SET textoComentario = 'Este reloj es elegante y combina con todo, ¡me encanta!' WHERE id = 1;
UPDATE comentarios SET textoComentario = 'Lo compré para regalar y fue un éxito total. Excelente calidad.' WHERE id = 2;
UPDATE comentarios SET textoComentario = 'No era lo que esperaba, pero el diseño es interesante.' WHERE id = 3;
UPDATE comentarios SET textoComentario = 'Este reloj es elegante y combina con todo, ¡me encanta!' WHERE id = 4;
UPDATE comentarios SET textoComentario = 'Lo compré para regalar y fue un éxito total. Excelente calidad.' WHERE id = 5;
UPDATE comentarios SET textoComentario = 'No era lo que esperaba, pero el diseño es interesante.' WHERE id = 6;
UPDATE comentarios SET textoComentario = 'Este reloj es elegante y combina con todo, ¡me encanta!' WHERE id = 7;
UPDATE comentarios SET textoComentario = 'Lo compré para regalar y fue un éxito total. Excelente calidad.' WHERE id = 8;
UPDATE comentarios SET textoComentario = 'No era lo que esperaba, pero el diseño es interesante.' WHERE id = 9;
UPDATE comentarios SET textoComentario = 'Este reloj es elegante y combina con todo, ¡me encanta!' WHERE id = 10;
UPDATE comentarios SET textoComentario = 'Lo compré para regalar y fue un éxito total. Excelente calidad.' WHERE id = 11;
UPDATE comentarios SET textoComentario = 'No era lo que esperaba, pero el diseño es interesante.' WHERE id = 12;
UPDATE comentarios SET textoComentario = 'Este reloj es elegante y combina con todo, ¡me encanta!' WHERE id = 13;
UPDATE comentarios SET textoComentario = 'Lo compré para regalar y fue un éxito total. Excelente calidad.' WHERE id = 14;
UPDATE comentarios SET textoComentario = 'No era lo que esperaba, pero el diseño es interesante.' WHERE id = 15;
UPDATE comentarios SET textoComentario = 'Este reloj es elegante y combina con todo, ¡me encanta!' WHERE id = 16;
UPDATE comentarios SET textoComentario = 'Lo compré para regalar y fue un éxito total. Excelente calidad.' WHERE id = 17;
UPDATE comentarios SET textoComentario = 'No era lo que esperaba, pero el diseño es interesante.' WHERE id = 18;
UPDATE comentarios SET textoComentario = 'Este reloj es elegante y combina con todo, ¡me encanta!' WHERE id = 19;
UPDATE comentarios SET textoComentario = 'Lo compré para regalar y fue un éxito total. Excelente calidad.' WHERE id = 20;
UPDATE comentarios SET textoComentario = 'No era lo que esperaba, pero el diseño es interesante.' WHERE id = 21;
UPDATE comentarios SET textoComentario = 'Este reloj es elegante y combina con todo, ¡me encanta!' WHERE id = 22;
UPDATE comentarios SET textoComentario = 'Lo compré para regalar y fue un éxito total. Excelente calidad.' WHERE id = 23;
UPDATE comentarios SET textoComentario = 'No era lo que esperaba, pero el diseño es interesante.' WHERE id = 24;
UPDATE comentarios SET textoComentario = 'Este reloj es elegante y combina con todo, ¡me encanta!' WHERE id = 25;
UPDATE comentarios SET textoComentario = 'Lo compré para regalar y fue un éxito total. Excelente calidad.' WHERE id = 26;
UPDATE comentarios SET textoComentario = 'No era lo que esperaba, pero el diseño es interesante.' WHERE id = 27;
UPDATE comentarios SET textoComentario = 'Este reloj es elegante y combina con todo, ¡me encanta!' WHERE id = 28;
UPDATE comentarios SET textoComentario = 'Lo compré para regalar y fue un éxito total. Excelente calidad.' WHERE id = 29;
UPDATE comentarios SET textoComentario = 'No era lo que esperaba, pero el diseño es interesante.' WHERE id = 30;
>>>>>>> 136c40ee243e1d7cb536cabf1655b6b31e8dd235
