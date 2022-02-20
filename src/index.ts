import routes from './routes/route';
import express, { Application } from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;

//Instantiating express app
const app: Application = express();

app.listen(PORT, () => {
  console.log(`that server http://localhost:${PORT}

    =========is RUNNING==========
    `);
});
// initialise public folder
app.use(express.static('public'));

// Use the routes  to handle all the requests to endpoints that starts with "resize"
app.use('/', routes);

export default app;
