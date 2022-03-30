let x = 0;
let arr = [];

function addElement() {
  arr[x] = document.getElementById("t1").value;
  x++;
  document.getElementById("t1").value = "";

  console.log(arr);
}
function display() {
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    output += `Element${i}=${arr[i]}<br>`;
    console.log(output);
    document.getElementById("Result").innerText = output;
  }
}
