const $ = require("jquery");
// when the whole page is loaded
$(document).ready(function () {

    // console.log("Inside excel");
    // alert("inside excel");
    $(".grid .cell").on("click", function () {
        // element on which click event has occurred
        let ci = $(this).attr("ci")
        let ri = $(this).attr("ri")
        // console.log(text);
        //    console.log(row+" "+col);
        let row = Number(ri) + 1;
        let col = String.fromCharCode((Number(ci) + 65));
        let cellAddress = col + "" + row
        $("#address").val(cellAddress);
    })
})