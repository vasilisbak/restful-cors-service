$(document).ready(function() {

$("#pingbtn").click(function(){
    $.ajax({
        type: 'GET',
        url: "http://localhost:8080/ping?name=uo"
    }).success(function(data, status, jqXHR) {
      if(jqXHR.getResponseHeader('Access-Control-Allow-Origin') == null){
       $('.response').append('<br>No Cors<br>');
       }
       else {
        $('.response').append('<br>This is Cors<br>');
       }
      $('.response').append('Access-Control-Allow-Origin header:'+ jqXHR.getResponseHeader('Access-Control-Allow-Origin'));
    });
  });


});