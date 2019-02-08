import HTTPStatus from 'http-status';
import guild from './guild.model';

export function getAll(req,res) {
    try{
        return guild.getAll();
    } catch(ex) {
        return res.status(HTTPStatus.BAD_REQUEST).json(ex);
    }
}

export function getById(req,res) {
    try{
        return guild.getById(req.params.id);
    } catch(ex){
        return res.status(HTTPStatus.BAD_REQUEST).json(ex);
    }
}