function tracker(){
  var lengthOne = parseInt(document.getElementById("Length-one").value);
  var lengthTwo = parseInt(document.getElementById("Length-two").value);
  var lengthThree = parseInt(document.getElementById("Length-three").value);

  var storedArray = [lengthOne, lengthTwo, lengthThree];
  if (storedArray[0] > 0 && storedArray[1] > 0 && storedArray[2]  > 0){
    if (storedArray[0]  + storedArray[1] <= storedArray[2] || storedArray[0] + storedArray[2] <= storedArray[1] || storedArray[1] + storedArray[2] < storedArray[0]){
      alert("Cannot form a triangle")
    } else {
      if(storedArray[0] == storedArray[1] && storedArray[1] == storedArray[2]){
        alert("Equilateral Triangle");
      } else if ((storedArray[0] == storedArray[1]) || (storedArray[1] == storedArray[2]) || (storedArray[0] == storedArray[2])){
        alert("Isosceles Triangle");
      } else {
        alert("Scalene");
      }
    }
  } else {
    alert ("Entered values should be greater than zero");
  }
}

function clearInput(){
  document.getElementById("inputForm").reset();
}
