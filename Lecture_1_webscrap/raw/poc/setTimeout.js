console.log("Before");

// setTimeout(function () {
//     console.log("Called after 5 sec");
// }, 5000);

let task = setInterval(function () {
    console.log("I will be called every 2 sec")
}, 2000);
console.log("After");

setTimeout(
    function () {
        clearInterval(task);
        
    },5000
    )