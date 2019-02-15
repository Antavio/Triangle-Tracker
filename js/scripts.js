function tracker(){
  var lengthOne = parseInt(document.getElementById("Length-one").value);
  var lengthTwo = parseInt(document.getElementById("Length-two").value);
  var lengthThree = parseInt(document.getElementById("Length-three").value);
  if (lengthOne == lengthTwo && lengthTwo == lengthThree){
	alert("Equilateral");
} else if ((lengthOne == lengthTwo) || (lengthTwo == lengthThree) || (lengthOne == lengthThree)){
alert("isosceles");
} else if((lengthOne != lengthTwo !=lengthThree) && ((lengthOne + lengthTwo > lengthThree) && (lengthOne + lengthThree > lengthTwo) && (lengthTwo + lengthThree > lengthOne))) {
	alert("Scalene");
} else {
	alert("Cannot make a Triangle");
}
}
