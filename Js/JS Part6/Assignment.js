// Q1
let arr = [1,2,4,6,7,9,2,4,5,7,5]
let num = 3

function getElements(arr,num){
  for(let i = 0; i<arr.length; i++){
    if(arr[i]>num){
      console.log(arr[i])
    }
  }

}
getElements(arr,num)


// Q2
let str ="abcdabcdefgggh";

function getUnique(){
  let arr = "";
  for(let i = 0; i<str.length; i++){
    let eachletter = str[i];
    if(arr.indexOf(eachletter) == -1){
      arr+=eachletter
    }
    
  }
  return arr

}

const x = getUnique()
console.log(x)

// Q3

let country=["Australia","Germany","UnitedStatesofAmerica"]
function longestName(country){
  let max = 0
  for(let i =0; i<country.length; i++){
    let ansStr = country[max].length
    let currStr = country[i].length
    if(currStr>ansStr){
      max = i
    } 
  }
  return country[max]
}

let getString = longestName(country)
console.log(getString)


// Q4

let string = "abcdefghijkl"

 

function onlyvowels(string){
  let count = 0
  for(let i=0; i<string.length; i++){
    if(string.charAt(i) == "a"||
        string.charAt(i) == "a"||
        string.charAt(i) == "a"||
        string.charAt(i) == "a"||
        string.charAt(i) == "a"
  ){
    count++
  }
  }
  return count;


}



// Q5
let start = 100;
let end = 200;

function generaterandom(start,end){
  let diff = end - start
  return Math.floor(Math.random() * diff) +start;
}