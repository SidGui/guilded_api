import Router from 'express';
import validate from 'express-validation';
import * as playerController from './player.controller';

const router = new Router();

router.use((req,res,next) => {
    console.log('oie');
    next();
});

router.get('/player/:id', (req,res,next) => {
    let a = playerController.getById(req);
    res.send(a);
});

router.get('/player/', (req,res,next) => {
   let a = playerController.getAll();
   res.send(a);
})

export default router;