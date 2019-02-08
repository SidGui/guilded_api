import reader  from '../../utils/reader';
import mocks from '../../config/mockFileList';
import _ from 'lodash';

var _playerSchema = {
    id:0
    ,nome:''
    ,raca:''
    ,classe:''
    ,funcao:''
    ,guildId:0
}

var loadSchema = () => {
    try{
        _playerSchema = reader.fetchMock(mocks.mocks.mockPlayer);
        return _playerSchema;
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
        result = _.filter(data.players, item => item.id === Number.parseInt(id));
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