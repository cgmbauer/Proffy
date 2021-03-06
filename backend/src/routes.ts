import express from 'express';
import ClassController from './controllers/ClassesControler';
import ConnectionsController from './controllers/ConnectionsControllers';

const routes = express.Router();

const classController = new ClassController();
const connectionsController = new ConnectionsController();

routes.get('/classes', classController.index);

routes.post('/classes', classController.create);

routes.get('/connections', connectionsController.index);

routes.post('/connections', connectionsController.create);

export default routes;
