//Current Date
var currentDay = document.querySelector('#currentDay')
setInterval(function(){
    currentDay.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000)

// Reference Timeblocks

var hourBlocks = document.querySelector('.container')