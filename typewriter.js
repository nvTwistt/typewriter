const sentance = "hello there from lighthouse labs";
let x = 0;
for (const char of sentance) {
  setTimeout(() => {
    console.log(char);
  }, x);
  x += 50;
}