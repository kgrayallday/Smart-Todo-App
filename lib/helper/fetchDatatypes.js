const axios = require("axios");

const APPID = process.env.DB_WOLFRAM_ALPHA_APPID;

const fetchDatatypes = (name) => {
  console.log('------------', name);

  return axios(
    `https://api.wolframalpha.com/v2/query?input=${name}&format=plaintext&output=JSON&appid=${APPID}`
  ).then((res) => res.data.queryresult.datatypes);
};

module.exports = fetchDatatypes;
