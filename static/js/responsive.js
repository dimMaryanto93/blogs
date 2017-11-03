$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $(".post-content img").addClass("materialboxed responsive-img center-image");
    $(".button-collapse").sideNav();
    var clipboard = new Clipboard('#copyboard');

    clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
        Materialize.toast('Berhasil di salin', 1000)
        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        Materialize.toast('Gagal disalin!', 4000)
    });

});
