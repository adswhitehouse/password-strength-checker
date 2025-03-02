let passwordInput = document.querySelector(".passwordInput");
let message = document.querySelector(".jsMessage");
let form = document.querySelector("form");
let submitBtn = document.querySelector(".jsSubmitBtn");

passwordInput.addEventListener("keyup", () => {
  let input = passwordInput.value;
  if (input.length === 0) {
    message.textContent = "";
    form.style.border = "1px solid #fff";
  } else if (input.length < 5) {
    message.textContent = "Weak Password";
    message.style.color = "#D3212C";
    form.style.border = "1px solid #D3212C";
  } else if (input.length < 9) {
    message.textContent = "Medium Password";
    message.style.color = "#FF980E";
    form.style.border = "1px solid #FF980E";
  } else {
    message.textContent = "Strong Password";
    message.style.color = "#069C56";
    form.style.border = "1px solid #069C56";
  }
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
