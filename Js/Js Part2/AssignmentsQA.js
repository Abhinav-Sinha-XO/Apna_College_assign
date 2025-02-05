// Q1
const num = 10;
if(num/10 == 0){
  console.log("good")

}else{
  console.log("bad")
}

// Q2

// let firstname = prompt('enter first name')
// let age = prompt('enter age')

// const msg = `${firstname} age is ${age}`
// alert(msg)

// Q3
const Quarter = 1;

switch(Quarter){
  case 1: console.log("january , February, March");
  break;
  case 2: console.log("April, May,JUne");
  break;
  case 3: console.log('July,August,September')
  break;
  case 4: console.log('October, November,December')
  break;
  default:
    console.log("wrong input")
}


// Q4

const goldenstring = 'applee'

if(((goldenstring[0]=== 'A'||goldenstring[0]==='a')&& goldenstring.length>5 )){
  console.log("It is golden")
}else{
  console.log("It is not golden")
}

// Q5

let a = 9
let b = 3
let c = 4

if(a>b){
  if(a>c){
    console.log("a largest")
  }else{
    console.log("c largest")
  }
}else{
  if(b>c){
    console.log('b largest')
  }else{
    console.log("c largest")
  }
}

// Q6
let num1 = 32;
let num2 =  47852;

if((num1%10 === 0 ) == (num2%10 === 0) ){
  console.log("number have same last digit")
  
}else{
  console.log("Diff last digit")
}