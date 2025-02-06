// // Q1

// let arr = [1,2,3,4,5,6,2,3]
// let num = 2

// for (let i =0; i<arr.length; i++){
//   if(arr[i] == num){
//     arr.splice(i,1)
    
//   }
// }
// console.log(arr)


// Q2
// let number = 287152
// let count = 0
// while(number>0){
//   count++
//   number = Math.floor(number/10)
// }
// console.log(count)


// Q3
// let number = 287152
// let sum = 0
// let copy = number

// while(copy>0){
//   let x = copy % 10
//   sum +=x
//   copy = Math.floor(copy/10)
// }

// console.log(sum)



// let n=7
// let factorial =1
// for(let i=n; i>0; i--){
//   factorial *=i
  
// }

// console.log(factorial)


// Q5

let arr = [1,2,4,5,6,8,3]

let largestnum = arr[0]

for(let i = 0; i < arr.length; i++) {
  if(arr[i] > largestnum) {
    largestnum = arr[i]
  }
}

console.log(largestnum)