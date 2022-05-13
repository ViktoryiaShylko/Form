function colorPage(){
    switch(document.getElementById("color").value){
     case "blue":
        document.body.style.background = "blue";
        break;
     case "red":
        document.body.style.background = "red";
        break;
     case "green":
        document.body.style.background = "green"; 
        break;
     case "orange":
        document.body.style.background = "orange";
        break     
    }

}