DROP SCHEMA IF EXISTS pi_db;

CREATE SCHEMA pi_db;

USE pi_db;

CREATE TABLE usuarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	email text,
	contraseña text,
	fecha date,
	dni int, 
	foto_de_perfil text,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL
);

CREATE TABLE productos(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	imagen TEXT,
	nombre TEXT,
	descripcion TEXT,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL,
    id_usuario INT UNSIGNED,
    
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
);

CREATE TABLE comentarios(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
	texto_comentario text, 
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
	deletedAt TIMESTAMP NULL,
    id_usuario INT UNSIGNED,
    id_producto INT UNSIGNED,


	FOREIGN KEY (id_usuario) REFERENCES usuarios(id),
	FOREIGN KEY (id_producto) REFERENCES productos(id)
);


INSERT INTO usuarios (email, contraseña, fecha, dni, foto_de_perfil)
VALUES
('maria.gonzalez@example.com', 'contraseña1', '2023-01-01', 12345678, 'ftp5.jpg'),
('juan.martinez@example.com', 'contraseña2', '2023-01-02', 87654321, 'ftp3.jpg'),
('ana.lopez@example.com', 'contraseña3', '2023-01-03', 98765432, 'ftp2.jpg'),
('carlos.rodriguez@example.com', 'contraseña4', '2023-01-04', 23456789, 'ftp4.jpg'),
('laura.perez@example.com', 'contraseña5', '2023-01-05', 34567890, 'ftp1.jpg');

INSERT INTO productos (imagen, nombre, descripcion, id_usuario)
VALUES
("secadorpelo.webp", "Secador de Pelo Remington Thermacare D12A negro 220V", "Lo que tienes que saber de este producto: Si hay algo que no puede faltar en tu baño es un secador de pelo Remington Thermacare. En ondas, rulos, lacio, usalo como más te guste. Este producto se encargará de cuidar la salud de tu cabello y de crear el look perfecto para cada ocasión. Es pequeño, liviano y viene a completar tu set de belleza en el hogar",1),
("BUCLERA.png", "Rizadora de barril GAMA", "25 mm de diametro color negro/rojo 110V/220V", 2),
("PANCHITA.png", "GAMA Planchita de Pelo slice ceramic shine Ion" ,"Tecnología de vanguardia. Sus placas de ceramico facilitan el alisado y te ayudarán a conseguir un lacio perfecto, como recién salido de la peluquería.", 3),
("organizadormkp.png", "Organizador de Maquillaje", "Organizador con cajones. Ideal para tener todo tu maquillaje y cremas, ordenados en un solo lugar. Está hecho de material acrílico muy resistente y mucho más fuerte que el vidrio. Duradero y moderno.", 4),
("shampoo.png","Alfaparf milano", "Este shampoo de alta calidad, libre de sulfatos, está especialmente diseñado para limpiar y nutrir tu cabello, devolviéndole su vitalidad y brillo natural.",5),
("acondicionador.png", "L'oréal Professionnel Serie", "Cuidá tus mechas rubias con Blondifier Gloss Shampoo, un shampoo con sistema de reparación e iluminación.", 1),
("dyson.png", "Dyson", "Si hay algo que no puede faltar en tu baño es un secador de pelo Dyson Supersonic. En ondas, rulos, lacio, usalo como más te guste. Este producto se encargará de cuidar la salud de tu cabello y de crear el look perfecto para cada ocasión. Es pequeño, liviano y viene a completar tu set de belleza en el hogar.", 2),
("lipgloss.png", "Lipgloss", "¡Glossy, juicy, plumpy, baby! Logra ese brillo voluminoso con It-gloss, ahora en colores audaces que rellenan los labios con un color brillante en barra. Estos tonos seductores se deslizan de forma vibrante y se funden de forma neutra para unos labios nutridos e hidratados con volumen.", 3),
("maquina-de-afeitar.png", "Maquina de afeitar", "Con esta multigroomer de OM disfrutar de un producto de calidad, cuyos resultados estéticos son excelentes, es posible. Gracias a su funcionalidad podrás relucir el look que más te guste.", 4),
("serum.png", "Serum", "Este serum antiarrugas es el 1er tratamiento antiedad que repara las arrugas y las rellena, promoviendo la producción de colágeno gracias al ácido hialurónico.", 5);

