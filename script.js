"use strict";

const input = document.getElementById("text-input");
const checkBtn = document.getElementById("check-btn");
const result = document.getElementById("result");

checkBtn.addEventListener("click", function () {
  const listLowerReverse = input.value.toLowerCase().replace(/[^a-z0-9]/g, "");
  const list = listLowerReverse.split("").reverse().join("");
  console.log(list);
  console.log(listLowerReverse);

  if (listLowerReverse === "") {
    alert("Please input a value");
  } else if (listLowerReverse === list) {
    result.textContent = `${input.value} is a palindrome.`;
  } else {
    result.textContent = `${input.value} is not a palindrome.`;
  }
});
//result.textContent = `${input.value} is a palindrome` ;
/*for (let i = 0; i < input.value.length; i++) {
    list.push(input.value[i]);
    list.
  }*/
