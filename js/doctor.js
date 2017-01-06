var apiKey = require('./../.env').apiKey;

function Doctor(medIssue) {
  this.issue = medIssue;
}


Doctor.prototype.getDoctors = function(medIssue) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query='+ medIssue +'&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey)
  .then(function(response)      {

    var doctors = response.data;

    doctors.forEach(function(doctor){
      var docName = doctor.profile.first_name + " " + doctor.profile.last_name;
      var docBio = doctor.profile.bio;

    $('.showDoctors').append("<h4>" + docName + "</h4>" + "<br>" + docBio);
});
//.fail(function(error) {
      //$('.showDoctors').text(error.responseJSON.message);
    //});
  });
};



exports.doctorModule = Doctor;
