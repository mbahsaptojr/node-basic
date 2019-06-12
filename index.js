

var fruits = ["grapes", "orange", "mango"]

for (i=0; i< fruits.length; i++){
       var fruit = fruits[i];
       console.log("buah " + fruit);
}

function callBackNode(err,data){
    if(err){
        console.log("data");
    }
    //console.log(data)
}

function addedNumber(arg1, arg2, callback){
    if(typeof arg1 != 'number'){
        callback(new Error("not a number"))
    }

    if(typeof arg2 != 'number'){
        callback(new Error('not a number'))
    }

    var result = arg1 + arg2

    callback(null, result)
}

addedNumber(1,2,callBackNode)