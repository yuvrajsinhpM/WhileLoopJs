function btn1() {
    var sum = 0;
    var i = 1;
    var a = parseInt(txt1.value);
    while (i <= a) {
        sum = sum + i;
        if (i == a) {
            lbl1.innerHTML += i;
        }
        else {
            lbl1.innerHTML += i + " + ";

        }
        i++;
    }
    lbl1.innerHTML += "=" + sum;
}