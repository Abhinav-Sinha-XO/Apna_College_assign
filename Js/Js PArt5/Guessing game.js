const max = prompt("enter the max value")

const randomnum = Math.floor(Math.random() * max ) +1

let guess = prompt("Enter the number") 

while(true){
  if(randomnum == guess){
  console.log("you guessed the right num", randomnum)
  break

}if(guess == "quit"){
  console.log("You quitted")
  break
}else{
  guess = prompt("Enter the number again") 
}

}

