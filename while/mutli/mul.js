function btn1() {

    var i = parseInt(txt1.value);
    

    while (i <= 10) {
        var j = 1;
        while (j <= parseInt(txt2.value)) {
            lbl1.innerHTML += j + "X" + i + "=" + (j * i)+"<br>";
            j++;
        }
        lbl1.innerHTML += "<br>";
        i++;
    }
}