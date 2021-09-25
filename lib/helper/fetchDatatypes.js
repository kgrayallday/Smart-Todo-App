require("dotenv").config();

const axios = require("axios");

const APPID = process.env.DB_WOLFRAM_ALPHA_APPID;

const fetchDatatypes = (name) => {
  if (name.includes("buy")) {
    return Promise.resolve(1);
  } else if (name.includes("read")) {
    return Promise.resolve(2);
  } else if (name.includes("watch")) {
    return Promise.resolve(3);
  } else if (name.includes("eat")) {
    return Promise.resolve(4);
  } else {
    return Promise.resolve(
      axios(
        `https://api.wolframalpha.com/v2/query?input=${name}&format=plaintext&output=JSON&appid=${APPID}`
      ).then((res) => {
        if (res.data.queryresult.datatypes.length > 20) {
          return 1;
        }
        if (res.data.queryresult.datatypes.includes("Book")) {
          return 2;
        } else if (
          res.data.queryresult.datatypes.includes("Movie") ||
          res.data.queryresult.datatypes.includes("TelevisionProgram")
        ) {
          return 3;
        } else if (res.data.queryresult.datatypes.includes("Food")) {
          return 4;
        } else {
          return 5;
        }
      })
    );
  }
};

module.exports = fetchDatatypes;
