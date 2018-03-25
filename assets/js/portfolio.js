$(document).ready(function() { 
  var triItem = $(".tri ul li"),  
    portfolioItem = $(".tri-portfolio .tri-item"); 

  triItem.click(function() { 
    var toSortId = $(this).attr("id"); 
    $(".active").removeClass("active");
    $(this).addClass("active");

    if(toSortId == "design") {
      $(".design").show();
      $(".code").hide();
      console.log("design if");
    }
    if(toSortId == "code") {
      $(".code").show();
      $(".design").hide();
      console.log("code if");
    }
    if(toSortId == "all") {
      portfolioItem.each(function() {
        $(this).show();
        console.log("all if");
      });
    } else {
      portfolioItem.each(function() { 
        if($(this).hasClass(toSortId)) { 
          $(this).show(); 
        } else { 
          $(this).hide(); 
        }
      });
    }
  });
});