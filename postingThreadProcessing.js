var fs = require('fs')

/**
 * adding thread to array
 * @param {} title 
 * @param {*} author 
 */
function addThread(title, author, callback) {


    fs.readFile('data.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            console.log(err);
        } else {
            obj = JSON.parse(data); //now it an object
            obj.table.push({
                judul: title,
                pengarang: author
            }); //add some data
            json = JSON.stringify(obj); //convert it back to json
            fs.writeFile('data.json', json, 'utf8', callback); // write it back 
        }
    });


}

/**
 * read all array of the threads
 * 
 */
function loadThread() {
    try {
        const bufferData = fs.readFileSync("data.json");
        //const stringData = bufferData.toString();

        const newLocal = JSON.parse(bufferData);



        return newLocal
    } catch (error) {
        console.log(error)
        return [];
    }

}


function filterThread(title, callback) {
    fs.readFile('data.json', 'utf8', function readFileCallback(err, data) {
        if (err) {
            callback(err,null)
        } else {
            obj = JSON.parse(data); //now it an object
            const dataToKeep = obj.table.filter(d => d.judul === title)
            callback(null, dataToKeep);
        }
    });



}

function removeThread(title) {
    //filter thread by title
    //overwrite new threads without mentioned title
}

/**
 * save thread array to file
 * @param {*} threads 
 */
function saveThread(threads) {
    console.log("SAVE");
    console.log(threads);
    fs.writeFileSync("data.json", threads)
}

//running some services
/**addThread("factfullness", "hans rosling", function(err, data){
    console.log(data);
});
 */

 filterThread('factfullness', function(err,result){
     console.log(result)
 });

