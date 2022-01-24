var saveBtn = document.querySelector("saveBtn");
var $hour = $("hour");

var date = moment().format("dddd, MMMM Do YYYY, HH:mm");
$("#currentDay").text(date);
var currentTime = moment().format("HH");

// this is not working as intended
if (currentTime > $hour) {
    $hour.addClass("past")
} else if (date < $hour) {
    $hour.addClass("future")
} else {
    $hour.addClass("present")
};




// will need to refresh the moment when we hit save
var save;

$("saveBtn").click(function(event) {
    event.preventDefault();
    // localStorage need to grab the textarea content but keep it assigned to it's appropriate row - does it need to be attached to a specific hour? Does each hour column need an id to go with the matching text area?
    // localStorage.setItem ("task", "textarea.value")
});
// should I use vanilla js??
// saveBtn.addEventListener("click", function(event) {
//     event.preventDefault();
//     // localStorage.setItem ("task", "???")
// });

// How do I then localStorage.getItem and place it in the appropriate row and column?