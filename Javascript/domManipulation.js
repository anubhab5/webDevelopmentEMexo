// const elm = document.getElementById("my-id");
// elm.innerText = "My DUMMY TEXT";
// // elm.style.color = "red";

// elm.classList.add("color-me");
// elm.classList.add("color-test");

// const newElm = document.createElement("h1");
// newElm.innerText = "My Newly added element";
// document.body.appendChild(newElm);

// document.body.removeChild(elm)

// debugger

// setTimeout(function () {
//   const elm = document.getElementById("my-id");
//   elm.innerText = "My DUMMY TEXT";
// }, 5000);

function addNumbers() {
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");

  const value1 = Number(num1.value);
  const value2 = Number(num2.value);

  let sum = value1 + value2;
  debugger;

  const isExixt = document.getElementById("para-1");
  if (isExixt) {
    document.body.removeChild(isExixt);
  }

  const newElm = document.createElement("p");
  newElm.setAttribute("id", "para-1");
  newElm.innerText = sum;
  document.body.appendChild(newElm);
}

function isPWDStrong() {
  const num1 = document.getElementById("pwd1").value;
  let hasNumbers = false;
  let haslowerCase = false;
  let hasUppercase = false;
  let hasSpeclSymbols = false;

  for (let num of num1) {
    debugger;
    if (num.charCodeAt() >= 97 && num.charCodeAt() <= 122) {
      haslowerCase = true;
    }
    if (num.charCodeAt() >= 97 && num.charCodeAt() <= 122) {
      haslowerCase = true;
    }
    if (num.charCodeAt() >= 97 && num.charCodeAt() <= 122) {
      haslowerCase = true;
    }
    if (num.charCodeAt() >= 97 && num.charCodeAt() <= 122) {
      haslowerCase = true;
    }
    if (haslowerCase && haslowerCase && haslowerCase) {
      // password ius StorageManager;
    } else {
      // password is weak
    }
  }
}

// addNumbers();
// addNumbers();
