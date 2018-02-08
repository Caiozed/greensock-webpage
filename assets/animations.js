var textAnim = new TimelineMax({paused: true});
textAnim.staggerFrom($(".staggerText"), 1.5, {rotationX: "+=360deg", rotationZ: "-=90deg", bottom: "700px", ease:Back.easeInOut}, 0.5)

var titleAnim = new TimelineMax({paused: true});
titleAnim.from($(".title"), 1, {rotationZ: "-=90deg", top: "-100px", transformOrigin: "left center", ease:Bounce.easeOut})

var body = new TimelineMax({paused: true});
body.from($("body"), 1, {top: "-700px", ease:Bounce.easeOut})


$(document).ready(function(){
    textAnim.play();
    titleAnim.play();
    body.play();
    $(".play").on("click", function(){
       textAnim.play();
       titleAnim.play();
       body.play();
    });
    
     $(".reverse").on("click", function(){
       textAnim.reverse();
       titleAnim.reverse();
    });
    
    $(".restart").on("click", function(){
       textAnim.restart();
       titleAnim.restart();
       body.restart();
    });
})