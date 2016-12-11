// active nav element

$(function () {
    $("#art").find(".nav-link-wrapper.art").addClass("active");
    $("#art").find(".art").find("path").removeClass("path");
    $("#art").find(".drpd-menu li").show();
    
    $("#statement").find(".nav-link-wrapper.statement").addClass("active");
    $("#statement").find(".statement").find("path").removeClass("path");
    $("#statement").find(".drpd-menu li").show();
 
    $("#blog").find(".nav-link-wrapper.blog").addClass("active");
    $("#blog").find(".blog").find("path").removeClass("path");
    $("#blog").find(".drpd-menu li").show();
 
    $("#bio").find(".nav-link-wrapper.bio").addClass("active");
    $("#bio").find(".bio").find("path").removeClass("path");
    $("#bio").find(".drpd-menu li").show();

    $("#contact").find(".nav-link-wrapper.contact").addClass("active");
    $("#contact").find(".contact").find("path").removeClass("path");
    $("#contact").find(".drpd-menu li").show();
  });
//small screen navbar slide menu

  var $toggleButton = $('.menu-button');
  $toggleButton.on('click', function() {
    $(this).toggleClass('button-open');
  });



//small nav menu button functionality


    var $toggleButton = $('.menu-button'),
        $menuWrap = $('.menu-wrap'),
        $menuButton = $('.navbar-sidebar-header-menu');

    $toggleButton.on('click', function() {
        $menuWrap.toggleClass('menu-show');
        if ($menuButton.hasClass("active")){
            $menuButton.removeClass("active");
        }else{
            $menuButton.addClass("active");
        };        
    });


$(document).on("scroll", function () {
    var $menuButton = $('.navbar-sidebar-header-menu');
    if($(document).scrollTop() > 10){
        $menuButton.addClass("scroll");
    }
    else{
        $menuButton.removeClass("scroll");
    }
});


// navbar svg click

$(".nav-button-icon").click(function () {
   $(".drpd-ul").toggle(); 
});

$(document).ready(markactive);
$(window).resize(markactive);

 function markactive() {
 var activeelement = $(".nav-sidebar").find(".active");
 if ( $("#brand-logo").css("display") == "none"){ 
 var h = activeelement.height();
 var pathHeight = activeelement.find("svg").height();
 var r = h/pathHeight ;
 activeelement.find("#hover-scribble").css("transform", "scale(" + r +","+ r + ")")
 activeelement.find("#hover-scribble").show();
 }else{
 var h = activeelement.width();
 var pathHeight = activeelement.find("svg").width();
 var r = h/pathHeight ;
 activeelement.find("#hover-scribble").css("transform", "scale(" + r +","+ r + ")")
 activeelement.find("#hover-scribble").show();
}
;
};    

// this scales the nav items a little

$(".navbar-sidebar-header").hover(function(){
    $(this).toggleClass("nav-transform");
});

$(".nav-link-wrapper").hover(function(){
    $(this).find("img").toggleClass("nav-transform");
})


// responsive navbar 
/*
$(document).ready(scribbleresize);
$(window).resize(scribbleresize);

function scribbleresize() {
        if ( $(".nav > li").css("float") == "left"){
        // resonsive animation on hover. This sets scribble to scale to width
        $(".nav-link-wrapper").hover(function(){
        if ($(this).hasClass("active"))
        {
        }
        else {
        var h = $(this).width();
        var pathwidth =$(this).find("svg").width();
        var r = h/pathwidth ;
        var length = $(this).find("path").get(0).getTotalLength();
        console.log(r);
        
        $(this).find("#hover-scribble").css("transform", "scale(" + r +","+ r + ")")
        $(this).find( "#hover-scribble").toggle();
        $(".path").css({ strokeDasharray: length,
        strokeDashoffset: length,
        animation: "dash .8s linear forwards"
        });
        }
        });
    }
    else {
        // resonsive animation on hover. This sets scribble to scale to height      
        $(".nav-link-wrapper").hover(function(){  
        if ($(this).hasClass("active"))
        {
        }
        else {
        var h = $(this).height();
        var pathHeight =$(this).find("svg").height();
        var r = h/pathHeight ;
        var plength = $(this).find("path").get(0).getTotalLength();
        console.log(r);
        console.log(plength);
        $(this).find("#hover-scribble").css("transform", "scale(" + r +","+ r + ")")
        $(this).find( "#hover-scribble").toggle();
        $(".path").css({ strokeDasharray: plength,
        strokeDashoffset: plength,
        animation: "dash .8s linear forwards"
        });
        }
        });
    }
};*/

//small navbar

// $(".test-menu").click(function() {
//     $(".test li").toggle();
// }
// );

/*carousel stuff*/

$(".closer").click(function () {
   $(".overlay").hide(); 
   $(".gallery").show();
   $(".item").removeClass("active");
   $(".image-car").removeClass("zoom");
   $(".info-shift").removeClass("info-shift-toggle");
});

$(".thumbnail-gal").click(function(){
    $(".overlay").show(0);
    $(".gallery").hide(0);
    $("#carousel-"+this.id).addClass("active");
    $("#list-"+this.id).addClass("active");
    divCarSize();
    var currentIndex = $(".item.active").index()+1;
    var totalItems = $(".item").length;
    $(".number").html(""+currentIndex+"/"+totalItems+"");
});

$(".carousel").carousel({
    interval: false
});

$(".back-arrow").on("click", function () {
    var currentIndex = $(".item.active").index()+1;
    var totalItems = $(".item").length;
    currentIndex = (currentIndex+totalItems-2)%totalItems+1 ;
    $(".number").html(""+currentIndex+"/"+totalItems+"");
    $(".image-car").removeClass("zoom");
});

