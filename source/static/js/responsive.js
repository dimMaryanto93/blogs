$(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.materialboxed').materialbox();
    $(".post-content img").addClass("materialboxed responsive-img center-image");
    var clipboard = new Clipboard('#copyboard');

    clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);
        $.notify("Telah di salin", "success");
        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
        $.notify("Gagal di salin!", "error");
    });

});
