/*
Esse arquivo deve ser executado apenas uma vez para que a o banco seja criado e populado
*/
import sqlite3 from 'sqlite3'
import { dirname } from'path'
import { fileURLToPath } from 'url'
sqlite3.verbose()
const filePath = dirname(fileURLToPath(import.meta.url)) + '/database.db'
const db = new sqlite3.Database(filePath);


const PACOTES_SCHEMA = `
CREATE TABLE IF NOT EXISTS "PACOTES" (
    "ID" INTEGER PRIMARY KEY AUTOINCREMENT,
    "CLIENTE_ID" INT,
    "FRETE" float,
    "PESO" float,
    "LARGURA" float,
    "ALTURA" float,
    "COMPRIMENTO" float
  );`;

const ADD_PACOTES_DATA = `
INSERT INTO CLIENTES (ID, CLIENTE_ID, FRETE, PESO, , LARGURA, ALTURA, COMPRIMENTO)
VALUES 
    (1, 1, 'R$ 23.99', '9KG', '30cm', '30cm','30cm'),
    (2, 2, 'R$ 13.67', '3KG', '25cm', '25cm','25cm'),
    (3, 3, 'R$ 22.25', '0.5KG', '100cm','100cm','100cm'),
    (4, 4, 'R$ 56.20', '2KG', '45.2cm','45.2cm','45.2cm'),
    (5, 5, 'R$ 56.20', '5.5KG', '29cm','29cm','29cm'),
    (6, 6, 'R$ 102.57', '15KG', '33cm','33cm','33cm'),
    (7, 7, 'R$ 120.00', '2.2KG', x'150cm','150cm','150cm'),
    (8, 8, 'R$ 33.42', '1.4KG', '58cm','58cm','58cm'),
    (9, 9, 'R$ 19.98', '1.2KG', '60cm','60cm','60cm'),
    (10, 10, 'R$ 19.09', '0.8KG', '8cm','8cm','8cm')
`

function criaTabelaUsr() {
    db.run(PACOTES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de pacotes");
    });
}


function populaTabelaUsr() {
    db.run(ADD_PACOTES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de pacotes");
    });
}


db.serialize( ()=> {
    criaTabelaUsr();
    populaTabelaUsr();
});