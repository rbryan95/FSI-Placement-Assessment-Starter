// Select some elements...

console.log('JavaScript loaded!')



// tell your name
let yourName = "Bryan Rosado" 

// Define Variable 
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// selecting the element 
const credit = document.querySelector('#credit')
const gbPlusBtn = document.querySelector('#add-gb')
const gbMinusBtn = document.querySelector('#minus-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')
const sugarMinusBtn = document.querySelector('#minus-sugar')
const gBDisplay = document.querySelector('#qty-gb')
const cCDisplay = document.querySelector('#qty-cc')
const sugarDisplay = document.querySelector('#qty-sugar')
const Totalqty = document.querySelector('#qty-total')

// Code to update name display
credit.textContent = `Created by ${yourName}`

//  "+" button for Gingerbread cookies

gbPlusBtn.addEventListener('click', function() {
    gb++;
    updateTotal()
gBDisplay.textContent = gb
})

//  "-" button for Gingerbread cookies

gbMinusBtn.addEventListener('click', function() {
    if(gb>0) {
        gb--;
        updateTotal()
    gBDisplay.textContent = gb
    }
})

//  "+" button for Chocolate Chip
ccPlusBtn.addEventListener('click', function() {
    cc++;
    updateTotal()
cCDisplay.textContent = cc
})

//  "-" button for Chocolate Chip

ccMinusBtn.addEventListener('click', function() {
    if(cc>0) {
        cc--;
        updateTotal()
    cCDisplay.textContent = cc 
    }
})

//  "+" button for Sugar
sugarPlusBtn.addEventListener('click', function() {
    sugar++;
    updateTotal()
sugarDisplay.textContent = sugar
})

//  "-" button for Sugar

sugarMinusBtn.addEventListener('click', function() {
    if(sugar>0) {
        sugar--;
        updateTotal()
    sugarDisplay.textContent = sugar
    }
})

// Total qty

function updateTotal(){
  let total = gb+cc+sugar
  Totalqty.textContent = total

  }

