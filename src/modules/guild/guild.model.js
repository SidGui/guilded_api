import reader  from '../../utils/reader';
import mocks from '../../config/mockFileList';
import _ from 'lodash';

var _guildSchema = {
   id:0,
   nome:"",
   quantidadeMembros:0,
   players:[] 
};

var loadSchema = () => {
    try{
    _guildSchema = reader.fetchMock(mocks.mocks.mockGuild);
    return _guildSchema;
    } catch(ex) {
        console.log(ex);
        return {}
    }
};

var getAll = () =>  { return loadSchema() };

var getById = (id) => {
    let result = {};
    try{
        const data = loadSchema();
        result = _.filter(data.guilds, item => item.id === Number.parseInt(id));
    } catch(ex) {
        console.log(ex);
        return result;
    }
    return result;
}

module.exports = {
    getAll,
    getById
};  