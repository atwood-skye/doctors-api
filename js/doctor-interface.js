var Doctor = require('./../js/doctor.js').doctorModule;




$(document).ready(function() {
  $('#findDoctors').click(function() {
    event.preventDefault();
    $(".view").show();
    var medIssue = $('#issue').val();
    var doctor = new Doctor();
    doctor.getDoctors(medIssue);
  });
});
