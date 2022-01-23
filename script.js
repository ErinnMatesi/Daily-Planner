var saveBtn = document.querySelector("saveBtn");
var hour = document.querySelector("hour");

var date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(date);

// this needs to become jquery so I can use addClass
if (date > hour) {
    $("hour").addClass("past")
} else if (date < hour) {
    $("hour").addClass("future")
} else {
    $("hour").addClass("present")
}




// will need to refresh the moment when we hit save
var save;

$("saveBtn").click(function(event) {
    event.preventDefault();
    // localStorage.setItem ("task", "???")
});
// which should I use?
// saveBtn.addEventListener("click", function(event) {
//     event.preventDefault();
//     // localStorage.setItem ("task", "???")
// });