$(document).ready(function () {
  // Click only on those <td> which does not contains Not Available text
  $('td:not(:contains("Not Available"))').click(function (event) {
    //get index of the value just clicked
    // get the th specific to that particular index
    // and from that text retrieve the innerText as a location
    const location = $('th').get($(this).index()).innerText
    $(this).toggleClass('green')

    //get value of the element that just clicked
    const content = $(this).text()
    // common selector
    const displaySelected = $('#displaySelected')
    // check if the element is clicked or not
    if ($(this).hasClass('green')) {
      // show the box
      displaySelected.css('visibility', 'visible')
      displaySelected.css('margin-top', '2em')
      $('#result').append(`<p>${content} at ${location}</p>`)
    } else {
      // remove element from selected list
      $(`#result p:contains(${content})`).remove()

      // check if there is any child p in the elemnt with id result
      if ($('#result').has('p').length === 0) {
        displaySelected.css('visibility', 'hidden')
        displaySelected.css('margin-top', '0')
      }
    }
  })
  // Change mouse pointer on hover when, <td> is not first-child in any element
  // And should not contains Not Available text
  $('td:not(:first-child, :contains("Not Available"))').hover(function () {
    $(this).css('cursor', 'pointer')
  })
})
