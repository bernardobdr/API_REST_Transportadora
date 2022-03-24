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
    "PESO" float,
    "LARGURA" float,
    "ALTURA" float,
    "COMPRIMENTO" float
  );`;

const ADD_PACOTES_DATA = `
INSERT INTO PACOTES (ID, CLIENTE_ID, FRETE, PESO, LARGURA, ALTURA, COMPRIMENTO)
VALUES 
    (1, 1, '23.99', '9', '30', '30','30'),
    (2, 2, '13.67', '3', '25', '25','25'),
    (3, 3, '22.25', '0.5', '100','100','100'),
    (4, 4, '23.99', '9', '30', '30','30'),
    (5, 5, '13.67', '3', '25', '25  ','25'),
    (6, 6, '22.25', '0.5', '100','100','100'),
    (7, 7, '23.99', '9', '30', '30','30'),
    (8, 8, '13.67', '3', '25', '25','25'),
    (9, 9, '22.25', '0.5', '100','100','100'),
    (10, 10, '23.99', '9', '30', '30','30')

`

function criaTabelaPacote() {
    db.run(PACOTES_SCHEMA, (error)=> {
       if (error) console.log("Erro ao criar tabela de pacotes")
    })
}


function populaTabelaPacote() {
    db.run(ADD_PACOTES_DATA, (error)=> {
       if (error) console.log("Erro ao popular tabela de pacotes")
    });
}


db.serialize( ()=> {
    criaTabelaPacote()
    populaTabelaPacote()
})