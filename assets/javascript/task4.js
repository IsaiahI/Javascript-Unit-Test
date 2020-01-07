/* Put code for the task below|||||Check that all fields within the form are filled out. In addition, verify the validity of the phone number field (make sure it has exactly 10 characters).*/
function phone(){
  var name = document.getElementById("phone").value;
  if(name.length !== 10 ){
    /*sorce used for !== */
    alert("Not a Valid Phone Number");
  }
}
function length1(){
  var name = document.getElementById("length1").value;
  if(name.length <= 0 ){
    /*sorce used for !== */
    alert("Email Required");
  }
}function length2(){
  var name = document.getElementById("length2").value;
  if(name.length <= 0 ){
    /*sorce used for !== */
    alert("Address Required");
  }
}function length3(){
  var name = document.getElementById("length3").value;
  if(name.length <= 0 ){
    /*sorce used for !== */
    alert("Name Required");
  }
}
