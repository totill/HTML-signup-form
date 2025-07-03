const form = document.querySelector(".form");

function validateEmail(email) {
    var writtenString =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return writtenString.test(String(email).toLowerCase);
}

function showError(field, message) {
    const formControl = form[field].parentElement;
    formControl.classList.add('error');

    const small = formControl.querySelector('small');
    small.innerText = message;
}

function hideError(field) {
    const formControl = form[field].parentElement;
    formControl.classList.remove('error');
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = form['firstname'].value;
    const lastName = form['lastname'].value;
    const email = form['email'].value;
    const password = form['password'].value;

    if (firstName === '') {
        showError('firstname', 'First Name is required');
    } else {
        hideError('firstname');
    }

    if (lastName === '') {
        showError('lastname', 'Last Name is required');
    } else {
        hideError('lastname');
    }

    if (email === '') {
        showError('email', 'Email is required');
    } else {
        hideError('email');
    }

    if (password === '') {
        showError('password', 'Password is required');
    } else {
        hideError('password');
    }
});





// function validateForm() {
//   let x = document.forms["signupForm"]["fname"].value;
//   if (x == "") {
//     alert("Name must be filled out");
//     document.querySelector("input").style.border = "2px solid red";


// //     input[type=text], input[type=email], input[type=password] {
// //   width: 100%;
// //   padding: 12px 20px;
// //   margin: 8px 0;
// //   display: inline-block;
// //   border: 1px solid var(--grayish-blue);


//     return false;
//   }
// }