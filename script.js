var saveBtn = document.querySelector(".saveBtn");
var $hour = $(".hour");
// does this work or do I need to target them individually?


var date = moment().format("dddd, MMMM Do YYYY, HH:mm");
$("#currentDay").text(date);
var currentTime = moment().format("HH");
console.log(typeof +currentTime);
console.log(typeof currentTime);
// this is not working as intended
if (currentTime > $hour.text()) {
    $hour.addClass("past")
} else if (currentTime < $hour) {
    $hour.addClass("future")
} else {
    $hour.addClass("present")
};


function renderTasks() {
    for (var i = 8; i < 18; i++) {
        var findRow = "row" + i;
        $("#" + findRow).children("textarea").val(localStorage.getItem(findRow));
    };
};

renderTasks();

$(".saveBtn").click(function(event) {
    event.preventDefault();
    var text = $(this).siblings("textarea").val();
    var rowNumber = $(this).parent().attr("id");
    localStorage.setItem(rowNumber, text);
    // localStorage need to grab the textarea content but keep it assigned to it's appropriate row - does it need to be attached to a specific hour? Does each hour column need an id to go with the matching text area?
    // localStorage.setItem ("task", "textarea.value")
});
// should I use vanilla js??
// saveBtn.addEventListener("click", function(event) {
//     event.preventDefault();
//     // localStorage.setItem ("task", "???")
// });

// How do I then localStorage.getItem and place it in the appropriate row and column?