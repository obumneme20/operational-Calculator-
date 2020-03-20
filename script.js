function btnClick(){

    var x = document.getElementById("screen").value;

    var input1=document.getElementById("input1").value;
    var input2=document.getElementById("input2").value;
    var operator=document.getElementById("operator").value;


    if(input1 == "" || input2 == ""){ 

        alert("please fill all fields")
    }else{

        if(operator == "+"){
            var additon = Number(input1) + Number(input2)
            document.getElementById("screen").value = input1 + "+" + input2 + "=" + additon
        }

        else if(operator == "-"){
            var additon = Number(input1) - Number(input2)
        document.getElementById("screen").value = input1 + "+" + input2 + "=" + additon 
        }
    

       else if(operator == "*"){
            var muiltply = Number(input1) * Number(input2)
            document.getElementById("screen").value = input1 + "*" + input2 + "=" + muiltply
       }
        
        else if(operator == "/"){
            var divide = Number(input1) / Number(input2)
            document.getElementById("screen").value = input1 + "/" + input2 + "=" + divide  
        }
    }
    
}  