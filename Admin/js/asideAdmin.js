$(".open-close")[0].addEventListener("click", Nav)
function Nav() {
    if ($("nav").css("left") != "-250px") {
        closeNav()
    }
    else {
        $("nav").animate({ "left": "0px" }, 500)
        $(".navBtn").animate({ "left": "250px" }, 500)
        $("aside ul li").animate({ "opacity": "1", "padding-top": "25px" }, 1500);
        $(".open-close-icon").html('<i class="fa fa-align-justify fa-times"></i>')
    }
}
function closeNav() {
    {
        $(".open-close-icon").html('<i class="fa fa-align-justify"></i>')
        $("nav").animate({ "left": "-250px" }, 500)
        $(".navBtn").animate({ "left": "0px" }, 500)
        $("aside ul li").animate({ "opacity": "0", "padding-top": "500" }, 500);
    }
}