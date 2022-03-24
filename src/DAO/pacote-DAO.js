class PacoteDAO {
    constructor(db){
        this.db = db
    }

    pegaTodosPacotes = ()=>{
        return new Promise((resolve, reject)=>{
            this.db.all('SELECT * FROM PACOTES', (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "pacotes": rows,
                        "erro": false
                    })
                }
            })
        })
    }

    pegaUmPacote = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.get('SELECT * FROM PACOTES WHERE ID = ?', 
            id,
            (error, rows)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "pacote": rows,
                        "erro": false
                    })
                }
            }
            )
        })
    }

    inserePacote = (novoPacote)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('INSERT INTO PACOTES VALUES (?, ?, ?, ?, ?, ?, ?)',
            novoPacote.id , novoPacote.cliente_id, novoPacote.frete, novoPacote.peso, novoPacote.largura, novoPacote.altura, novoPacote.comprimento,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "mensagem": `Pacote ${novoPacote.id} inserido com sucesso!`,
                        "pacote": novoPacote, 
                        "erro": false
                    })
                }
            }
            )
        })
    }

    deletaPacote = (id)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('DELETE FROM PACOTES WHERE ID = ?',
            id,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "pacote": `Pacote de id ${id} deletado com sucesso!`,
                        "erro": false
                    })
                }
            }
            )
        })
    }

    atualizaPacote = (id, pacote)=>{
        return new Promise((resolve, reject)=>{
            this.db.run('UPDATE PACOTES SET CLIENTE_ID = ?, FRETE = ?, PESO = ?, LARGURA = ?, ALTURA = ?, COMPRIMENTO = ?, WHERE ID = ?',
            pacote.cliente_id, pacote.frete, pacote.peso, pacote.largura, pacote.altura, pacote.comprimento,
            id,
            (error)=>{
                if(error){
                    reject({
                        "mensagem": error.message,
                        "erro": true
                    })
                }else{
                    resolve({
                        "mensagem": `Pacote de id ${id} atualizado com sucesso`,
                        "pacote": pacote,
                        "erro": false
                    })
                }
            }
            )
        })
    }

    _verificaId = async (id)=>{
        const pacote = await this.pegaUmPacote(id)
        if(pacote.pacote == undefined){
            throw new Error(`Pacote de ${id} não encontrado.`)
        }
        return pacote
}
}

export default PacoteDAO



