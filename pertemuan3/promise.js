function download() {
    return new Promise(function (resolve, reject){
        setTimeout(function () {
            resolve("Download");
        }, 3000);
    });
}

function verify() {
    return new Promise(function (resolve, reject){
        setTimeout(function () {
            resolve("Verify");
        }, 2000);
    });
}

function notify() {
    console.log("Selesai");
}

function main() {
    download().then(function(result) {
        console.log(result);
        return verify();
    })
    .then(function(result) {
        console.log(result);
        return notify();
    })
}

main()