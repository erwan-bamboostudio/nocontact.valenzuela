
// Hamburger Menu button
$(".Hmbg-icon").click(function () {
          $(".Hmbg-icon").addClass("toggle-on");
          $(".menu-drawer").addClass("active");
          $(".header button").addClass("active");
          $("body").addClass("active");

});

$(".toggle-close").click(function () {
          $(".Hmbg-icon").removeClass("toggle-on");
          $(".menu-drawer").removeClass("active");
          $(".header button").removeClass("active");
          $("body").removeClass("active");
});

// Check Plate / Notice Submit button
$(".submit-button").click(function () {
          $(".check-result").addClass("display");
          $(".portal-frame .form").addClass("no-display")

          // No Violation
          $( ".check-result.plate" ).append("<div class='no-result'><img src='img/Result 1.png'><p>You have no pending traffic violations under the NCAP in Valenzuela City! Drive safely.</p></div>");

          // Violation with Video
          $( ".check-result.notice" ).append("<div class='result'><h3>VIOLATION RECORDED</h3><span class='result-text'>Your vehicle was recorded by our traffic enforcement camera to have committed a violation against Ordinance No. 572 of Bataan. Please settle your violation <b>within five (5) working days</b> upon receipt of the violation. Failure to settle your violation within the prescribed period will be taken as an admission of guilt and shall be seen as a waiver of such right to contest the violation or present evidence as a defense.</span><img src='img/placeholder result 1 alt.png' style='width: 100%'><span class='result-options'>Proceed to the payment page for more information or refer to our FAQs</span><div class='resultUI'><div class='btn-UI'><a href='payment.html'><button class='notice-btn btn-yellow'>HOW TO PAY</button></a><a href='faqs.html'><button class='notice-btn btn-yellow'>FAQS</button></a></div></div></div>");

});


for (let i = 1; i < 4; i++){
var txt= $('.news' + i).text();
if(txt.length > 120)
    $('.news' + i).text(txt.substring(0,120) + '...');
  }

// for (let i = 1; i < 4; i++){
// var txt= $('.news-title' + i).text();
// if(txt.length > 50)
//     $('.news-title' + i).text(txt.substring(0,50) + '...');
//   }
