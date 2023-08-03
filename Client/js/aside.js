const aside = $("aside");

$("#menuIcon").on("click", showMenu);

// Check Select Link
$(".aside-links a").on("click", function (e) {
   selectArea(e.target.innerHTML);
   $(".aside-links a").removeClass("active");
   $(this).addClass("active");
});
function showMenu() {
    if (aside.css("left") == "-240px") {
       $("#menuIcon").removeClass("fa-bars").addClass("fa-close");
 
       $("aside").animate({
          left: 0,
       });
 
       $(".aside-links li").animate(
          {
             paddingTop: 25,
          },
          1000
       );
    } else {
       $("#menuIcon").removeClass("fa-close").addClass("fa-bars");
       $("aside").animate({
          left: -240,
       });
 
       $(".aside-links li").animate(
          {
             paddingTop: 500,
          },
          1000
       );
    }
 }