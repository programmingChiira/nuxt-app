$("#casino-game").hover(
  function () {
    $(".casino-overlay").show();
  },
  function () {
    $(".casino-overlay").hide();
  }
);

$("#owl-demo").owlCarousel({
  navigation: false, // Show next and prev buttons
  slideSpeed: 1000,
  autoPlay: true,
  loop: true,
  paginationSpeed: 500,
  items: 1,
  itemsDesktop: false,
  itemsDesktopSmall: false,
  itemsTablet: false,
  itemsMobile: false,
  animateOut: 'slideOutUp',
  animateIn: 'slideInUp'
});

(function ($) {
  $(function () { //on DOM ready 
    $("#scroller").simplyScroll();
  });
})(jQuery);

//add-to-favourite
$('#add-to-favourite').on('click', function () {
  if ($('.notadded').css('display') != 'none') {
    $('.added').show().siblings('.notadded').hide();
  } else if ($('.text2').css('display') != 'none') {
    $('.notadded').show().siblings('.added').hide();
  }
});

//sticky Header
$(window).scroll(function () {
  var sticky = $('header'),
    scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

// Accordion
const accordionItemHeaders = document.querySelectorAll(".accordion-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});

//Copy Link
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  alert("Copied the text: " + copyText.value);
}

//Account Details
function myAccount(evt, myAccountDetails) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(myAccountDetails).style.display = "block";
  evt.currentTarget.className += " active";
}


//Referral Tab
function myreferral(evt, referralDetails) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("referralstab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("referral_links");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(referralDetails).style.display = "block";
  evt.currentTarget.className += " active";
}