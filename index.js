// rewritting CSS
$("button").css("background-color", "pink")

// adding CSS class
$("button").addClass("btn");

// rewritting attribute
$("a").attr("href", "https://www.youtube.com/");

// adding eventListener
$("h1").click(function () { 
    $("h1").css("color", "purple");
    
});

// changing text of h1
$(document).keypress(function (e) { 
    console.log(e.key)
    $("h1").html(e.key)
});

// .hide(); .fadeOut(); .slideUp();
// .show(); .fadeIn(); .slideDown();
// .toggle(); .fadeToggle(); .slideToggle(); --> combaining hide/show

//  .animate({
//      opacity: 0.5,
//      margin: "20%"   //we can use numbers OR percents but in string
//  })

// // adding something into (forexample) div
// before();    //before div
// after();     //after div
// prepend();   //inside div start (before content)
// append();    //inside div end (after content)