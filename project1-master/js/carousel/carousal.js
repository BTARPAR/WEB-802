$(document).ready(function () {

  var flat = $('#flat').flipster({
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
  $('#flat img').click(function () {
    if ($('#flat img').hasClass('active')) {
      $('#flat img').removeClass('active')
    }
    var clone = $(this).clone()
    if (clone) {
      $(this).addClass('active')
    }
    if ($('#bigPicture').has('img')) {
      $('#bigPicture img').remove()
      clone.appendTo('#bigPicture')
    }

  })
})
