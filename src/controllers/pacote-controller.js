import Pacote from "../models/Pacote.js";
import PacoteDAO from "../DAO/pacote-DAO.js"

const pacoteController = (app, bd)=>{
    const pacoteDAO = new PacoteDAO(bd)

    app.get('/pacote', (req, res)=>{
        pacoteDAO.pegaTodosPacotes()
        .then((resposta)=>{
            res.status(302).json(resposta)
        })
        .catch((erro)=>{
            res.status(404).json(erro)
        })
    })

    app.get('/pacote/id/:id', (req, res)=>{
        const id = req.params.id

        pacoteDAO.pegaUmPacote(id)
        .then((resposta)=>{
            res.status(302).json(resposta)
        })
        .catch((erro)=>{
            res.status(404).json(erro)
        })
    })

    app.post('/pacote', (req, res)=>{
        const body = req.body
        try {
            const novoPacote = new Pacote(body.ID, body.CLIENTE_ID, body.FRETE, body.PESO, body.LARGURA, body.ALTURA, body.COMPRIMENTO)
            
            pacoteDAO.inserePacote(novoPacote)
            .then((resposta)=>{
                res.status(201).json(resposta)
            })
            .catch((erro)=>{
                res.status(400).json(erro)
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })

    app.delete('/pacote/id/:id', (req, res)=>{
        const id = req.params.id

        pacoteDAO.deletaPacote(id)
        .then((resposta)=>{
            res.status(200).json(resposta)
        })
        .catch((erro)=>{
            res.status(404).json(erro)
        })
    })

    app.put('/pacote/id/:id', (req, res)=>{
        const id = req.params.id

        const body = req.body

        try {
            const pacoteAtualizado = new Pacote(body.ID, body.NOME_COMPLETO, body.CPF, body.TELEFONE, body.EMAIL, body.PEDIDOS_ID)

            pacoteDAO.atualizaPacote(id, pacoteAtualizado)
            .then((resposta)=>{
                res.status(200).json(resposta)
            })
            .catch((erro)=>{
                res.status(404).json(erro)
            })
        } catch (error) {
            res.json({
                "msg": error.message,
                "erro": true
            })
        }
    })
}

export default pacoteController