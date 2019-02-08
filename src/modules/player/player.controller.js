import HTTPStatus from 'http-status';
import guild from './player.model';

export function getAll(req,res) {
    try{
        return guild.getAll();
    } catch(ex) {
        return res.status(HTTPStatus.BAD_REQUEST).json(ex);
    }
}

export function getById(req,res) {
    try{
        console.log(req);
        return guild.getById(req.params.id);
    } catch(ex){
        return res.status(HTTPStatus.BAD_REQUEST).json(ex);
    }
}