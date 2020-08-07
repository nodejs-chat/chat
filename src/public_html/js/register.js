$(document).ready( function() {
    var socket = io();

    socket.on('register', (data) => {
        if(data.success === true) {
            document.cookie = "userId=" + data.userId;
            window.location.href = "/home";
        }
        else{
            alert(data.message);
        }
    });

    $("#submit").click(function() {
        socket.emit('register', {
            name: $("#name").val(),
            mail: $("#mail").val(),
            username: $("#username").val(),
            password: $("#password").val()
        });
    });
});