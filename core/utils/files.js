const fs = require('fs');
const {MediaFile} = require('../models/mediafile');
const crypto = require('crypto');
const {v4} = require('uuid');
const {STORAGE_PATH, MEDIA_TYPES} = require('../const');

exports.createTemporaryFile = async ({
  fieldname,
  originalname,
  mimetype,
  buffer,
  size,
}) => {
  const [extension] = originalname.split('.').splice(-1, 1);
  const internalName = [v4(), extension].join('.');
  const tempPath = `${STORAGE_PATH.INCOMING}/${internalName}`;
  const tempFile = new Promise((resolve, reject) => {
    fs.writeFile(tempPath, buffer, (err, data) => {
      if (err) reject(err);
      else resolve(tempPath);
    });
  });
  return {file: await tempFile, mimetype, internalName, extension};
};

exports.validateFile = async ({file, mimetype, extension}) => {
  const type = detectFileType({extension});
  return {type};
};

const generateFileChecksum = async ({file, mimetype}) => {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash('md5');
    const input = fs.createReadStream(file);
    input.on('error', reject);
    input.on('data', (chunk) => {
      hash.update(chunk);
    });
    input.on('close', () => resolve(hash.digest('hex')));
  });
};

const processFile = async ({file, mimetype, type, internalName}) => {
  const checksum = await generateFileChecksum({file, mimetype});
  const existingFile = await MediaFile.findOne({checksum});
  if (existingFile) {
    fs.unlink(file, (err) => {
      err && console.log(err);
    });
    return existingFile;
  } else {
    const processedPath = `${STORAGE_PATH.PROCESSED}/${internalName}`;
    fs.createReadStream(file).pipe(fs.createWriteStream(processedPath));
    fs.unlink(file, (err) => {
      err && console.log(err);
    });
    return await MediaFile.create({filename: internalName, type, checksum});
  };
  return checksum;
};

exports.generateFileChecksum = generateFileChecksum;
exports.processFile = processFile;

const detectFileType = ({extension}) => {
  const [filetype] = Object.entries(MEDIA_TYPES).find(([index, key]) => {
    return key.includes(extension);
  });
  return filetype || false;
};

exports.convertFile = async () => {

};
