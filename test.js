const axios = require('axios');

axios.get('https://api.wolframalpha.com/v2/query?input=star trek&format=plaintext&output=JSON&appid=L29L8V-6T63QJATEU')
    .then(res => console.log(res.data.queryresult.datatypes));
