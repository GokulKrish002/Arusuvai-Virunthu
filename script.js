// scroll animation
let loop_runned = false;
function reveal() {
    var elementVisible = 50;
    var windowHeight = window.innerHeight;
    var reveals = document.querySelectorAll(".reveal-l,.reveal-r,.reveal-up-0_5,.reveal-up-1_0,.reveal-up-1_5,.reveal-up-2_0,.reveal-fade");
    for (var i = 0; i < reveals.length; i++) {
        var elementTop = reveals[i].getBoundingClientRect().top;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
            if (reveals[i].classList.contains('run_loop')) {
                if (!loop_runned) {
                    loop_runned = true;
                }
            }
        }
        //  else {
        //     reveals[i].classList.remove("active");
        // }
    }
}
window.addEventListener("scroll", reveal);
reveal();


// side_bar
$('.side_bar_toggler').on('click', function () {
    $('.fa-side-bar-icon').toggleClass('fa-side-bar-close');
    $('.side_bar').toggleClass('side_bar_open');
    $('.side_bar_toggler').toggleClass('side_bar_toggler_fly');
})

//show notification
$('.show_appointment,.appointment_container').on('click', function (event) {
    $('body,html').toggleClass('overflow-hidden');
    console.log(event.target);
    if (!$(event.target).hasClass('form-control') && !$(event.target).hasClass('dont-close')) {
        $('.appointment_container').toggleClass('active');
    }
    if ($(event.target).hasClass('form_submit')) {
        $('.form-control').val('');
        $('.notification_bar').removeClass('active');
        $('.notification_bar').addClass('active');
    }
});