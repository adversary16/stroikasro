module.exports = {
  JWT_TOKEN: process.env.JWT_TOKEN,
  JWT_TOKEN_EXPIRATION: process.env.JWT_TOKEN_EXPIRATION || 19220,
  JWT_ISSUER: process.env.JWT_ISSUER || 'stroikasro_dev',
  SERVER: {
    PORT: process.env.SERVER_PORT || 4001,
    FILE_ENDPOINT: process.env.FILE_ENDPOINT || '/content/media',
  },
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017',
  PASSWORD_HASHING_ROUNDS: process.env.PASSWORD_HASHING_ROUNDS || 10,
  CONTENT_TYPES: {
    html: 'html',
    block: 'block',
  },
  MEDIA_TYPES: {
    video: ['mp4'],
    audio: ['mp3', 'aac'],
    doc: ['pdf', 'xlsx', 'docx', 'doc', 'xls'],
    image: ['jpg', 'png'],
  },
  STORAGE_PATH: {
    INCOMING: '/data/storage/uploads',
    PROCESSED: '/data/storage/media',
  },

};
