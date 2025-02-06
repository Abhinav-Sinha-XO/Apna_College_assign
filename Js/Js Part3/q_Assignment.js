//Q1

let array = [7,9,0,-2,8,1,4,5,6,7]
n=6
let ans = array.slice(0,n)
console.log(ans)


// Q2
let array2= [7,9,0,-2,8,1,4,5,6,7]
n= 4
let lastnelements = array2.slice(array2.length - n)
console.log(lastnelements)

//Q3
let x =[]
if(x.length == 0){
  console.log("Empty")

}else{
  console.log("not empty")
}

// Q4

let str = "Abhinav"
let index = 2

if(str[index] == str[index].toLowerCase()){
  console.log("String is lowecase")
}else{
  console.log("Uppercase")
}

// Q5
let str1 = '             daskjflkajfajf              '
let trimm=str1.trim()
console.log(trimm)

// Q6

let arr = ['faf','dsadsa',1,2,5,6,2]
let element = 5

if(arr.indexOf(element)!=-1){
  console.log("Exist")

}else{
  console.log("Doesnt exist")
}
