//This function allows to aplly a scroll effect to any "a" that has an "id" as a target (internal link)
$(document).ready(function(){
    $('a[href^="#"].nav-link').on('click',function (e) {
    e.preventDefault();
    var target = this.hash;
    $target = $(target);
        $('html, body').stop().animate({'scrollTop': $target.offset().top}, 1500, 'swing', function () {
        window.location.hash = target;
        });
    });
});