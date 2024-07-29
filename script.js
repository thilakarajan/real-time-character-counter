$(document).ready(function () {
  $('textarea').on('input', function () {
    var text = $(this).val()
    var letter = text.split('')
    var lettercount = letter.length
    var count = document.getElementById('count')
    var rem = document.getElementById('rem')
    count.innerHTML = lettercount
    rem.innerHTML = 50 - lettercount
  })
})