$(".forward-arrow").on("click", function () {
    var currentIndex = $(".item.active").index()+1;
    var totalItems = $(".item").length;
    currentIndex = currentIndex%totalItems+1;
    $(".number").html(""+currentIndex+"/"+totalItems+"");
    $(".image-car").removeClass("zoom");
    $(".item.active").next();
});


$(".info").click(function(){
if ($(".image-car").hasClass("zoom")){
$(".info-shift").toggleClass("info-shift-toggle");
}else
{
$(".info-shift").toggleClass("info-shift-toggle");
}
});


// setting the sizes of all the carousel divs

function divCarSize() {
    $(".image-car").each(function(i){
    
    var image_url = $(this).css('background-image'),
    image;

// Remove url() or in case of Chrome url("")
image_url = image_url.match(/^url\("?(.+?)"?\)$/);

if (image_url[1]) {
    image_url = image_url[1];
    image = new Image();

    // just in case it is not already loaded
    $(image).load(function () {
        var h = image.height;
        var w = image.width;
        var ratio =  w / h;
        if (window.innerWidth >= window.innerHeight){
            var activeDivHeight =  window.innerHeight*.97;
            var activeDivWidth = activeDivHeight * ratio; 
            $("#pic-"+(i+1)).css({height : activeDivHeight+"px", width : activeDivWidth+"px"});
        }
        else{
            var activeDivWidth = window.innerWidth*.73; 
            var activeDivHeight =  activeDivWidth / ratio;
            $("#pic-"+(i+1)).css({height : activeDivHeight+"px", width : activeDivWidth+"px"});
        }
        });   
    image.src = image_url;
    };
    }
)
}


// here I detect weather i long or short click on an image

$(function() { 

    // how many milliseconds is a long press?
    var longpress = 200;
    // holds the start time
    var start;

    $( ".image-car" ).on( 'mousedown', function( e ) {
        start = new Date().getTime();
    } );

    $( ".image-car" ).on( 'mouseleave', function( e ) {
        start = 0;
    } );

    $( ".image-car" ).on( 'mouseup', function( e ) {
        if ( new Date().getTime() >= ( start + longpress )  ) {   
        } else {
          if ($(".info-shift").hasClass("info-shift-toggle")){
        $(".info-shift").removeClass("info-shift-toggle");
        $(".image-car").toggleClass("zoom");
        $(".closertop").toggleClass("closertop-shift").delay(1500).toggleClass("hidden-xs hidden-sm hidden-md hidden-lg");  
        $(".carousel-house").toggleClass("col-lg-11 col-md-11 col-sm-11").toggleClass("col-lg-12 col-md-12 col-sm-12").toggleClass("carousel-house-shift");
        $(".overlay").toggleClass("overlay-zoom");
        $(".zoom-closer").toggle();
        $(".item").toggleClass("item-marg");
        // $(".info-shift").addClass("info-shift-toggle");
        }else{
        $(".info-shift").removeClass("info-shift-toggle");
        $(".image-car").toggleClass("zoom");  
        $(".closertop").toggleClass("closertop-shift").delay(1500).toggleClass("hidden-xs hidden-sm hidden-md hidden-lg");  
        $(".carousel-house").toggleClass("col-lg-11 col-md-11 col-sm-11").toggleClass("col-lg-12 col-md-12 col-sm-12").toggleClass("carousel-house-shift");
        $(".overlay").toggleClass("overlay-zoom");
        $(".item").toggleClass("item-marg-shift");
        $(".zoom-closer").toggle();
        } 
        }
    } );

});

$(".zoom-closer").click(function(){
$(".image-car").removeClass("zoom");  
$(".closertop").removeClass("closertop-shift").delay(1500).removeClass("hidden-xs hidden-sm hidden-md hidden-lg");  
$(".carousel-house").removeClass("col-lg-12 col-md-12 col-sm-12").removeClass("carousel-house-shift").addClass("col-lg-11 col-md-11 col-sm-11");
$(".overlay").removeClass("overlay-zoom");
$(".item").removeClass("item-marg-shift");
$(".zoom-closer").toggle();
});


// rotating layers


if ($("#parallax-img-small").css("display")=="none"){
$(".navbar-sidebar-header").hover(function(){
$("#lay1").toggleClass("lay-active1");
$("#lay2").toggleClass("lay-active2");
$("#lay3").toggleClass("lay-active3");
$("#lay4").toggleClass("lay-active4");
$("#lay5").toggleClass("lay-active5");
$("#lay8").toggleClass("lay-active6");
$("#lay9").toggleClass("eye-animation");
}),
$(".social.facebook").hover(function(){
$("#lay9").toggleClass("lay-active7");
$("#lay8").toggleClass("lay-active6");
}),
$(".social.twitter").hover(function(){
$("#lay9").toggleClass("lay-active8");
$("#lay8").toggleClass("lay-active6");
}),
$(".social.instagram").hover(function(){
$("#lay9").toggleClass("lay-active9");
$("#lay8").toggleClass("lay-active6");
}),
$(".nav-link-wrapper.art").hover(function(){
$("#lay1").toggleClass("lay-active5");
}),
$(".nav-link-wrapper.statement").hover(function(){
$("#lay2").toggleClass("lay-active5");
}),
$(".nav-link-wrapper.bio").hover(function(){
$("#lay3").toggleClass("lay-active5");
}),
$(".nav-link-wrapper.blog").hover(function(){
$("#lay4").toggleClass("lay-active5");
}),
$(".nav-link-wrapper.contact").hover(function(){
$("#lay5").toggleClass("lay-active5");
})}
;


