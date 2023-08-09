require ('dotenv').config();

module.exports = {
  mongoURL: process.env.MONGODB_URI,
  secretKey: 'clave_secreta_para_jsonwebtoken'
};