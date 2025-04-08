CREATE TABLE usuarios (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
email VARCHAR (50) NOT NULL,
contraseña VARCHAR(50) NOT NULL,
fechaDeNacimiento DATE, 
dni MEDIUMINT, 
fotoDePerfil VARCHAR(100), 
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);

ALTER TABLE usuarios
MODIFY COLUMN dni INT UNSIGNED;


CREATE TABLE productos (
id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
imagenDelProducto VARCHAR(50),
nombreDelProducto VARCHAR(50),
descripcion VARCHAR(50),
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP 
);

ALTER TABLE productos
MODIFY COLUMN descripcion VARCHAR(300);

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

SELECT * FROM USUARIOS;

INSERT INTO usuarios (id, email, contraseña, fechaDeNacimiento, dni, fotoDePerfil)
VALUES 
(DEFAULT, "vicky@gmail.com", "1234vicky", "2005-09-15", 12345678, "images/users/uservi.jpg"),
(DEFAULT, "lunapixel_93@example.com", "fYFAEl4Etw", "1996-09-20", 44097247, "images/users/user1.webp"),
(DEFAULT, "neozafirox@example.com", "5ZaLjZ7aes", "2003-06-18",17402384, "images/users/user2.jpg"),
(DEFAULT, "caféen8bits@example.com", "JOEqZQQMMM", "1985-10-17", 90405264, "images/users/user3.jpg"), 
(DEFAULT, "sombrasdelsur@example.com", "9tAM5q8265", "1985-07-01", 12824561, "images/users/user4.jpg"),
(DEFAULT, "heladocósmico@example.com", "hJKg4LAmYe", "2000-06-24", 65791676, "images/users/user5.jpeg"),
(DEFAULT, "vortexnaranja@example.com", "hdej49VDfH","2001-11-19", 79372520, "images/users/user6.jpeg"),
(DEFAULT, "rayoinvisible7@example.com", "8SEvz2NOI8", "1992-08-13", 34827061, "images/users/user7.jpg"), 
(DEFAULT, "koalacibernético@example.com", "RTC7CyI88t", "1995-10-17", 93035264, "images/users/user8.jpg"),
(DEFAULT, "ecodenebula@example.com", "DNoUWamHRZ", "1989-01-14", 76562344, "images/users/user9.jpeg"),
(DEFAULT, "runitaerrante@example.com", "1qQCmJKOtg", "1989-06-20", 40451074, "images/users/usuuer10.webp");

DELETE FROM usuarios WHERE id = 2;


SELECT * FROM PRODUCTOS;

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

DELETE FROM productos WHERE id = 2;

SELECT * FROM COMENTARIOS;

INSERT INTO comentarios (id, idPost, idUsuario)
VALUES
(DEFAULT, 1, 3),
(DEFAULT, 3, 4), 
(DEFAULT, 4, 5), 
(DEFAULT, 5, 6),
(DEFAULT, 6, 7), 
(DEFAULT, 7, 8), 
(DEFAULT, 8, 9),
(DEFAULT, 9, 10),
(DEFAULT, 10, 11),
(DEFAULT, 11, 12);