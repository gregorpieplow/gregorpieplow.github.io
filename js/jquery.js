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
        $(".whitebar-scroll").addClass("wh-scroll");
    }
    else{
        $menuButton.removeClass("scroll");
         $(".whitebar-scroll").removeClass("wh-scroll");
    }
});

// Navbar position

$(function(){
    if ($(".nav-size-ind").css("display")=="block"){
        $(".nav-sidebar").css("position","relative");
    }else{
     if ($("body").is("#art")){
     if ($(window).innerHeight() <= 645){
        $(".nav-sidebar").css("position","relative");
    }else{
         $(".nav-sidebar").css("position","fixed");
    };
    };
    };
});

$(function() {
if ($("body").is("#art")) {
$(window).resize(function() {
    if ($(".nav-size-ind").css("display")=="block"){
        $(".nav-sidebar").css("position","relative");    
    }else if ($(".nav-size-ind").css("display")=="none"){
    if ($(window).innerHeight() <= 645){
        $(".nav-sidebar").css("position","relative");
    }else{
         $(".nav-sidebar").css("position","fixed");
    };
    };
});
};
}
);

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

//loading images


/*carousel stuff*/



$(".thumbnail-gal").click(function(){
    $(".overlay").show(0);
    $(".overlay-wrapper").show(0);
    $(".gallery").hide(0);
    $("footer").hide(0);
    if ($(".nav-size-ind-2").css("display") == "none"){
       $("#small-nav").hide();
   }else if ($(".nav-size-ind-2").css("display") == "block"){
       $(".nav-sidebar").hide();
   };
    $("#car-"+this.id).addClass("active");
    $("#car-info-"+this.id).addClass("active-info");
    divCarSize();
    var currentIndex = $(".item.active").index()+1;
    var totalItems = $(".item").length;
    $(".number").html(""+currentIndex+"/"+totalItems+"");
    $(".loading").show();
});

$(".carousel").carousel({
    interval: false
});

$(".back-arrow").on("click", function () {
    var totalItems = $(".info-box").length;
    if ($(".top-nav-car").css("display") === "none"){
                    var shift = 70;
                }
                else{
                    var shift = 0;
                };
    $(".info-box").each(function(i){
        if ($("#car-info-item-"+(i+1)).hasClass("active-info")){
         if ($("#car-info-item-"+(i+1)).hasClass("active-info") && i == 0){
             if ($("#car-info-item-"+(i+1)).hasClass("activated")){
                    $('#car-item-'+totalItems).css('left', shift+'px');
                    $('#car-item-'+ 1).css('left', '0px');
                    $("#car-info-item-"+totalItems).addClass("active-info").addClass("activated");
                    $("#car-info-item-"+(i+1)).removeClass("active-info").removeClass("activated");
                    $(".info-box").css("transition","none");
                }else{
             $("#car-info-item-"+totalItems).addClass("active-info");
             $("#car-info-item-"+(i+1)).removeClass("active-info");
             $(".info-box").css("transition","none");}
             return false;
         }else{
              if ($("#car-info-item-"+(i+1)).hasClass("activated")){
                  $('#car-item-'+i).css('left', shift+'px');
                  $('#car-item-'+(i+1)).css('left', '0px');
                  $("#car-info-item-"+i).addClass("active-info").addClass("activated");
                  $("#car-info-item-"+(i+1)).removeClass("active-info").removeClass("activated");
                   $(".info-box").css("transition","none");
              }else{
             $("#car-info-item-"+i).addClass("active-info");
             $("#car-info-item-"+(i+1)).removeClass("active-info");
              $(".info-box").css("transition","none");
            }
             return false;
         }  
        }else{};
    });
});

