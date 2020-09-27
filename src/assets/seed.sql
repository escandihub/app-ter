CREATE TABLE IF NOT EXISTS rumiante(id  INTEGER PRIMARY KEY AUTOINCREMENT, nombre Text, sexo bool, nacimiento Text, raza_id INTEGER, tipo_id INTEGER);
CREATE TABLE IF NOT EXISTS raza(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre Text);
CREATE TABLE IF NOT EXISTS grupo(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre Text);
 
INSERT or IGNORE INTO raza(id, nombre) VALUES(1, 'BILLMASTER');
INSERT or IGNORE INTO raza(id, nombre) VALUES(2, 'BOG');

INSERT or IGNORE INTO grupo(id, nombre) VALUES(1, 'Toro');
INSERT or IGNORE INTO grupo(id, nombre) VALUES(2, 'Vaca');
INSERT or IGNORE INTO grupo(id, nombre) VALUES(3, 'Ternero');

INSERT or IGNORE INTO rumiante(nombre, sexo, raza_id, tipo_id) VALUES('BILL', 1, 1,1);
INSERT or IGNORE INTO rumiante(nombre, sexo, raza_id, tipo_id) VALUES('MOLY', 1, 1,1);
INSERT or IGNORE INTO rumiante(nombre, sexo, raza_id, tipo_id) VALUES('MOLY', 0, 1,2);
INSERT or IGNORE INTO rumiante(nombre, sexo, raza_id, tipo_id) VALUES('MOLY', 1, 1,3);
INSERT or IGNORE INTO rumiante(nombre, sexo, raza_id, tipo_id) VALUES('MOLY', 1, 1,3);


-- querys
-- SELECT rumiante.id, rumiante.nombre, rumiante.sexo, raza.nombre AS raza, grupo.nombre AS tipo From rumiante
-- INNER JOIN raza on rumiante.raza_id = raza.id INNER JOIN grupo on rumiante.tipo_id = grupo.id
-- WHERE grupo.id = 1