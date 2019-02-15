function tracker(){
  var lengthOne = parseInt(document.getElementById("Length-one").value);
  var lengthTwo = parseInt(document.getElementById("Length-two").value);
  var lengthThree = parseInt(document.getElementById("Length-three").value);

  var storedArray = [lengthOne,lengthTwo,lengthThree];
  if(storedArray[0] > 0 && storedArray[1] > 0 && storedArray[2]){
    
  } else {
    alert("Enter values above zero");
  }
