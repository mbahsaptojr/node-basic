var fs = require("fs");

const thread = {
    "title" : "javascript programming 24 hours",
    "author" : "howgartz"
}

const jsonThread = JSON.stringify(thread);

fs.writeFileSync("JSON_STORED_SYNC.json",jsonThread)

fs.writeFileSync("JSON_STORED_SYNC-new.json",jsonThread)

const readDataResult = fs.readFileSync("JSON_STORED_SYNC.json")

const stringResultData = readDataResult.toString();

const jsonResult = JSON.parse(stringResultData);



console.log(jsonResult);