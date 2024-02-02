function btniclick() {
    var sum = 0;
    var t = parseInt(txt1.value);

    while (t !== 0) {
        var r = t % 10;
        sum = parseInt(sum) * 10 + parseInt(r);
        t = parseInt(t / 10);
    }

    lbl1.innerHTML = sum;
}