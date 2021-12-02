// what we do
$(document).ready(function () {
    $(".design-icon").click(function () {
      $(".design-description").toggle();
      $(".design-icon").hide();
      $(".design, .design-description").click(function () {
        $(".design-icon").show();
        $(".design-description").hide();
      });
    });
    $(".development-icon").click(function () {
      $(".development-description").toggle();
      $(".development-icon").hide();
      $(".development, .development-description").click(function () {
        $(".development-description").hide();
        $(".development-icon").show();
      });
    });
    $(".product-icon").click(function () {
      $(".product-description").toggle();
      $(".product-icon").hide();
      $(".product, .product-description").click(function () {
        $(".product-icon").show();
        $(".product-description").hide();
      });
    });
  });
// what we do ends
// contact
const validation = () =>{
  var name = document.getElementById("submit").value.trim();
  var username = document.getElementById("username").value.trim();
  var usermail = document.getElementById("usermail").value.trim();
  var message = document.getElementById("message").value.trim();
  if(name == "" || username == "" || usermail == "" || message == ""){
      alert("please fill all fields");
      return false;
  }else{
     alert("Thank you"+ " " + username + " "+"for contacting us");
     var name = document.getElementById("submit").value="";
     var username = document.getElementById("username").value="";
     var usermail = document.getElementById("usermail").value="";
     var message = document.getElementById("message").value="";
      return false;
  }
}
// contact