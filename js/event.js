const keyName = document.getElementById("key-name");
const keyCode = document.getElementById("key_code");

window.addEventListener("keydown", (e) => {
  console.log(e);
  Text.style.display = "none";
  keyName.innerText = e.key === " " ? "space" : e.key;
  keyCode.innerText = e.keyCode;
});
