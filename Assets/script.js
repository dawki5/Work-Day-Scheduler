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
$('#Time08am .input').val(localStorage.getItem('Time08am'));
$('#Time09am .input').val(localStorage.getItem('Time09am'));
$('#Time10am .input').val(localStorage.getItem('Time10am'));
$('#Time11am .input').val(localStorage.getItem('Time11am'));
$('#Time12pm .input').val(localStorage.getItem('Time12pm'));
$('#Time13pm .input').val(localStorage.getItem('Time13pm'));
$('#Time14pm .input').val(localStorage.getItem('Time14pm'));
$('#Time15pm .input').val(localStorage.getItem('Time15pm'));
$('#Time16pm .input').val(localStorage.getItem('Time16pm'));
$('#Time17pm .input').val(localStorage.getItem('Time17pm'));

// Updates the .descrption boxes with provided css styling

function updateColor() {

    var currentTime = moment().format('HH');


    $('.time-block').each(function () {

        var scheduleTime = $(this).attr("id").split("Time")[1];
        //["8", "9", "10 ", "11", "12", "1", "2", "3", "4", "5",]

        if (currentTime === scheduleTime) {
            $(this).addClass("present");
          } else if (currentTime < scheduleTime) {
            $(this).removeClass("present");
            $(this).addClass("future");
          } else if (currentTime > scheduleTime) {
            $(this).removeClass("future");
            $(this).addClass("past");
          }
        })
}

// Runs the function above
updateColor();


// saved info btn
// Shows a message but doesnt return it for mutiple uses
//$(document).ready(function(){
  //  $(".saveBtn").click(function(){
  //      $('#saved').html('Entry Saved!');
    //});
 // });

 // var fade_out = function() {
  //  $("#saved").fadeOut();
  //}
  
  //setTimeout(fade_out, 5000); 

// Returns saved entry text for multiple uses
  $(".saveBtn").click(function(){
  $('#saved').empty().show().html('Entry Saved!').delay(3000).fadeOut(300);
  });