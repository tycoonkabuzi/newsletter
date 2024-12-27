let form = document.getElementById("form");
const validate = (e) => {
  let arrayNames = [];
  let firstname, secondName;
  e.preventDefault();
  for (let names of document.querySelectorAll("input")) {
    if (names.type != "submit") {
      arrayNames.push(names.value);
      firstname = arrayNames[0];
      secondName = arrayNames[1];
    }
  }
  console.log(
    `the first name is ${firstname} and the second name is ${secondName}`
  );
};

form.addEventListener("submit", validate);
