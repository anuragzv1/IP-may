// const { head } = require("request");
let fs = require("fs");
let request = require("request");
let url = "https://www.espncricinfo.com/series/_/id/8048/season/2019/indian-premier-league";
request(url, cb);
console.log("Before");
function cb(err, header, body) {
    if (err == null && header.statusCode == 200) {
        console.log("Recieved resp");
        console.log(body);
        fs.writeFileSync("file.html",body);
    } else if (header.statusCode == 404) {
        console.log("404 wrong url");
    } else {
        console.log(err);
        console.log(header.statusCode);
    }
}
console.log("After");