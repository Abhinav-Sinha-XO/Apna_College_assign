let todo = []

let req = prompt("Enter your request here ")
while(true){
  if(req == 'quit'){
    console.log("qutiing app")
    break
  }

  if(req == 'list'){
    console.log("-------------")
    for(let i=0;i<todo.length;i++){
      console.log(i,todo[i])
    }
    console.log("-------------")
  } else if(req == 'add'){
    let element = prompt('enter activity here')
    todo.push(element)
    console.log("task added successfully")
  } else if(req == 'delete'){
    let idx = prompt("please enter the index of task u want to delete")
    todo.splice(idx,1)
  }

  req = prompt("Enter your request here ")
}