/*const fruits = ['apples', 'banana', 'orange'];
for(i=fruits.length-1;i>=0;i--){
    console.log(fruits[i]);
}
*/
/*for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log('i',i,'j',j);
    }
}*/
for (let i = 0; i < 3; i++) {
  let x = "";
  for (let j = 1; j <= 3; j++) {
    x += j;
  }
  console.log(x);
}
console.log(" ")
for (let i = 1; i <= 4; i++) {
  let x = "";
  for (let j = 1; j <= i; j++) {
    x += j;
  }
  console.log(x);
}
console.log(" ")
for (let i = 3; i >= 1; i--) {
  let x = "";
  for (let j = 1; j <= i; j++) {
    x += "* ";
  }
  console.log(x);
}

console.log(" ");
let n= 5; 
for (let i= 1; i<=n; i++) {
  let x = "";
  for (let j= 1; j<=n; j++) {
    if (i==1 || i==n || j==1 || j==n) {
      x += "*";
    } else {
      x += " ";
    }
  }

  console.log(x);
}
