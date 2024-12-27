const messageContainer = document.querySelector(".message-container");
const formConsent = document.querySelector(".consent-form");
const nameAndSurname = document.getElementById("name-and-surname");
const email = document.getElementById("email");
const allConsent = document.getElementById("allConsents");
let firstConsent = document.getElementById("consentMarketing");
let secondConsent = document.getElementById("consentMarketing2");
const checkAllConsents = () => {
  if (allConsent.checked) {
    firstConsent.checked = true;
    secondConsent.checked = true;
    firstConsent.disabled = true;
    secondConsent.disabled = true;
  } else {
    firstConsent.checked = false;
    secondConsent.checked = false;
    firstConsent.disabled = false;
    secondConsent.disabled = false;
  }
};
const validate = (e) => {
  e.preventDefault();
  let message = document.createElement("li");
  message.setAttribute("class", "message");
  if (nameAndSurname.value == "") {
    messageContainer.innerHTML = "";
    message.innerText = "Write your name and surname";
  } else if (email.value == "") {
    messageContainer.innerHTML = "";
    message.innerText = "Write your email address";
  } else if (firstConsent.checked != true && secondConsent.checked != true) {
    message.innerText = "You gotta agree to something";
  } else {
    messageContainer.innerHTML = "";
    message.innerText = "The form has been submitted";
    message.style.color = "green";
  }
  messageContainer.appendChild(message);
};

formConsent.addEventListener("submit", validate);
allConsent.addEventListener("click", checkAllConsents);
