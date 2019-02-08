const fs = require('fs');

var fetchMock = (fileName) =>
{
    
    try {
        var notesString = fs.readFileSync(fileName);
        return JSON.parse(notesString);
    } catch(error) {
        console.log(error);
        return [];
    }
};


module.exports = {
    fetchMock
}
