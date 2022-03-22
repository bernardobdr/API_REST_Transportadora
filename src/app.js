import express from "express";
import cors from "cors";
import pacoteController from "./controllers/pacote-controller.js";
import generalMiddleware from "./middleware/general-middleware.js";
import database from "./database/sqlite-db.js";

const app = express();

app.use(express.json());
app.use(cors());

generalMiddleware(app);

pacoteController(app, database);

export default app;