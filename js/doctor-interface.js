var apiKey = require('./../.env').apiKey;
var doctors = [];

Doctor = function(name) {
  this.name = name;
};



$(document).ready(function() {
  $('#findDoctors').click(function() {
    event.preventDefault();
    var medIssue = $('#issue').val();
    $('#issue').val("");
    $('.showDoctors').text("You searched for help with" + medIssue + ".")
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medIssue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=' + apiKey).then(function(response) {
    console.log(response);
    var doctors = response.doctors;
    for (i = 0; i <= doctors.length; i++) {
      var name = doctors[i].name;
      $('.showDoctors').append("<li>" + response.name + "</li>")
    }
    });
  });
});
