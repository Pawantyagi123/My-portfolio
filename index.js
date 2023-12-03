const form = document.querySelector("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
function sendEmail () {
  const bodyMessage = `Full Name: ${fullname.value} <br> Email: ${email.value} <br> Phone number: ${phone.value} <br> Message: ${message.value}`;

  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "pawantyaginnl2002@gmail.com",
    Password : "987B0614E5F9AD530FC3B7A9A6DC372563E5",
    To : 'pawantyaginnl2002@gmail.com',
    From : "pawantyaginnl2002@gmail.com",
    Subject : subject.value,
    Body : bodyMessage
  }).then(
    message => {
      if (message == "ok"){
        Swal.fire({
          title: "Success!",
          text: "Message sent succesfully!",
          icon: "success"
          });
        }
      }
    );
};
function checkInputs() {
  const items = document.querySelectorAll(".item");

  for (const item of items) {
    if (item.value == "") {
      item.classList.add("error");
      item.parentElement.classList.add("error");
    }

    if (items[1].value != "") {
      checkEmail();
    }
    items[1].addEventListener("keyup", () => {
      checkEmail();
    })


    item.addEventListener("keyup", () => {
      if (item.value != "") {
        item.classList.remove("error");
        item.parentElement.classList.remove("error");
      }
      else {
        item.classList.add("error");
        item.parentElement.classList.add("error");
      }
    })
  }
}

function checkEmail() {
  const emailRegex = /^([a-z\d\.-]+)@([a-z\d.-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;

  const errorTxtEmail = document.querySelector(".error-text email");

  if (!email.value.match(emailRegex)) {
    email.classList.add("error");
    email.parentElement.classList.add("error");

    if (email.value != "") {
      errorTxtEmail.innerText = "Enter a valid email address ";
    }
    else {
      errorTxtEmail.innerText = "email address can't be blank ";
    }
  }
  else {
    email.classList.remove(error);
    email.parentElement.classList.remove("error");
  }
}

form.addEventListener("submit", (e) =>{
  e.preventDefault();
  checkInputs();

  if (!fullname.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !message.classList.contains("error")) {
    console.log("OK");
  }
  sendEmail ();
});