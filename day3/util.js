const fs = require('fs');

module.exports = {
  readRowSyncAsString: (fileName) => {
    return fs.readFileSync(fileName).toString().trim().split('\n');
  }
}
