var count=1;
document.querySelector(".text").oninput = function() {
    var input=this.value;
    var sum=check(input);

    count=parseInt(sum/34)+1;
    document.querySelector(".text").onkeyup = function(e) {
        var e = event || window.event;
        if(e.keyCode==13){
            count++;
            this.style.height=count*1+"rem";
        }
    }
    this.style.height = count * 1 + "rem";
}
function check(inputStar) {
    var bytesCount = 0;
    for (var i = 0; i < inputStar.length; i++) {
        var c = inputStar.charAt(i);
        if (/^[\u0000-\u00ff]$/.test(c)) {
            bytesCount += 1;
        }
        else {
            bytesCount += 2;
        }
    }
    return bytesCount;
}