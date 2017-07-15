$(function(){
    var socket = io();
    $('#btn').onclick(function(){
        //点击发送按钮，提交输入的信息
        if($('#txt').val()!=""){
            socket.emit('chat message', $('#txt').val());
        }
        $('#txt').val('');
        return false;
    });
    //接收到chat message时
    socket.on('chat message', function(msg){
        //将chat message显示在页面
        $('#chatRoom').append($('<p>').text(msg));
    });
})