// Fetch all the forms we want to apply custom Bootstrap validation styles to
const form = document.getElementById("loginForm");

form.addEventListener(
  "submit",
  (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (form.checkValidity()) {
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      console.log("Form valid");
      console.log(email);
      console.log(password);

      console.log("email", event.target[0].value);
      console.log("password", event.target[1].value);
    } else {
      console.log("Form not valid");
    }

    form.classList.add("was-validated");
  },
  false
);
