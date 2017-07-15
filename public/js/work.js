$(function(){
    $(".msg").click(function(){
        location.href="index.html";
    });
    $(".ding").click(function(){
        location.href="ding.html";
    });
    $(".work").click(function(){
        location.href="work.html";
    });
    $(".contact").click(function(){
        location.href="contact.html";
    });
    $(".mine").click(function(){
        location.href="mine.html";
    });
    var sel1=$("section").children(".public").eq(1).children().children(".content").children(".contain").eq(0)
    sel1.click(function(){
        location.href="daily.html";
    });
    var sel2=$("section").children(".public").eq(5).children().children(".content").children(".contain").eq(0)
    sel2.click(function(){
        location.href="chart.html";
    });
    $(".headerRight img").eq(1).click(function(){
        location.href="more.html";
    });
})
