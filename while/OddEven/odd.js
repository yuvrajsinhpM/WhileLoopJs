function btn1() {
    var i = 1;
    var t1 = parseInt(txt1.value)
    while (i <= t1) {   
        if (t1 % i == 0) {
            lbl1.innerHTML += "<br>" + i;
        }
        i++;

    }
}