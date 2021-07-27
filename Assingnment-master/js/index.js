// Generate the Partners Icons START
const fileNames = []
const photos = []
const imageList = []
let showModal = false // To show and hide the modal

const listOfAlternate = [
  'Family of Cats',
  'Poodle',
  'Chihuahua',
  'Baby German Shepherd',
  'Munchkin Cat',
  'A family of Dog & Cat',
  'Family of baby dog and cat',
  'Labrador Family',
  'Almost entire pet family',
  'Family of adopted pet'
]

const petName = [
  'Daffy',
  'Cuddles',
  'Brat',
  'Junior',
  'Malibu',
  'Dori Omelette Rose Alvin',
  'Tamera Glitter Claudia Porker',
  'Tonic Critter Spur Isabelle Fester',
  'Harry Nelly Shelby Pulsar',
  'Jena Wobble Rasta Kabuki Shakira Kramer',
  'Dexter Bolton Biscuit Corby Brandy Geneva Trinity Fay Tiki Cuddles'
]

const aboutPet = [
  'He\'s smart and likes to figure things out. He\'s is playful and can entertain himself for hours on end with any items found on the floor. He\'s usually silent except when he needs something. His favourite food is endive and as a special treat, he likes to eat pear. He also likes to eat egg boxes.',
  'This sociable dog is friendly toward her owner, and hates to be apart from them. She immediately gets involved with the personal belongings of any new person who enters her space, and will happily play with other animals.',
  'He\'s very slow. He\'s is slightly playful and can entertain himself for hours on end with any items found on the floor. His favourite food is zucchini squash but he likes to eat his chew toys as well.',
  'She\'s very slow and can be taught with some patience. She often gets exceptionally dirty and requires baths often. She is extremely playful and is always willing; playtime is very hectic. She likes to talk at people.',
  'She\'s bright and can easily open containers. She\'s is slightly playful and can entertain herself for hours on end with random objects. She\'s usually very quiet.'
]

const closeList = '</li>'
const captionStartTag = '<span>'
const captionEndTag = '</span>'

for (let i = 0; i < 10; i++) {
  // Creation of the Description
  const descTextsElement = `<span class="description" onclick="openModal(${i})">${petName[i]}</span>`
  // Creation of the CaptionText
  const captionTextsElement = captionStartTag + listOfAlternate[i] + captionEndTag

  fileNames.push(`pet-${i + 1}.jpg`) // Will create all 10 images that we just comment it put
  photos.push(`<div class="hover-effect"><img src=images/pets/${fileNames[i]} alt='${listOfAlternate[i]}'>${descTextsElement}</div>`)
  image = `<li class=photo${i + 1}>` + photos[i] + captionTextsElement + closeList
  imageList.push(image)
}

document.getElementById('gallery-view').innerHTML = imageList.join(' ')
// Generate the Partners Icons END
const openModal = (index) => {
  if (!showModal) {
    const background = document.createElement('div')
    background.className= 'modal-background'
    // Add information first and then SHOW the modal
    document.getElementById('modal-header').innerText = petName[index]
    document.getElementById('modal-content').innerText = aboutPet[index % 5]
    document.body.appendChild(background)
    document.body.style.overflow = 'hidden'
    document.getElementById('modal-popup').classList.remove('hide')
    showModal = !showModal
  }
}
const closeModal = () => {
  if (showModal) {
    // Hide Modal
    const body = document.body
    document.body.removeChild(body.childNodes[body.childNodes.length - 1])
    document.body.style.overflow = null
    document.getElementById('modal-popup').classList.add('hide')
    showModal = !showModal
  }
}
