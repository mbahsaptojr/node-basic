var async = require("async")

/**
 * notifikasi email setelah proses transfer : baik gagal atau berhasil
 */
function notifikasiEmail(dest, callback) {
    console.log("sending mail to " + dest)
}

/**
 * menjalankan proses transfer
 */
function eksekusiTransfer(rekTujuan, nominalTransfer, rekSumber, callback) {
    console.log("transfer uang ke " + rekTujuan)

    return "transfer ke " + rekTujuan + " berhasil";
}

/**
 * fungsi update database setelah selesai transfer
 */
function updateDataTransfer(refferenceNo, statusTransfer, callback) {
    console.log("update data transfer " + refferenceNo)


}
/**
 * digunakan bersamaan saat proses transfer dimulai
 */
function simpanDataTransfer(dataTransfer, callback) {
    console.log("simpan data transfer " + dataTransfer)

    return "simpam=n.ok";

}


/**
 * eksekusi semua proses
 */
async.waterfall([
        function (callback) {
            callback(null, "rekening.tujuan.001", "rekening.sumber.002", "10.000");
        },
        function (rekeningtujuan, rekeningsumber, nominal, callback) {
            var result = eksekusiTransfer(rekeningtujuan, nominal, rekeningsumber, callback)
            callback(null, result)
        },
        function (hasil, callback) {
            var ok = notifikasiEmail(hasil, callback)
            callback(null, ok);
        }
    ],
    function (err, result) {

        console.log("result " + result)

    })