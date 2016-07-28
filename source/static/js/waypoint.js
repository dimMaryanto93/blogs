$(document).ready(function(){
  $('#back-to-top').hide();
  var waypoint = new Waypoint({
    element: document.getElementById('content'),
    handler: function(direction) {
      if (direction <= 'down') {
        $('#back-to-top').show();
      }else {
        $('#back-to-top').hide();
      }
    },
    offset: 50
  })
});
