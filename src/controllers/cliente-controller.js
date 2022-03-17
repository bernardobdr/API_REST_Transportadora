import Cliente from "../models/Cliente.js";
import ClienteDAO from "../DAO/cliente-DAO.js"

const clienteController = (app, bd)=>{
    const clienteDAO = new ClienteDAO(bd)

    app.get('/cliente', (req, res)=>{
        clienteDAO.pegaTodosClientes()
        .then((resposta)=>{
            res.status(302).json(resposta)
        })
        .catch((erro)=>{
            res.status(404).json(erro)
        })
    })

    app.get('/cliente/id/:id', (req, res)=>{
        const id = req.params.id

        clienteDAO.pegaUmCliente(id)
        .then((resposta)=>{
            res.status(302).json(resposta)
        })
        .catch((erro)=>{
            res.status(404).json(erro)
        })
    })

    app.post('/cliente', (req, res)=>{
        const body = req.body
        try {
            const novoCliente = new Cliente(body.ID, body.NOME_COMPLETO, body.CPF, body.TELEFONE, body.EMAIL, body.PEDIDOS_ID)
            
            clienteDAO.insereCliente(novoCliente)
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

    app.delete('/cliente/id/:id', (req, res)=>{
        const id = req.params.id

        clienteDAO.deletaCliente(id)
        .then((resposta)=>{
            res.status(200).json(resposta)
        })
        .catch((erro)=>{
            res.status(404).json(erro)
        })
    })

    app.put('/cliente/id/:id', (req, res)=>{
        const id = req.params.id

        const body = req.body

        try {
            const clienteAtualizado = new Cliente(body.ID, body.NOME_COMPLETO, body.CPF, body.TELEFONE, body.EMAIL, body.PEDIDOS_ID)

            clienteDAO.atualizaCliente(id, clienteAtualizado)
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

export default clienteController