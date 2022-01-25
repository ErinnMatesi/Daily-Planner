var saveBtn = document.querySelector(".saveBtn");
var $hour = $(".hour");

var date = moment().format("dddd, MMMM Do YYYY, HH:mm");
$("#currentDay").text(date);

// parse hour into a number so we can use it in the checkTime function
var currentTime = parseInt(moment().format("HH"));

// loops through hours 8-17 to compare it against the current time and change the color of the text area accordingly
function checkTime() {
    for (var i = 8; i < 18; i++) {
        var findRow = "row" + i;
        if (currentTime > i) {
            $("#" + findRow).children("textarea").addClass("past")
        } else if (currentTime < i) {
           $("#" + findRow).children("textarea").addClass("future")
        } else {
            $("#" + findRow).children("textarea").addClass("present")
        };
    };
};

checkTime();

// loads the saved tasks when the page is refreshed
function renderTasks() {
    for (var i = 8; i < 18; i++) {
        var findRow = "row" + i;
        $("#" + findRow).children("textarea").val(localStorage.getItem(findRow));
    };
};

renderTasks();

// uses "this" to refer to the button that was clicked and reference its row, that row number is then added to to the local storage key (rowNumber) so it can be pulled on page refresh.
$(".saveBtn").click(function(event) {
    event.preventDefault();
    var text = $(this).siblings("textarea").val();
    var rowNumber = $(this).parent().attr("id");
    localStorage.setItem(rowNumber, text);
});