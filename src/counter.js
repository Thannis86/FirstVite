let counter = 0;
const button = document.querySelector("#counter");

button.addEventListener("click", function () {
  counter++;
  console.log(counter);
  button.textContent = `Counter:${counter}`;
});
