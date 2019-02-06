const fs = require('fs');

var fetchMock = () =>
{
    
    try {
        var notesString = fs.readFileSync('./mock.json');
        return JSON.parse(notesString);
    } catch(error) {
        return [];
    }
};


module.exports = {
    fetchMock
}
