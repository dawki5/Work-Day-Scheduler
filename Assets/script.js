//Current Date
var currentDay = document.querySelector('#currentDay')
setInterval(function(){
    currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000)

// Reference Timeblocks
var hourBlocks = document.querySelector('.container')

//Save btn event listener
$(document).ready(function() {
    $('.saveBtn').on('click'); {
        var textField = $(this).siblings(".description").val();
        var timeField =  $(this).parent().attr("id");
    }
});

// Local Storage for hour blocks
localStorage.setItem('textField','timeField')

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

