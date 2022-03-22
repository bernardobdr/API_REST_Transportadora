import Pacote from "../models/Pacote.js";
import PacoteDAO from "../DAO/pacote-DAO.js";

function pacoteController(app, bd) {
    const pacoteDAO = new PacoteDAO(bd);

    app.get('/pacote', async (req, res) => {

        try {
            res.json(await pacoteDAO.pegaTodosPacotes());
        }
        catch (error) {
            res.status(400).json(error);
        }
    
    });
}
    app.get('/pacote/id/:id', async (req, res) => {
        const id = req.params.id;

        try {
            await pacoteDAO._verificaId(id);
            const pacote = await pacoteDAO.pegaUmPacote(id);
            res.status(302).json(pacote);
        }
        catch (error) {
            res.status(404).json(error.message);
        }

        app.post('/pacote', (req, res) => {
            const body = req.body;
            try {
                const novoPacote = new Pacote(body.ID, body.CLIENTE_ID, body.FRETE, body.PESO, body.LARGURA, body.ALTURA, body.COMPRIMENTO);

                res.status(201).json(await pacoteDAO.inserePacote(novoPacote));


            } catch (error) {
                res.status(400).json(error);

                res.json({
                    'msg': error.message,
                    'erro': true
                });
            }
        });
        app.delete('/pacote/id/:id', async (req, res) => {
            const id = req.params.id;
            try {
                await pacoteDAO._verificaId(id);
                const delUsuario = await pacoteDAO.deletaPacote(id);
                res.status(201).json(delPacote);
            }
            catch (error) {
                res.status(400).json(error.message);
            }
        });

        app.put('/pacote/id/:id', async (req, res) => {
            const id = req.params.id;

            const body = req.body;

            try {
                const pacoteAtualizado = new Pacote(body.ID, body.CLIENTE_ID, body.FRETE, body.PESO, body.LARGURA, body.ALTURA, body.COMPRIMENTO);

                await pacoteDAO._verificaId(id);
                const attPacote = await pacoteDAO.atualizaPacote(id, pacoteAtualizado);
                res.status(200).json(attPacote);
            }
            catch (error) {

                res.status(404).json(error.message);

                res.json({
                    'msg': error.message,
                    'erro': true
                });
            }
        });
    });


    export default pacoteController
