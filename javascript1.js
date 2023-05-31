
document.addEventListener('DOMContentLoaded', function () {
    var container = document.querySelector('.container');
    var calendarContainer = document.querySelector('#calendar');
    var timeslotsContainer = document.getElementById('timeslots');
    var calendar = flatpickr(calendarContainer, {
      inline: true,
      dateFormat: "Y-m-d",
      minDate: "today",
      theme: "light-blue", // Set the theme to "light-blue"
      onChange: function (selectedDates, dateStr) {
        generateTimeSlots();
        container.style.maxWidth = "1000px"; // Increase container width
      }
    });

    // Rest of the code...



    function generateTimeSlots() {
      // Clear existing time slots
      timeslotsContainer.innerHTML = '';

      // Start time and end time in hours
      var startTime = 13; // 1:00 PM
      var endTime = 20; // 8:00 PM

      // Generate time slot elements
      for (var hour = startTime; hour <= endTime; hour++) {
        for (var minute = 0; minute <= 59; minute++) {
          var timeString = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
          var timeslot = document.createElement('div');
          timeslot.className = 'timeslot';
          timeslot.textContent = timeString;

          // Add click event listener to each timeslot
          timeslot.addEventListener('click', function () {
            // Check if the timeslot already has a button
            if (this.querySelector('button') === null) {
              // Remove existing buttons from other timeslots
              var buttons = timeslotsContainer.querySelectorAll('button');
              buttons.forEach(function (button) {
                button.parentNode.removeChild(button);
              });

              // Create a button element
              var button = document.createElement('button');
              button.className = 'btn btn-primary';
              button.textContent = 'Book';
              button.addEventListener('click', function () {
                window.location.href = 'booking3.html';
              });
              // Append the button to the clicked timeslot
              this.appendChild(button);
            }
          });

          timeslotsContainer.appendChild(timeslot);
        }
      }
    }
  });
