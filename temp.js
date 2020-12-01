
   function display() 
   {

   	var a=document.getElementById("result").value;
    var selectBox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    
    if(selectedValue==1)
    
    {
    
    	result=parseFloat(parseFloat(a-32)*(5/9));
    	document.getElementById("result1").value=result + "\u2103";
      //document.getElementById("result").value=result + "\u2103";	
    }

    else if(selectedValue==2)
    
    {
    	result=parseFloat(parseFloat(a)*(9/5)+32);
    	document.getElementById("result1").value=result + "\u2109";
      //document.getElementById("result").value=result + "\u2109";
    }

   }
