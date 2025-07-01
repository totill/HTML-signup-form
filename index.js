function validateForm() {
  let x = document.forms["signupForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    document.querySelector("input").style.border = "red";


//     input[type=text], input[type=email], input[type=password] {
//   width: 100%;
//   padding: 12px 20px;
//   margin: 8px 0;
//   display: inline-block;
//   border: 1px solid var(--grayish-blue);


    return false;
  }
}