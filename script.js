function validateLogin() {
  var email = document.getElementByclass("email").value;
  var password = document.getElementsByclass("password").value;
  var phone = document.getElementByclass("phone").value;

  // Perform validation and backend authentication logic here
  // For simplicity, let's just navigate to the profile page
  window.location.href = "profile.html";
  
}