$(".forward-arrow").on("click", function () {
   if ($(".top-nav-car").css("display") === "none"){
                    var shift = 70;
                }
                else{
                    var shift = 0;
                };
   var totalItems = $(".info-box").length;
   $(".info-box").each(function(i){
   if ($("#car-info-item-"+(i+1)).hasClass("active-info")){
         if ($("#car-info-item-"+(i+1)).hasClass("active-info") && (i+1) == totalItems){
             if ($("#car-info-item-"+(i+1)).hasClass("activated")){
                $('#car-item-'+1).css('left', shift+'px');
                $('#car-item-'+(i+1)).css('left', '0px');
                $("#car-info-item-"+1).addClass("active-info").addClass("activated");
                $("#car-info-item-"+(i+1)).removeClass("active-info").removeClass("activated");
                $(".info-box").css("transition","none");
            }else{
                $("#car-info-item-"+1).addClass("active-info");
                $("#car-info-item-"+(i+1)).removeClass("active-info");
                $(".info-box").css("transition","none");
            }
             return false;
         }else{
              if ($("#car-info-item-"+(i+1)).hasClass("activated")){
                $('#car-item-'+(i+2)).css('left', shift+'px');
                $('#car-item-'+(i+1)).css('left', '0px');
                $("#car-info-item-"+(i+2)).addClass("active-info").addClass("activated");
                $("#car-info-item-"+(i+1)).removeClass("active-info").removeClass("activated");
                 $(".info-box").css("transition","none");
            }else{
                $("#car-info-item-"+(i+2)).addClass("active-info");
                $("#car-info-item-"+(i+1)).removeClass("active-info");
                $(".info-box").css("transition","none");
            }
             return false;
         }  
        }else{};
   });
});

var clicks = false;

$(".info").click(function(){
if ($(".top-nav-car").css("display") === "none"){
                    var itemActiveShift = 70;
                }
                else{
                    var itemActiveShift = 0;
                };
            var clicks = $(this).data('clicks');
           
            if (clicks) { 
                $(".info-box").css("transition","all .25s");
                $(".info-box.active-info").removeClass("activated"); 
                $(".item.active").animate({"left" :  "-=" + itemActiveShift +"px"} , {duration: 250, speacialEasing: {"left" :"easeInEaseOut"}});
            }
            else { 
                $(".info-box").css("transition","all .25s");
                $(".info-box.active-info").addClass("activated"); 
                $(".item.active").animate({"left" : itemActiveShift + "px"} , {duration: 250, queue: false});
            }
            $(this).data("clicks", !clicks);
});

$(".closer").click(function () {
    if ($(".info-box").hasClass("activated")){
        var clicks = $(".info").data('clicks');
        $(".item.active").css("left","0px");
        $(".info").data("clicks", !clicks);
    }else{};
   $(".overlay").hide(); 
   $(".overlay-wrapper").hide();
   $(".gallery").show();
   if ($(".nav-size-ind-2").css("display") == "block"){
       $(".nav-sidebar").show();
   }else if($(".nav-size-ind-2").css("display") == "none"){
       $("#small-nav").show();
   };
   $("footer").show();
   $(".item").removeClass("active");
   $(".image-car").removeClass("zoom");
   $(".info-box").removeClass("active-info");
   $(".info-box").removeClass("activated");
   $(".loading").hide();
});

$(window).resize(function() {
    if ($(".nav-size-ind-2").css("display") == "block"){
       $(".nav-sidebar").show();
       $("#small-nav").hide();
   }else if($(".nav-size-ind-2").css("display") == "none"){
       $("#small-nav").show();
       $(".nav-sidebar").hide();
   };
});


// setting the sizes of all the carousel divs

function divCarSize() {
    $(".item").each(function(i){
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
    if ( $(".s-indicator").css("display") === "none" ){
            var activeDivHeight =  window.innerHeight;
            var activeDivWidth = activeDivHeight * ratio; 
            if (activeDivWidth+300 >= window.innerWidth){
                $("#car-item-"+(i+1)).css({height : (window.innerWidth * .86-210)/ratio+"px", 
                width : window.innerWidth * .86-210+"px", top : "50%", transform: "translateY(-50%)", transition: "none"});    
            }else{
            $("#car-item-"+(i+1)).css({height : activeDivHeight+"px", width : activeDivWidth+"px"});
        };
        }
        else{
            var activeDivWidth = window.innerWidth*.99; 
            var activeDivHeight =  activeDivWidth / ratio;
            $("#car-item-"+(i+1)).css({height : activeDivHeight+"px", width : activeDivWidth+"px"});
        }
        });   
    image.src = image_url;
    };
    }
)
};

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

