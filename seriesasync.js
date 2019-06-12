var async = require("async");

/**
 * notifikasi email setelah proses transfer : baik gagal atau berhasil
 */
function notifikasiEmail(dest,callback){
    console.log("sending mail to " + dest)
}

/**
 * menjalankan proses transfer
 */
function eksekusiTransfer(rekTujuan, nominalTransfer, rekSumber, callback){
    console.log("transfer uang ke " + rekTujuan)

    return "transfer.ok";
}

/**
 * fungsi update database setelah selesai transfer
 */
function updateDataTransfer(refferenceNo, statusTransfer, callback){
    console.log("update data transfer " + refferenceNo)

    
}
/**
 * digunakan bersamaan saat proses transfer dimulai
 */
function simpanDataTransfer(dataTransfer, callback){
    console.log("simpan data transfer " + dataTransfer)

        return "simpam=n.ok";
   
}


/**
 * eksekusi semua proses
 */
async.series([
    function(callback){
       var result = simpanDataTransfer("data.transfer", callback);
      callback(null, result);
    }, function(callback){
       var result = eksekusiTransfer("rek.tujuan", 1000000, "rek.sumber", callback);
       callback(null, result);
    }
],
function(err, result){
    if(err){
        console.log("error "+err)
    }else{
        console.log("sukes " + result)
    }
})