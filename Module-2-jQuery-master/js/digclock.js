// Digital Clock Start
function currentTime() {
  var d = new Date()
  var hr = d.getHours() // Get current hour
  var min = d.getMinutes() // Get current minutes
  var sec = d.getSeconds() // Get current seconds
  var ampm // 12-HR Time

  var utchr = d.getUTCHours()
  var timeDiff = hr - utchr
  var adjTimeDiff = timeDiff < 0 ? (utchr - hr) : timeDiff
  var timeZone

  switch (24 - adjTimeDiff) { // convert it to match specific timezone
    case 8:
      timeZone = 'PT'
      break
    case 7:
      timeZone = 'MT'
      break
    case 6:
      timeZone = 'CT'
      break
    case 5:
      timeZone = 'ET'
      break
    default:
      timeZone = 'GMT'
  }
  // Add Zero to single digits for seconds
  if (sec < 10) {
    sec = '0' + sec
  }

  // Add Zero to single digits for minutes
  if (min < 10) {
    sec = '0' + min
  }

  // Determine AM/PM string
  if (hr == 12) {
    ampm = 'PM'
  } else if (hr > 12) {
    hr -= 12
    ampm = 'PM'
  } else {
    ampm = 'AM'
  }
  var time = hr + ':' + min + ':' + sec + ' ' + ampm + ' ' + timeZone
  document.getElementById('clock').innerText = time
}

// Digital Clock END

currentTime()
//Run time data function every 1 second
setInterval(currentTime, 1000)
