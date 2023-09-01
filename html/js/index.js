$("#search-icon").click(function () {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");

});

$('.menu-toggle').click(function () {
    $(".nav").toggleClass("mobile-nav");
    $(this).toggleClass("is-active");
});


$(document).ready(function () {
    $(window).scroll(function () {
        var header = $("header");
        header.toggleClass("sticky", $(window).scrollTop() > 0);
    });
});

// 


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var parent = this.parentElement;
        var panel = this.nextElementSibling;
        var mainPanel = document.querySelector(".main-panel");
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            // panel.style.border = "none";
        } else {
            panel.style.maxHeight = panel.scrollHeight + 100 + "px";
            parent.style.maxHeight =
                parseInt(parent.style.maxHeight) + panel.scrollHeight + 100 + "px";
        }
    });
}
