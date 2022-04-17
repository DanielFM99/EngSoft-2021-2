import { Router } from 'express';
import schema from '@/app/schemas/schema';

const router = new Router();

router.get('/', (req, res) => {
  return res.send({ message: 'Hello world!' });
});

router.post('/', (req, res) => {
  const { title, description, createdAt } = req.body;
  schema
    .create({ title, description, createdAt })
    .then((schema) => {
      res.status(200).send(schema);
    })
    .catch((error) => {
      console.log('Erro!');
      res.status(400).send({ error: 'Ocorreu um erro!' });
    });
});

router.get('/projects', (req, res) => {
  schema
    .find()
    .then((project) => {
      res.send(project);
    })
    .catch((error) => {
      console.log('Erro!');
    });
});

export default router;
