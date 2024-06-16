const input = document.querySelectorAll(".input");
console.log(input);

function focusFun() {
  let parent = this.parentNode.parentNode;
  console.log(this);
  parent.classList.add("focus");
}

function blurFun() {
  console.log(this);
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

input.forEach((element) => {
  element.addEventListener("focus", focusFun);
    element.addEventListener("blur", blurFun);
});
