function download() {
    setTimeout(function () {
        console.log("Download");
    }, 3000)
}

function verify() {
    setTimeout(function () {
        console.log("Verify...");
    }, 2000)
}

function notify() {
    setTimeout(function () {
        console.log("Complete...");
    }, 1000)
}

function main() {
    download();
    verify();
    notify();
}

main()