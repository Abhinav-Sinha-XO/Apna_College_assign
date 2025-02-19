// // Q1
// let p = document.querySelector("p")

// p.addEventListener('scroll', function(){
//    Element.scroll(0,1000)
// })


// // Q2

// let btn = document.querySelector("button")

// btn.addEventListener("click", function(e) {
//   btn.style.backgroundColor = "blue"
// })

// Q3

let inputField = document.getElementById("nameInput");
let displayHeading = document.getElementById("displayName");

inputField.addEventListener("input", function () {
            
let filteredValue = inputField.value.replace(/[^a-zA-Z\s]/g, "");
inputField.value = filteredValue;             displayHeading.textContent = filteredValue || "Your Name Appears Here"; })