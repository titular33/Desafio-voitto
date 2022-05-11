import { Router } from 'express';

import AlunosController from '../app/controllers/AlunoController';

const routes = new Router();

routes.get('/alunos', AlunosController.index);
routes.post('/alunos', AlunosController.store);
routes.put('/alunos/:id', AlunosController.update);
routes.get('/alunos/:id', AlunosController.show);
routes.delete('/alunos/:id', AlunosController.delete);  


export default routes;
