const mongoose = require("mongoose");

const dbCon = async () => {
  await mongoose.connect(
    "mongodb+srv://silviogpacheco:aix4P7csmP2NbEKs@prueba.dvgfg.mongodb.net/WebPelis"
  );
};

module.exports = dbCon;
