//Current Date
var currentDay = document.querySelector('#currentDay');
setInterval(function () {
    currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000)


$('.saveBtn').on('click', function (event) {
    event.preventDefault();

    var inputField = $(this).siblings('.description').val();
    var inputTime = $(this).parent().attr('id');

    localStorage.setItem(inputTime, inputField);
});

// Gets items from local storage
$('#hour8 .description').val(localStorage.getItem('hour8'));
$('#hour9 .description').val(localStorage.getItem('hour9'));
$('#hour10 .description').val(localStorage.getItem('hour10'));
$('#hour11 .description').val(localStorage.getItem('hour11'));
$('#hour12 .description').val(localStorage.getItem('hour12'));
$('#hour13 .description').val(localStorage.getItem('hour13'));
$('#hour14 .description').val(localStorage.getItem('hour14'));
$('#hour15 .description').val(localStorage.getItem('hour15'));
$('#hour16 .description').val(localStorage.getItem('hour16'));
$('#hour17 .description').val(localStorage.getItem('hour17'));


function updateColor() {

    var timeNow = moment().format('h');


    $('.time-block').each(function () {

        var scheduleTime = $(this).attr("id").split("hour")[1];
        //["8", "9", "10 ", "11", "12", "1", "2", "3", "4", "5",]

        if (timeNow === scheduleTime) {
            $(this).addClass("present");
        } else if (timeNow < scheduleTime) {
            $(this).removeClass("present");
            $(this).addClass("future");
        } else if (timeNow > scheduleTime) {
            $(this).removeClass("future");
            $(this).addClass("past");
        }
    });
}


updateColor();

