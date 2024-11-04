function Résultat(){
    var a = document.getElementById("t1").value;
    var b = document.getElementById("t4").value;
    var c = Number(a)*Number(b);
    t7.value = c;
    
    var d = document.getElementById("t2").value;
    var e = document.getElementById("t5").value;
    var f = Number(d)*Number(e);
    t8.value = f;
    
    var g = document.getElementById("t3").value;
    var h = document.getElementById("t6").value;
    var i = Number(g)*Number(h);
    t9.value = i;



    var a = document.getElementById("t7").value;
    var b = document.getElementById("t8").value;
    var c = document.getElementById("t9").value;
    var d = Number(a)+Number(b)+Number(c);

   t10.value = d;
}

function Reinitialiser(){
    var a = document.getElementById("t1").value ='';
    var b = document.getElementById("t4").value ='';
    
    var d = document.getElementById("t2").value ='';
    var e = document.getElementById("t5").value ='';
   
    
    var g = document.getElementById("t3").value ='';
    var h = document.getElementById("t6").value ='';
   



    var a = document.getElementById("t7").value ='';
    var b = document.getElementById("t8").value ='';
    var c = document.getElementById("t9").value ='';
    var d = document.getElementById("t10").value ='';
}