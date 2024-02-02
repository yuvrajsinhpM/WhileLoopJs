function btn1() {
    var a = parseInt(txt1.value);
    var i = 1;
    var sum =0;
    while (i < a) {
        if (a % i == 0) {
            sum = sum + i;
            if (a==i) {
                lbl1.innerHTML += i;

            }
            else {
                lbl1.innerHTML +=  i + "+" ;

            }
        }
        i++;
    }
    lbl1.innerHTML += "=" +sum ;
    if (sum == a) {
        lbl1.innerHTML += "perfect number" + a;
    }
    else {
        lbl1.innerHTML += "not perfect number" + a;
    }
}