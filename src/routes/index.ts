import express, { Router } from 'express';
import path from 'path';
import objectivesRouter from './objectives.routes';
import cors from 'cors';

const configs = {
  caminho: "build",
  forcarHTTPS: false,
  port: process.env.PORT || 3000
}

const app = express();

const routes = Router();

routes.use((req, res, next) => {
  next();
});

routes.use('/objectives', objectivesRouter);

routes.use('/objetivos', express.static(configs.caminho), () => {
  routes.get("*", (req, res) => {
    console.log('Hello, nothing here.');
  });
});

routes.use('/', express.static(configs.caminho), () => {
  routes.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..' ,configs.caminho, "index.html"));
  });
});

export default routes;