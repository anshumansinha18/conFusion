$("#carouselButton").click(function () {
    if ($("#carouselButton").children("span").hasClass('fa-pause')) {
        $("#mycarousel").carousel('pause');
        $("#carouselButton").children("span").removeClass('fa-pause');
        $("#carouselButton").children("span").addClass('fa-play');
    }
    else if ($("#carouselButton").children("span").hasClass('fa-play')) {
        $("#mycarousel").carousel('cycle');
        $("#carouselButton").children("span").removeClass('fa-play');
        $("#carouselButton").children("span").addClass('fa-pause');
    }
});

$(document).ready(function () {
    $("#reserveButton").click(function () {
        $("#reserveModal").modal();
    });
});

$(document).ready(function () {
    $("#closeReserveModal").click(function () {
        $("#reserveModal").modal('hide');
    });
});

$(document).ready(function () {
    $("#cancelReserveModal").click(function () {
        $("#reserveModal").modal('hide');
    });
});

$(document).ready(function () {
    $("#loginButton").click(function () {
        $("#loginModal").modal();
    });
});

$(document).ready(function () {
    $("#dismissLogin").click(function () {
        $("#loginModal").modal('hide');
    });
});

$(document).ready(function () {
    $("#cancelLogin").click(function () {
        $("#loginModal").modal('hide');
    });
});