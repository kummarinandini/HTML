

let names=[2,4,5,6,8,9,12,34,51,23,19,35,64,86];

//Even Number
let even = names.filter((ele) => ele % 2 == 0);
console.log((even));

// Odd Numbers
let odd = names.filter((ele) => ele % 2 == 1);
console.log(odd);

//Max From ODD
let max = Math.max(...odd.values());
console.log(max);     

//Min From Even
let min = Math.min(...even.values());
console.log(min);  



//Sum of All Numbers 
const total = names.reduce((prev, curr) => prev + curr, 0);
console.log(total);


