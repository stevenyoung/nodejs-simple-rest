$(document).ready(function() {
  $('#letter-a a').on('click', function() {
    event.preventDefault();
    $('#dictionary').load('a.html');
    console.log('loaded');
  })

  $('#letter-b a').on('click', function() {
    event.preventDefault();
    $.getJSON('/words/b', function(data) {
      console.log('data', data);
    })
  })


})