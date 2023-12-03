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

form.addEventListener("submit", (e) =>{
   e.preventDefault();

   sendEmail ();
});