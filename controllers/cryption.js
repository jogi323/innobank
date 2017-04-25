var crypto = require('crypto');

function dataEncrypt(value){
    const cipher = crypto.createCipher('aes192', 'a password');
    let encrypted = cipher.update(value, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

module.exports = { dataEncrypt };