import express, { Request, Response } from 'express';
import '../db/index';
import { ToDo } from '../modals/todo';

const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  return ToDo.find({}).then(result => res.status(200).send(result));
});

router.post('/', (req: Request, res: Response) => {
  const { title, description, year } = req.body;
  const toDo = new ToDo({ title, description, year });
  return toDo
    .save()
    .then(() => res.status(200).send(toDo))
    .catch(err => res.status(400).send(err));
});

router.put('/:_id', (req: Request, res: Response) => {
  const payload = req.body;
  const _id = req.params['_id'];

  return ToDo.updateOne({ _id }, payload)
    .then(result => res.status(200).send(result))
    .catch(err => res.status(400).send(err));
});

router.delete('/:_id', (req: Request, res: Response) => {
  const _id = req.params['_id'];
  return ToDo.deleteOne({ _id })
    .then(result => res.status(200).send(result))
    .catch(err => res.status(400).send(err));
});

export { router as todoRouter };
