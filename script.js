let a = prompt("Введіть число");
for (let i = 0; i < a; i = i + 5) {
  if (a < 5) {
    alert("Sorry,no numbers");
  } else if ((a % 1 == 0) == true) {
    console.log(i);
  }
}

if ((a % 1 == 0) == false) {
  let b = prompt("Введіть число знову");
  for (let j = 0; j < b; j = j + 5) {
    console.log(j);
  }
}
