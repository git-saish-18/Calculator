const dark = () => {
  console.log("JS apply");
  document.body.style.backgroundColor = "rgb(8 3 0 / 26%)";
};
const light = () => {
  document.body.style.backgroundColor = "rgb(57 178 248 / 68%)";
};
let input = document.getElementById("Input");
let result = document.getElementById("Result");
let put = (value1) => {
  if (value1 == "=") {
    if (input.value != "") {
      try {
        result.value = "Ans " + eval(input.value);
      } catch (err) {
        result.value = "Invalid Input";
      }
      if (res === undefined) {
        result.value = "Invalid Input";
      }
    } else {
      alert("Enter the Expression plz ");
    }
  } else {
    input.value += value1;
  }
};
const clearInput = () => {
  console.log("clear invoke");
  input.value = "";
  Result.value = "";
};

const DeleteInput = () => {
  str = " ";
  str = input.value;
  len = str.length;
  sub = str.substring(0, len - 1);
  input.value = sub;
};
