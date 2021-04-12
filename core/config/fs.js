const fs = require('fs');
const {STORAGE_PATH} = require('../const');

exports.initStorage = async () => {
  Object.values(STORAGE_PATH).map(async (path) => {
    await fs.mkdir(path, {recursive: true}, (err) => {
    });
  });
};
