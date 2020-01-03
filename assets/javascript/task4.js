/* Put code for the task below|||||Check that all fields within the form are filled out. In addition, verify the validity of the phone number field (make sure it has exactly 10 characters).*/
function phone(){
  var name = document.getElementById("phone").value;
  if(name.length < 5 || name.length > 25){
    alert("Not a Valid Phone Number");
  }
}
