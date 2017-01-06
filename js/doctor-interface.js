var Doctor = require('./../js/doctor.js').doctorModule;


var docRecs = function(medIssue, docName) {
  $('.showDoctors').append("<li>" + docName + "</li>");
}


$(document).ready(function) {
  var docFinal = new Doctor();
  $('#findDoctors').click(function() {
    var medIssue = $('#issue').val();
    $('#issue').val("");
    docFinal.getDoctors(medIssue, docRecs);
  });
});
