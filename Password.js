let password = "Broly123";

pwdRegex = /[0-9]/;
if (password.length >= 10 && pwdRegex.test(pwdRegex)) {
  console.log("Pass");
} else {
  //this needs quotes
  console.log("fail");
}
