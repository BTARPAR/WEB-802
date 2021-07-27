// Generate the Partners Icons START
var fileNames = []
var photos = []
var imageList = []

var listOfAlternate = [
  'Bus Tours',
  'cabin Rental',
  'Camping Adventure',
  'College Tours',
  'Bike Rentals',
  'Tour Group']
var listOfImages = [
  'bustour',
  'cabinrental',
  'campingadv',
  'collegetours',
  'rentalbike',
  'tourgroup'
]
var openList = `<li class="partner">`
var closeList = '</li>'

for (var i = 0; i < 6; i++) {
  fileNames.push(`partner-${listOfImages[i]}.png`) // Will create all 6 images that we just comment it put
  photos.push(`<img src=images/partners/${fileNames[i]} alt='${listOfAlternate[i]}'>`)
  image = openList + photos[i] + closeList
  imageList.push(image)
}
document.getElementById('partners').innerHTML = imageList.join(' ')
// Generate the Partners Icons END
