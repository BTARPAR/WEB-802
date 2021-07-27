$(document).ready(function () {

  var flat2 = $('#flat2').flipster({
    style: 'flat',
    spacing: -0.2,
    // start specifies the start index, default is 'center'
    // start: 0,
    // set loop to true for it to keep playing, default is false
    loop: false
  })
  // Can research flipster functions at https://github.com/drien/jquery-flipster/
  // flat.flipster('play', 2000)
  // flat.flipster('index')

  // jQuery to remove, clone, and add images from the thumbnail as they are clicked
  $('#flat2 img').click(function () {
    if ($('#flat2 img').hasClass('active')) {
      $('#flat2 img').removeClass('active')
    }
    var clone = $(this).clone()
    if (clone) {
      $(this).addClass('active')
    }
    if ($('#bigPicture2').has('img')) {
      $('#bigPicture2 img').remove()
      clone.appendTo('#bigPicture2')
    }

  })
})
