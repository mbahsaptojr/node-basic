/**added some complexity of callback hell node.js
 * when contractor built house with some manager. Each manager have specific task: built their jobdesc and in the end of month must make decicion progress ok or not that
 * must be report to contractor. Contractor must collect physical building progress and decicion from their manager to be reported to House Owner.
 */



function builtPlumbing(param,  callback){
    var result=param*1.1;
    
    setTimeout(function(){
        console.log("manager builtPlumbing (order 1) make decicion in 2000ms then go ahead")
    }, 2000)

    callback(null,result)
}

function builtFoundation(param,  callback){
    var result=param*1;
   
    setTimeout(function(){
        console.log("manager builtFoundation (order 2) make decicion in 5000ms then no go " + result)
    }, 5000)

    callback(null,result)
}

function builtWall(param,  callback){
    var result=param*1.5;
   
    setTimeout(function(){
        console.log("manager builtWall (order 3) make decicion in 1000ms then no go")
    }, 1000)

    callback(null,result)
}

function builtCanopy(param,  callback){
   
   var result  = param;

    setTimeout(function(){
        result=param*1.2;
        console.log("manager builtCanopy (order 4) make decicion in 3000ms then go ahead " + result)
    }, 3000)

    callback(null,result)
}

function builtHouse(month, callback){
    var result=month*10;

    callback(null,result);

}

builtHouse(2, function(err, data){
    builtPlumbing(data, function(err,data){
        builtFoundation(data,  function(err, data){
            builtWall(data, function(err,data){
                builtCanopy(data,  function(err, data){
                    console.log(data);
                })
            })
        })
    })
})