$(".thumbnail-gal").click(function(){
$('.item.active').waitForImages(true).done(function() {
    $(".loading").hide();
    //$(".carousel-inner").addClass("load-ready");
});
});


// new overhauled overlay carousel

// here I detect weather i long or short click on an image

$(function() { 

    // how many milliseconds is a long press?
    var longpress = 200;
    // holds the start time
    var start;

    $( ".item" ).on( 'mousedown', function( e ) {
        start = new Date().getTime();
    } );

    $( ".item" ).on( 'mouseleave', function( e ) {
        start = 0;
    } );

    $( ".item" ).on( 'mouseup', function( e ) {
        if ( new Date().getTime() >= ( start + longpress )  ) {   
        } else {
            var clicks2 = $(this).data('clicks');
            var thisDivHeight = $(this).height();
            var thisDivWidth =  $(this).width();
            var ratio = thisDivHeight / thisDivWidth;
            if (clicks2) { 
            $('.zoom-closer').hide();
            $('.overlay-wrapper').removeClass('overlay-toggle');  
            $('.item.active').removeClass('zoom-item');
            if ($(".s-indicator").css("display")==="none"){
                $('.item.active').animate({"height" : thisDivHeight / 2.7 + "px"} , {duration: 100, queue: false});
                $('.item.active').animate({"width" : thisDivHeight / 2.7 /ratio + "px"} , {duration: 100, queue: false});
                $(".back-car").show();
                $(".forward-car").show();
            }else{
                $('.item.active').animate({"height" : thisDivHeight / 3 + "px"} , {duration: 100, queue: false});
                $('.item.active').animate({"width" : thisDivHeight / 3 /ratio + "px"} , {duration: 100, queue: false});
                $(".top-nav-car").css("display","inline-block");
            };
            }
            else { 
            $('.zoom-closer').show();
            // if display is big overlay toggle
            if ($(".s-indicator").css("display") ==="none"){
                $('.overlay-wrapper').addClass('overlay-toggle');  
                $('.item.active').animate({"height" : thisDivHeight * 2.7 + "px"} , {duration: 100, queue: false});
                $('.item.active').animate({"width" : thisDivHeight * 2.7 /ratio + "px"} , {duration: 100, queue: false});
            }else{
                $('.item.active').animate({"height" : thisDivHeight * 3 + "px"} , {duration: 100, queue: false});
                $('.item.active').animate({"width" : thisDivHeight * 3 /ratio + "px"} , {duration: 100, queue: false});
            };
            $('.item.active').addClass('zoom-item');
            if ($(".info-box").hasClass("activated")){
                var clicks = $(".info").data('clicks');
                $(".item.active").css("left","0px");
                $(".info").data("clicks", !clicks);
            }else{};
           
            $(".back-car").hide();
            $(".forward-car").hide();
            $(".info-box").removeClass("activated");
            $(".top-nav-car").css("display","none");
            };
            $(this).data("clicks", !clicks2);
        }
    } );

});

$(".zoom-closer").click(function(){
            var clicks2 = $(".item.active.zoom-item").data('clicks');
            $(".item.active.zoom-item").data("clicks", !clicks2);
            var thisDivHeight = $(".item.active").height();
            var thisDivWidth =  $(".item.active").width();
            var ratio = thisDivHeight / thisDivWidth;
            $('.zoom-closer').hide();
            $('.overlay-wrapper').removeClass('overlay-toggle');  
            $('.item.active').removeClass('zoom-item');
            $('.item.active').animate({"height" : thisDivHeight / 3 + "px"} , {duration: 100, queue: false});
            $('.item.active').animate({"width" : thisDivHeight / 3 /ratio + "px"} , {duration: 100, queue: false});
            if ($(".s-indicator").css("display") ==="none"){
                $(".back-car").show();
                $(".forward-car").show();
            }else{
                $(".top-nav-car").show();
            };
});