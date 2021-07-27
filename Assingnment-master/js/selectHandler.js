const optionSelected = () => {
  const selected = document.getElementById('contact-select').value.toLowerCase()
  const addInput = document.getElementById('option-selected')
  if (!(selected === 'select one')) {
    const label = document.createElement('label')
    label.innerText = `Enter your ${selected}`
    const input = document.createElement('input')
    input.type = 'text'
    input.name = selected + '-option'

    if (selected === 'email') {
      input.placeholder = 'johndoe@gmail.com'
    }
    if (selected === 'phone') {
      input.placeholder = 'xxx-xxx-xxxx'
    }
    addInput.innerHTML = null
    addInput.appendChild(label)
    addInput.appendChild(input)
  } else {
    addInput.innerHTML = null
  }
}

document.getElementById('contact-select').addEventListener('change', optionSelected)
