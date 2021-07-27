/* ------- RANDOM CODES ------ */

// function to generate combination of characters
var code = ''
var getCode = ''
var btnValue = ''
// Creae a varibale to hold the type of characters
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#$'

function generateCode() {
  var charactersLength = str.length
  for (var i = 0; i < 8; i++) {
    // Generate random index
    var char = Math.random() * charactersLength
    // get character from the particular index of str
    code += str.charAt(char)
  }
  return code
}

// Get HTML element to display
document.getElementById('codes').innerHTML = generateCode()

// Disabled Button
function disableButton(btnValue) {
  document.getElementById('submit').disabled = btnValue
  if (btnValue === true) {
    document.getElementById('submit').style.backgroundColor = 'rgba(73, 119, 209,0.3)'
    document.getElementById('submit').style.color = 'rgba(255, 255, 255,0.5)'
  } else {
    document.getElementById('submit').style.backgroundColor = 'rgba(73, 119, 209,1)'
    document.getElementById('submit').style.color = 'rgba(255, 255, 255,1)'
  }
}

var codebox = document.getElementById('codeentered')
codebox.addEventListener('input', evaluteCode)

function evaluteCode() {
  console.log('hi')
  getCode = document.getElementById('codeentered').value
  var charset1 = getCode.trim() // remove space from before fisrt index and last index of the string
  var charset2 = code.trim() // remove space from before fisrt index and last index of the string
  console.log({charset1, charset2})
  if (charset1.length === charset2.length && charset1 === charset2) {
    disableButton(false)
  } else {
    disableButton(true)
  }
}
