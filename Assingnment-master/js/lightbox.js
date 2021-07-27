$(document).ready(function () {

  /* Open lightbox on button click */
  $('.hover-effect img').click(function () {
    $('.backdrop').animate({'opacity': '.50'}, 300, 'linear').css('display', 'block')
    $('.box').fadeIn()

    //Check if lightbox has an image
    if ($('.box').contents('img')) {
      $('.box').contents().remove('img') //If true, clear image
    }

    //Get text content in attribute
    let getAllImage = document.getElementsByTagName('img')
    const $altvalue = $(this).attr('alt') //or const altvalue = $(this).attr('alt');
    const findIndex = Array.from(getAllImage).findIndex((imgTag) => imgTag.alt === $altvalue)
    const img = $(getAllImage[findIndex]).clone() //Duplicate DOM element
    $('.box').append(img) //Insert duplicated element in another element
  })

  /* Click to close lightbox */
  $('.close, .backdrop').click(function () {
    $('.backdrop').animate({'opacity': '0'}, 300, 'linear', function () {
      $('.backdrop').css('display', 'none')
    })
    $('.box').fadeOut()
  })

})
