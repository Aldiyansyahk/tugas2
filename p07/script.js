$(document).ready(function() {
$('nav').delegate('.tidak-aktif', 'click', function(event) {
    var $this = $(this);
    $this.removeClass('tidak-aktif').addClass("aktif");
    $this.siblings().addClass('tidak-aktif').removeClass('aktif');

    });
});