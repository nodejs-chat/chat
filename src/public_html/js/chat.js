$(document).ready( function() {
    var socket = io();
    $('#form').submit(function(e) {
        e.preventDefault();
        socket.emit('new_message', {text: $('#m').val()});
        $('#m').val('');
        return false;
    });
});