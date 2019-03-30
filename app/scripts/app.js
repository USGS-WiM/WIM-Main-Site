$(document).ready(function () {


    // Toggle Mobile Typography
    $("#sgMobileTypography").click(function(){
        $(".sg_typography").addClass("sg_force_mobile");
        $(".sg_typography").removeClass("sg_force_desktop");
        $("#sgMobileTypography").hide();
        $("#sgDesktopTypography").show();
    });
    $("#sgDesktopTypography").click(function(){
        $(".sg_typography").removeClass("sg_force_mobile");
        $(".sg_typography").addClass("sg_force_desktop");
        $("#sgMobileTypography").show();
        $("#sgDesktopTypography").hide();
    });

    // Toggle Typeface
    $("#sgSerifTypography").click(function(){
        $(".sg_typography").addClass("serif");
        $("#sgSerifTypography").hide();
        $("#sgSansTypography").show();
    });
    $("#sgSansTypography").click(function(){
        $(".sg_typography").removeClass("serif");
        $("#sgSerifTypography").show();
        $("#sgSansTypography").hide();
    });

});
