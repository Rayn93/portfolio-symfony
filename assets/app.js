/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

// start the Stimulus application
import './bootstrap';


// //STICKY MENU
//
// $(window).scroll(function() {
//     if ($(this).scrollTop() > 1){
//         $('#header-top').addClass("sticky");
//     }
//     else{
//         $('#header-top').removeClass("sticky");
//     }
// });
//
//
// //Main function
//
// $(document).ready(function () {
//
//
//
//     //PREELOADER
//
//     Pace.on("done", function(){
//         $(".cover").fadeOut(2000);
//     });
//
//
//     // OSKRYPTOWANIE DLA MENU
//     var $height = $(window).height();
//
//     $("#header-top .traggle-menu").css("height", $height);
//
//     $("#header-top .burger").click(function () {
//         $(".traggle-menu").show("slide", { direction: "left" }, 500);
//     });
//
//     $(".close").click(function () {
//         $(".traggle-menu").hide("slide", "right", 500);
//     });
//
//     // //SCRIPTS FOR PROJECTS SUBPAGES
//     // if($('body').hasClass('projekty')){
//     //     $('select').niceSelect();
//     // }
//
//     $('a[href^="#"]').on('click', function(event) {
//         var target = $(this.getAttribute('href'));
//         if( target.length ) {
//             event.preventDefault();
//             $('html, body').stop().animate({
//                 scrollTop: target.offset().top
//             }, 1000);
//         }
//     });
//
//     var width = $(window).width();
//     if (width <= 767) {
//         $("#cv .timeline li").removeClass("right").addClass("left")
//     }
//
//
// });
//
//
// //PODMIANA KLASY PRZY SZEROKOŚCI OKNA 620PX DLA SEKCJI KATEGORIE
// $(window).resize(function () {
//
//     var width = $(window).width();
//     if (width <= 767) {
//         $("#cv .timeline li").removeClass("right").addClass("left")
//     }
//
// });
//




