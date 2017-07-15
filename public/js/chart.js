$(document).ready(function() {
    var title = {
        text: '周出勤率'
    };
    var subtitle = {
        text: ''
    };
    var xAxis = {
        type: 'datetime'
    };
    var yAxis = {
        title: {
            text: '出勤率（%）'
        }
    };
    var plotOptions = {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    };
    var series= [{
        name: 'Tokyo',
        pointStart: Date.UTC(2017, 6, 25),
        pointInterval: 3600 * 1000*24 ,// one hour
        data: [parseInt(27/30*100),parseInt(29/30*100), parseInt(28/30*100),parseInt(30/30*100) , parseInt(29/30*100), parseInt(30/30*100),parseInt(28/30*100)]
    }];

    var json = {};

    json.title = title;
    json.subtitle = subtitle;
    json.xAxis = xAxis;
    json.yAxis = yAxis;
    json.series = series;
    json.plotOptions = plotOptions;
    $('#container').highcharts(json);

});


$(function(){
    $(".headerLeft img").click(function(){
        location.href="work.html";
    });
})