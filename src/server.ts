import morgan from 'morgan';
import bodyParser from 'body-parser';
import 'reflect-metadata';

import { createExpressServer } from 'routing-controllers';
import { UsersController } from './Users/controller/users.controller';
import db from './config/db';
import config from './config/config';

const app = createExpressServer({
  controllers: [UsersController],
});

app.use(morgan('dev'));
app.use(bodyParser.json());

app.listen(config.port, async () => {
  await db();
  console.log('Listening on port 3000');
});
