function styleChecker() {
    var $styleForm = $('#new_style');
    if (!$styleForm[0]) return;

    $('#errorBox').hide();
    $('#loadingBlock').hide();

    $('#new_style').on('submit', function() {
        $('#output').empty();
        $('#errorBox').hide();
        $('#loadingBlock').show();
        progressload();

    }).on('ajax:complete', function(xhr, status) {
        var response = status.responseJSON;
        if (status.status == 200) {
            $('#output').html(response.html);
            $('#loadingBlock').hide();
        }
        else {
            $('#errorBox').show();
            $('#error').text(response.error);
        }
    });
}

$(document).ready(styleChecker);
$(document).on('page:load', styleChecker);
function progressload()
{
  var progressBar = $('#loadingBar'),
  width = 0;

  progressBar.width(width);

  var interval = setInterval(function() {

    width += 10;

    progressBar.css('width', width + '%');

    if (width >= 100) {
      clearInterval(interval);
    }
  }, 1000)
}
