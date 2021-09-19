// Imports the Google Cloud client library
const language = require("@google-cloud/language");

// Creates a client
const client = new language.LanguageServiceClient();

/**
 * TODO(developer): Uncomment the following line to run this code.
 */
const text = "spider-man";

// Prepares a document, representing the provided text
const document = {
  content: text,
  type: "PLAIN_TEXT",
};

// Classifies text in the document
client.analyzeEntities({ document }).then((res) => {
  console.log(res[0].entities);
});

// const myPromise = new Promise((resolve, reject) => {
//   resolve(client.analyzeEntities({ document }));
// });
// myPromise.then((val) =>
//   val.forEach((entity) => {
//     if (entity !== null) {
//       console.log(entity.entities[0]);
//     }
//   })
// );
