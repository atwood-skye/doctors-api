var Doctor = require('./../js/doctor.js').doctorModule;




$(document).ready(function() {
  $('#findDoctors').click(function() {
    event.preventDefault();
    var medIssue = $('#issue').val();
    var doctor = new Doctor();
    doctor.getDoctors(medIssue);
  });
});
