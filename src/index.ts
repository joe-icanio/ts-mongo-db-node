import express from 'express';
import { json } from 'body-parser';
import { todoRouter } from './routes/todo';
import { Request, Response } from 'express';

const base = '/api';
const app = express();

app.use(json());

app.use(`${base}/todo`, todoRouter);

// app.get('api/todo', (req: Request, res: Response) => {
//   console.log('hello there');
//   return res.send('post call');
// });

// router.post('api/todo', (req: Request, res: Response) => {
//   console.log('hello there');
//   return res.send('post call');
// });

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on ${process.env.PORT}`);
});
