function him() {
  console.log("Hello Himadri");
}
function sac() {
  console.log("sachin bhai");
}
function add(num1, num2, callback, callback2) {
  num3 = num1 + num2;
  console.log(num3)
  callback();
  callback2();
}
//add(10, 30, sac);
//add(90, 80, him);
//anonymous function as a parameter
add(79, 56, him, function() {
  console.log("welcome")
})