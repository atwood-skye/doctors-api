var apiKey = require('./../.env').apiKey;

Doctor = function() {
}


Doctor.prototype.getDoctors = function(medIssue, displayFunction) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(response); {
    displayFunction(medIssue, response.data.profile.first_name);
    }).fail(function(error) {
      $('.showDoctors').text(error.responseJSON.message);
  });
}

exports.doctorModule = Doctor;
