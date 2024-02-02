function btn1(){
  
    var i = parseInt(txt1.value);
    var r
    var sum = 0;
            while (i != 0)
            {
                r = i % 10;
                sum = parseInt(r) * parseInt(r) * parseInt(r) + sum;
                i =parseInt(i / 10);
            }
            if (parseInt(txt1.value) == sum)
            {
               
lbl1.innerHTML = "its armstrom";
            }
            else
            {
lbl1.innerHTML = "its not armstrom";
               
            }
}