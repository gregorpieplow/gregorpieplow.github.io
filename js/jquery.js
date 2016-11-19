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

$(document).ready(function() {
  var $toggleButton = $('.menu-button');
  $toggleButton.on('click', function() {
    $(this).toggleClass('button-open');
  });
});


//small nav menu button functionality

$(document).ready(function() {
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

$(document).ready(
$(".nav-link-wrapper").hover(function(){
    $(this).find("img").toggleClass("nav-transform");
})
);

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

$(".test-menu").click(function() {
    $(".test li").toggle();
}
);

/*carousel stuff*/

$(".closer").click(function () {
   $(".overlay").hide(); 
   $(".gallery").show();
   $(".item").removeClass("active");
});

$(".thumbnail").click(function(){
    $(".overlay").show(0);
    $(".gallery").hide(0);
    $("#carousel-"+this.id).addClass("active");
    $("#list-"+this.id).addClass("active");
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
    currentIndex = (currentIndex+7)%9+1 ;
    $(".number").html(""+currentIndex+"/"+totalItems+"");
});

$(".forward-arrow").on("click", function () {
    var currentIndex = $(".item.active").index()+1;
    var totalItems = $(".item").length;
    currentIndex = currentIndex%9+1;
    $(".number").html(""+currentIndex+"/"+totalItems+"");
});

// rotating layers

$(document).ready(function(){
    if ($("#parallax-img-small").css("display")=="none"){
$(".navbar-sidebar-header").hover(function(){
$("#lay1").toggleClass("lay-active1");
$("#lay2").toggleClass("lay-active2");
$("#lay3").toggleClass("lay-active3");
$("#lay4").toggleClass("lay-active4");
$("#lay5").toggleClass("lay-active5");
$("#lay8").toggleClass("lay-active6");
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
else{
};}
);


