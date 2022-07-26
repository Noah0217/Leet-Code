const num = 71;
const reverse = (num) => parseInt(String(num)
.split("")
.reverse()
.join(""), 10);
console.log(reverse(num));