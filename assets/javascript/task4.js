/* Put code for the task below|||||Check that all fields within the form are filled out. In addition, verify the validity of the phone number field (make sure it has exactly 10 characters).*/
function phone(){
  var name = document.getElementById("phone").value;
  if(name.length !== 10 ){
    /*sorce used for !== */
    alert("Not a Valid Phone Number");
  }
}
function length(){
  var name = document.getElementById("length3").value;
  var address = document.getElementById("length2").value;
  var email = document.getElementById("length1").value;
  var letters = /^[A-Za-z]+$/;
  if(inputtxt.value.match(letters){
      alert('Your name have accepted : you can try another');}

}
