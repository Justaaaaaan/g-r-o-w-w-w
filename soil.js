$(window).resize(function() {
  
    $("#pixels").html("");
    
    var grid = 50, //anything over a couple hundred will probably kill it
      windowWidth = $(window).width(),
      windowHeight = $(window).height(),
      pW = windowWidth/grid,
      pH = pW,
      rows = parseInt(windowHeight/pH);
    
    var r = 0;
    
    while (r < rows) {
      var p = 0;
      while (p < grid) {
        var tenth = p/grid;
        if (p < grid/10) {
          var randomNumber = (Math.random() * tenth);
        } else {
          var randomNumber = (Math.random() * tenth) + (tenth - .1);
        }
        
        var opacity = randomNumber.toFixed(2);
        $("#pixels").append("<div style='opacity: "+opacity+"; height: "+pH+"px; width: "+pW+"px' class='pixel'></div>");
        p++;
      }
      r++;
    }
  }).resize();