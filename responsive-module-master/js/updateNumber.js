$(document).ready(function () {
  $('textarea#exampleFormControlTextarea1').on('input', (event) => {
    $('#updateBadge').text($('textarea#exampleFormControlTextarea1').val().length)
  })
})
