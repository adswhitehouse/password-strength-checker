// Variables
let passwordInput = document.querySelector(".passwordInput");
let message = document.querySelector(".jsMessage");
let form = document.querySelector("form");
let submitBtn = document.querySelector(".jsSubmitBtn");

// Appropriately styles and displays message and styles form border depending on password length 
passwordInput.addEventListener("keyup", () => {
  let input = passwordInput.value;
  if (input.length === 0) {
    message.textContent = "";
    form.style.borderColor = "#fff";
  } else if (input.length < 5) {
    message.textContent = "Weak Password";
    message.style.color = "#D3212C";
    form.style.borderColor = "#D3212C";
  } else if (input.length < 9) {
    message.textContent = "Medium Password";
    message.style.color = "#FF980E";
    form.style.borderColor = "#FF980E";
  } else {
    message.textContent = "Strong Password";
    message.style.color = "#069C56";
    form.style.borderColor = "#069C56";
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
