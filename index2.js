function addNum(){
        var a=document.getElementById("num1").value;
        var b=document.getElementById("num2").value;
        var c=a*1+b*1;
        var reg=/\d/i;
        if(reg.test(a)&&reg.test(b)){
            alert(c)
        }else{
            alert("Can only work with numbers")// Display error text
        }
        
    }// william Gong zhenan A simple calculation number webpage


