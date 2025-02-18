// Q1
let array = [1,2,3,4,5,6,7]

const arrayAverage = (array)=>{
  let total = 0
  for(num in array){
    total += num
  }
  return total/array.length
}


// Q2

const isEven = (n)=>{
  if(n%2 == 0){
    return console.log("even")
  }else{
    return console.log("odd")
  }
}

isEven(6)