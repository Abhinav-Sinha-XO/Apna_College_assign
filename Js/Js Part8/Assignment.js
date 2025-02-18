// q1

let nums = [1,2,3,4,5];

const square = nums.map((num) => num * num);
console.log(square);
let sum = square.reduce((acc, cur) => acc + cur, 0);

let avg = sum/nums.length;

console.log(avg);


// Q2

const arr = [1,2,4,5,6,7,8]

let newarr = arr.map((num)=> num +5)

console.log(newarr)

// Q3

let arr3 = ['hi','heelo','php']

let arr5 = arr3.map((value)=> value.toUpperCase())

console.log(arr5)

// Q4
const  doubleAndReturnArgs(arr, ...args)=>[
  ...arr,
  ...args.map((v)=>v * 2);

]

// Q5

const mergeObjects = (obj1,obj2)=>({...obj1, ...obj2})
