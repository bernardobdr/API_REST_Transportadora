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
    "FRETE" varchar(20),
    "PESO" varchar(20),
    "LARGURA" varchar(20),
    "ALTURA" varchar(20),
    "COMPRIMENTO" varchar(20)
  );`;

const ADD_PACOTES_DATA = `
INSERT INTO PACOTES (ID, CLIENTE_ID, FRETE, PESO, LARGURA, ALTURA, COMPRIMENTO)
VALUES 
    (1, 1, 'R$ 23.99', '9KG', '30cm', '30cm','30cm'),
    (2, 2, 'R$ 13.67', '3KG', '25cm', '25cm','25cm'),
    (3, 3, 'R$ 22.25', '0.5KG', '100cm','100cm','100cm')
`

function criaTabelaPacote() {
    db.run(PACOTES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de pacotes");
    });
}


function populaTabelaPacote() {
    db.run(ADD_PACOTES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de pacotes");
    });
}


db.serialize( ()=> {
    criaTabelaPacote();
    populaTabelaPacote();
});