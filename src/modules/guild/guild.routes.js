import Router from 'express';
import validate from 'express-validation';
import * as guildController from './guild.controller';

const router = new Router();

router.use((req,res,next) => {
    console.log('oie');
    next();
});

router.get('/guild/:id', (req,res,next) => {
    let a = guildController.getById(req);
    res.send(a);
});

router.get('/guild/', (req,res,next) => {
   let a = guildController.getAll();
   res.send(a);
})

export default router;