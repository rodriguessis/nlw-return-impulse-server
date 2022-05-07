import cors from 'cors';
import express from 'express'
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json())
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
    console.log('rodando na porta 3333')
});
//postgresql://postgres:ZB1Aa5cy0vdwZFn1JmRO@containers-us-west-47.railway.app:6302/railway