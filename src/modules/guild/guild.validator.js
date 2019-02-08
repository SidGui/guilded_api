import Joi from 'joi'

export default {
    guild: 
        {
            id: Joi.number().integer().required(),
            nome: Joi.string().alphanum().required(),
            quantidadeMembros: 2,
            players: [{
                id: Joi.number().integer().required(),
                nome: Joi.string().alphanum().required(),
                raca: Joi.string().alphanum().required(),
                classe: Joi.string().alphanum().required(),
                funcao: Joi.string().alphanum().required(),
                guildId: Joi.number().integer().required()
            }, {
                id: Joi.number().integer().required(),
                nome: Joi.string().alphanum().required(),
                raca: Joi.string().alphanum().required(),
                classe: Joi.string().alphanum().required(),
                funcao: Joi.string().alphanum().required(),
                guildId: Joi.number().integer().required()
            }]
        }
};