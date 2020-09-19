var a = ["DOta", "Lol", "Csgo","Pubg"];

console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);

a.push("DOta");
a.push("Lol");
a.push("Csgo");
a.push("Pubg");
console.log(a.pop());
console.log(a.pop());
console.log(a.pop());
console.log(a.pop());
console.log(a.shift());
console.log(a.shift());
console.log(a.shift());
console.log(a.shift());

var c = [1 , 10 , 12, 100, 300, 20 , 23, 4, 1000, 43, 32];
var sum = 0;
console.log(Math.min(...c));
console.log(Math.max(...c));
for (let step=0; step < c.length; step ++){
  sum = sum + (c[step]);
}
console.log(sum / c.length)


 