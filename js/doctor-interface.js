var Doctor = require('./../js/doctor.js').doctorModule;

function docRecs(result) {
  $(.showDoctors).append("<li>" + result.profile + "</li>");
}

$(function() {
  $('#findDoctors').click(function() {
    event.preventDefault();
    var medIssue = $('#issue').val();
    $('#issue').val("");
    var docFinal = new Doctor();
    docFinal.getDoctors(medIssue, docRecs);
  });
});
