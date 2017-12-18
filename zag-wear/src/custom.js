$(function () {
  console.log("dfdf");
});

$(function(){

  $( "#adaptive_menu" ).click(function() {
    var x = document.getElementById("nav_menu");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  });

});

$(function(){
  if($('div').hasClass('new_collection')){
    $('.owl-carousel').owlCarousel({
      loop:true,
      margin:10,
      responsiveClass:true,
      autoplay:true,
      responsive:{
        0:{
          items:1,
          center: true,
          nav: false
        },
        450:{
          items:2,
          nav:false
        },
        656:{
          items:3,
          center:true,
          nav:false
        }
      }
    })
  }
});

