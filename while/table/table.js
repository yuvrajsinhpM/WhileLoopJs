function btn1(){
    var i = 1;
    while (i<=10) {
        var mul = txt1.value * i;
        lbl1.innerHTML += "<br>"+txt1.value + "X" + i + "=" + mul;
        i++;
    }
}