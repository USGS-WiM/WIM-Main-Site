
$(document).ready(function() {


	$(".app_loader").hide(0);

	//Mobile nav control (760px or less)
    $("#mobile_nav_button").click(function(){
        $("#mobile_nav").stop().slideToggle();

        $("#mobile_nav_icon").toggleClass( "ion-navicon-round" );
        $("#mobile_nav_icon").toggleClass( "ion-close-round" );

    });


	//Sticky Nav Bar
	$(window).scroll(function(){
	  var sticky = $('#navigation_bar'),
	  	  mobile = $('#mobile_menu'),
	      scroll = $(window).scrollTop();

	  if(scroll >= 80){
	  		sticky.addClass('navigation_fixed');
	  		mobile.addClass('mobile_navigation_fixed');
	  }else{
	  		sticky.removeClass('navigation_fixed');
	  		mobile.removeClass('mobile_navigation_fixed');
	  }


	});

	//Enable Mobile Menu
	$("#enable_mobile_menu").click(function(){
		$("#mobile_menu").slideToggle();
		$(this).toggleClass("mobile_enabled");
	});




	slideShow();

	/// UNCOMMENT FOR SPEED TESTING
	// // //Home slider slides
	// setInterval(function(){
	// 	$("#slide_6").fadeIn(500);
	// 	$("#slide_5").delay(500).fadeIn(0);
	// 	$("#slide_4").delay(500).fadeIn(0);
	// 	$("#slide_3").delay(500).fadeIn(0);
	// 	$("#slide_2").delay(500).fadeIn(0);
	// 	slideShow();
	// }, 12000);
	// // }, 54000);

	// function slideShow(){
	// 	// setTimeout(bg1, 9000);
	// 	// setTimeout(bg2, 18000);
	// 	// setTimeout(bg3, 27000);
	// 	// setTimeout(bg4, 36000);
	// 	// setTimeout(bg5, 45000);
	// 	setTimeout(bg1, 2000);
	// 	setTimeout(bg2, 4000);
	// 	setTimeout(bg3, 6000);
	// 	setTimeout(bg4, 8000);
	// 	setTimeout(bg5, 10000);
	// }

	// function bg1(){
	// 	$("#slide_6").fadeOut(500);
	// 	// $(".home_hero").css("backgroundPosition", "Center 30%");
	// }
	// function bg2(){
	// 	$("#slide_5").fadeOut(500);
	// }
	// function bg3(){
	// 	$("#slide_4").fadeOut(500);
	// }
	// function bg4(){
	// 	$("#slide_3").fadeOut(500);
	// }
	// function bg5(){
	// 	$("#slide_2").fadeOut(500);
	// }

	// //Home slider slides
	setInterval(function(){
		$("#slide_6").fadeIn(500);
		$("#slide_5").delay(500).fadeIn(0);
		$("#slide_4").delay(500).fadeIn(0);
		$("#slide_3").delay(500).fadeIn(0);
		$("#slide_2").delay(500).fadeIn(0);
		slideShow();
	}, 48000);
	// }, 54000);

	function slideShow(){
		// setTimeout(bg1, 9000);
		// setTimeout(bg2, 18000);
		// setTimeout(bg3, 27000);
		// setTimeout(bg4, 36000);
		// setTimeout(bg5, 45000);
		setTimeout(bg1, 8000);
		setTimeout(bg2, 16000);
		setTimeout(bg3, 24000);
		setTimeout(bg4, 32000);
		setTimeout(bg5, 40000);
	}

	function bg1(){
		$("#slide_6").fadeOut(500);
		// $(".home_hero").css("backgroundPosition", "Center 30%");
	}
	function bg2(){
		$("#slide_5").fadeOut(500);
	}
	function bg3(){
		$("#slide_4").fadeOut(500);
	}
	function bg4(){
		$("#slide_3").fadeOut(500);
	}
	function bg5(){
		$("#slide_2").fadeOut(500);
	}


	$("#gary_pic").mouseover(function() { $(this).attr("src", "img/team/gary_f.jpg");}).mouseout(function() {$(this).attr("src", "img/team/gary_p.jpg");});
	$("#hans_pic").mouseover(function() { $(this).attr("src", "img/team/hans_f.jpg");}).mouseout(function() {$(this).attr("src", "img/team/hans_p.jpg");});
	$("#bruce_pic").mouseover(function() { $(this).attr("src", "img/team/bruce_f.jpg");}).mouseout(function() {$(this).attr("src", "img/team/bruce_p.jpg");});
	$("#blake_pic").mouseover(function() { $(this).attr("src", "img/team/blake_f.jpg");}).mouseout(function() {$(this).attr("src", "img/team/blake_p.jpg");});
	$("#erik_pic").mouseover(function() { $(this).attr("src", "img/team/erik_f.jpg");}).mouseout(function() {$(this).attr("src", "img/team/erik_p.jpg");});
	$("#jeff_pic").mouseover(function() { $(this).attr("src", "img/team/jeff_f.jpg");}).mouseout(function() {$(this).attr("src", "img/team/jeff_p.jpg");});
	$("#jeremy_pic").mouseover(function() { $(this).attr("src", "img/team/jeremy_f.jpg");}).mouseout(function() {$(this).attr("src", "img/team/jeremy_p.jpg");});
	$("#mitch_pic").mouseover(function() { $(this).attr("src", "img/team/mitch_f.jpg");}).mouseout(function() {$(this).attr("src", "img/team/mitch_p.jpg");});
	$("#jamie_pic").mouseover(function() { $(this).attr("src", "img/team/jamie_f.jpg");}).mouseout(function() {$(this).attr("src", "img/team/jamie_p.jpg");});
	$("#sydney_pic").mouseover(function() { $(this).attr("src", "img/team/sydney_f.jpg");}).mouseout(function() {$(this).attr("src", "img/team/sydney_p.jpg");});
	$("#tonia_pic").mouseover(function() { $(this).attr("src", "img/team/tonia_f.png");}).mouseout(function() {$(this).attr("src", "img/team/tonia_p.jpg");});
	$("#veni_pic").mouseover(function() { $(this).attr("src", "img/team/veni_f.jpg");}).mouseout(function() {$(this).attr("src", "img/team/veni_p.jpg");});
	$("#luke_pic").mouseover(function() { $(this).attr("src", "img/team/luke_f.jpg");}).mouseout(function() {$(this).attr("src", "img/team/luke_p.jpg");});
	$("#marie_pic").mouseover(function() { $(this).attr("src", "img/team/marie_f.jpg");}).mouseout(function() {$(this).attr("src", "img/team/marie_p.jpg");});





// alert("JQuery Loaded");

  $("select#app_categories").change(function () {
	   if( $("option#viewall:selected").length )
	   {
	     $(".x1, .x2, .x3, .x4, .x5, .x6").slideDown();
	   }else if( $("option#climate:selected").length ){
	     $(".x2, .x3, .x4, .x5, .x6, .nocat").slideUp();
	     $(".x1").slideDown();
	   }else if( $("option#energy:selected").length ){
	     $(".x1, .x3, .x4, .x5, .x6, .nocat").slideUp();
	     $(".x2").slideDown();
	   }else if( $("option#environment:selected").length ){
	     $(".x1, .x2, .x4, .x5, .x6, .nocat").slideUp();
	     $(".x3").slideDown();
	   }else if( $("option#ecosystem:selected").length ){
	     $(".x1, .x2, .x3, .x5, .x6, .nocat").slideUp();
	     $(".x4").slideDown();
	   }else if( $("option#hazard:selected").length ){
	     $(".x1, .x2, .x3, .x4, .x6, .nocat").slideUp();
	     $(".x5").slideDown();
	   }else if( $("option#water:selected").length ){
	     $(".x1, .x2, .x3, .x4, .x5, .nocat").slideUp();
	     $(".x6").slideDown();
	   }
	});


// App Screenshot Hover

	$( ".app_img" ).click(function() {
		var src = $(this).attr('src');
		$(".app_loader").show();
		if (src.indexOf(".png") > -1) {
	         src = src.replace('.png','.gif' );
	     } else {
	         src = src.replace('.gif','.png' );
	     }
	     $(this).attr('src', src).load(function() {
		  		$(".app_loader").hide();
			});;
	});





//URL Control to detect if they clicked from the home page hero image
	if ( document.location.href.indexOf('#climate') > -1 ) {
        $("#app_categories")[0].selectedIndex = 1;
        // $("#app_categories").css({backgroundColor: 'rgba(255,225,26,0.4)'});
        $("#app_categories").change();
    }else if ( document.location.href.indexOf('#energy') > -1 ) {
        $("#app_categories")[0].selectedIndex = 2;
        $("#app_categories").change();
    }else if ( document.location.href.indexOf('#environment') > -1 ) {
        $("#app_categories")[0].selectedIndex = 3;
        $("#app_categories").change();
    }else if ( document.location.href.indexOf('#ecosystems') > -1 ) {
        $("#app_categories")[0].selectedIndex = 4;
        $("#app_categories").change();
    }else if ( document.location.href.indexOf('#hazards') > -1 ) {
        $("#app_categories")[0].selectedIndex = 5;
        $("#app_categories").change();
    }else if ( document.location.href.indexOf('#water') > -1 ) {
        $("#app_categories")[0].selectedIndex = 6;
        $("#app_categories").change();
    }






})
