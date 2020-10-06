CREATE TABLE  rumiante(id  INTEGER PRIMARY KEY AUTOINCREMENT, nombre Text, sexo INTEGER, nacimiento Text, edad INTEGER, raza_id INTEGER, tipo_id INTEGER);
CREATE TABLE  raza(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre Text); -- sexo 0 = female 1 = male 
CREATE TABLE  grupo(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre Text);

CREATE TABLE hembra_ternero(madre_id INTEGER, ternero_id INTEGER);
 
INSERT or IGNORE INTO raza(id, nombre) VALUES(1, 'Simmental');
INSERT or IGNORE INTO raza(id, nombre) VALUES(2, 'Brahman');
INSERT or IGNORE INTO raza(id, nombre) VALUES(3, 'Guzerat');
INSERT or IGNORE INTO raza(id, nombre) VALUES(4, 'suizo');

INSERT or IGNORE INTO grupo(id, nombre) VALUES(1, 'Toro');
INSERT or IGNORE INTO grupo(id, nombre) VALUES(2, 'Vaca');
INSERT or IGNORE INTO grupo(id, nombre) VALUES(3, 'Ternero');
-- sementales
INSERT or IGNORE INTO rumiante(nombre, sexo, edad, raza_id, tipo_id) VALUES('BILL', 1, 10, 1,1);
INSERT or IGNORE INTO rumiante(nombre, sexo, edad, raza_id, tipo_id) VALUES('MOLY', 1, 10, 2,1);
INSERT or IGNORE INTO rumiante(nombre, sexo, edad, raza_id, tipo_id) VALUES('MOLY', 1, 10, 3,1);
-- terneros 
INSERT or IGNORE INTO rumiante(nombre, sexo, edad, nacimiento, raza_id, tipo_id) VALUES('Coliny', 1, 1, '2020/08/20', 1,3);
INSERT or IGNORE INTO rumiante(nombre, sexo, edad, nacimiento, raza_id, tipo_id) VALUES('Maritzan', 0, 2, '2020/07/20', 4,3);
-- vaquilla
INSERT or IGNORE INTO rumiante(nombre, sexo, edad, raza_id, tipo_id) VALUES('MARI', 0, 35, 3, 2);
-- muchos a muchos - ternero-vaquilla 
INSERT  INTO hembra_ternero(madre_id, ternero_id) VALUES(1, 4);
INSERT  INTO hembra_ternero(madre_id, ternero_id) VALUES(1, 5);

-- querys
-- SELECT rumiante.id, rumiante.nombre, rumiante.sexo, raza.nombre AS raza, grupo.nombre AS tipo From rumiante
-- INNER JOIN raza on rumiante.raza_id = raza.id INNER JOIN grupo on rumiante.tipo_id = grupo.id
-- WHERE grupo.id = 1