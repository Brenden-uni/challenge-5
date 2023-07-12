$(function () {
  // Add listener for click events on the save button
  $('.saveBtn').click(function () {
    var timeBlockId = $(this).closest('.time-block').attr('id');
    var userInput = $(this).siblings('.description').val();
    var key = timeBlockId.replace('hour-', ''); // Remove the "hour-" prefix
    localStorage.setItem(key, userInput);
  });

  // Apply past, present, or future class to each time block
  var currentHour = dayjs().format('H');
  $('.time-block').each(function () {
    var timeBlockId = parseInt($(this).attr('id').split('-')[1]);

    if (timeBlockId < currentHour) {
      $(this).addClass('past');
    } else if (timeBlockId === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  // Get user input from local storage and set textarea values
  $('.time-block').each(function () {
    var timeBlockId = $(this).attr('id');
    var key = timeBlockId.replace('hour-', ''); // Remove the "hour-" prefix
    var savedInput = localStorage.getItem(key);

    if (savedInput) {
      $(this).find('.description').val(savedInput);
    }
  });

  // Display the current date in the header
  var currentDate = dayjs().format('MMMM D, YYYY');
  $('#currentDay').text(currentDate);
});
