const num = 71;
const reverse = (num) => parseInt(String(num)
.split("")
.reverse()
.join(""));
console.log(reverse(num));