INSERT INTO comentarios (texto_comentario, id_usuario, id_producto)
VALUES 
("Muy buen secador. Liviano. El sopleteo justo para tu peluquín. La temperatura tbn ideal.", 5, 1),
("Mi hija quedó feliz",2, 1),
("Muy buen producto!! funciona de diez, yo en lo personal lo primero que hago antes de comprar algo, es revisar los malos comentarios de cada producto y vi que este tenía pocos malos comentarios y le encare nomas , gracias a dios todo joya!! funciona de 10!", 3,1),

("Lo compre para usar a diario es buen producto y se lo regale a mi hija ya que la función cumple para trabajar profesionalmente! excelente",5 ,2),
("Totalmente recomendable el producto.", 2, 2),
("El producto es perfecto, lo unico malo es que la caja vino toda desarmada y super aplastada, un poco más y el producto estaba fuera de su caja. Entiendo que quizas en el viaje se pueda abrir si tambien llevan otros productos, pero al menos pongan cinta para que no se abra. Si uno compra algo se espera que la caja donde viene el producto también llegue en buenas condiciones.",4,2),

("La mejor compra que hice chicas",3,3),
("Excelente planchado, en dos pasadas ya me deja lacio hermoso y tengo el pelo con ondas. Es cómoda, había leído que se calentaba mucho el plástico y no me parece así, o sea si se calienta pero no al nivel de largar olor y quemarte. Es larga por lo tanto mechón que agarre mechón que lo plancha genial. Realmente estoy enamorada de lo práctica que es. Ahora solo espero que dure porque es muy linda.", 4,3),
("La planchita es altamente valorada por su capacidad de calentar rápido y dejar el pelo perfecto en pocas pasadas. Los usuarios destacan su excelente calidad, su practicidad y lo liviana que es, facilitando su uso. Además, se menciona que es muy buena para controlar el frizz y que las placas dejan el cabello suave y brillante. Es considerada una opción recomendable por su relación calidadprecio.",2,3),

("Es hermoso, me encanto el material y el modelo, súper práctico.",4,4),
("Me sirvió para lo que quería, que es ordenar mi maquillaje, cremas, etc. Pero no es para muchas cosas, en mi caso tengo lo justo y necesario y entra perfecto. Si bien no es mal producto, creo que el precio no es acorde ya que no es la mejor calidad",1,4),
("Era para mi novia y le gustó mucho.",5,4),

("Me lo recomendó mi estilista. Es la segunda vez q lo compro. Tengo el pelo procesado x la decoloración, y este combo me deja divino el pelo. Lo recomiendo =).",2,5),
("Me dejo el pelo sedoso y brillante. 10/10",3,5),
("Feliz con los resultados", 4,5),

("Excelente producto, lastima que para nosotros este bastante caro. Pero dura bastante, solo se usa poca cantidad para obtener un buen lavado. Lo volvería a comprar.",1,6),
("Es muy buen producto, marca y calidad!!!",5,6),
("Buenisimo producto",2,6),

("Dónde estuvo éste secador toda mí vida?",4,7),
("Me dejó el pelo mejor de lo que me dejan en la pelu, incluso ni planchita hizo falta, cero frizz, una sublime suavidad.",3,7),
("Seca rápido, no hace casi ruido, es liviano, cable bien largo. Larga vida al marciano soplapelo!",5,7),

("Notás la boca más hinchada. Si estás buscando eso, es una buena opción. El efecto es súper glossy.",1,8),
("Es una propuesta original porque realmente voluminiza y es muy brillante, pero precio-calidad no convence tanto.",2,8),
("Recomiendo utilizar algún aceite antes (yo uso de rosa mosqueta) o cualquier hidratante, y luego poner el producto distribuyéndolo por fuera de los bordes para que haga el efecto voluminizador y no se resequen los labios.",4,8),

("Bastante bueno, más teniendo en cuenta el precio. No le tenía mucha fe, no les voy a mentir.",5,9),
("Buenisima",3,9),
("Se me rompio a la semana.",1,9),

("Tengo la piel mas brillante que nunca. ",4,10),
("Un poco caro, pero vale cada centavo, excelente producto.",2,10),
("Me noto 10 años mas joven",3,10);
