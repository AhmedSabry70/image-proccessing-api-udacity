import express from 'express';
import logger from '../middleware/logger';
import imageResize from '../utils/controller';

const routes = express.Router();
// Use logger middleware
routes.use(logger);

//endPoints Use the routes
//test endPoint
routes.get(
  '/test',
  (
    req: express.Request,
    res: express.Response
    //        next: express.NextFunction
  ): void => {
    res.json('hello world 😀!');
  }
);

// "resize" endpoint that will processe our requests
routes.get('/resize', imageResize);

export default routes;
