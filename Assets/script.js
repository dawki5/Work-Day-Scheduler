//Current Date
var currentDay = document.querySelector('#currentDay');
setInterval(function () {
    currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000)

// Adds functionality to the save button 
$('.saveBtn').on('click', function (event) {
    event.preventDefault();

    var inputField = $(this).siblings('.input').val();
    var inputTime = $(this).parent().attr('id');

    localStorage.setItem(inputTime, inputField);
});

// Gets items from local storage
$('#8am .input').val(localStorage.getItem('8am'));
$('#9am .input').val(localStorage.getItem('9am'));
$('#10am .input').val(localStorage.getItem('10am'));
$('#11am .input').val(localStorage.getItem('11am'));
$('#12pm .input').val(localStorage.getItem('12pm'));
$('#1pm .input').val(localStorage.getItem('1pm'));
$('#2pm .input').val(localStorage.getItem('2pm'));
$('#3pm .input').val(localStorage.getItem('3pm'));
$('#4pm .input').val(localStorage.getItem('4pm'));
$('#5pm .input').val(localStorage.getItem('5pm'));

// Updates the .descrption boxes with provided css styling

function updateColor() {

    var timeNow = moment().format('HH');


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

// Runs the function above
updateColor();
