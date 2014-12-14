var temp = 0;

function styleChecker() {
    var $styleForm = $('#new_style');
    if (!$styleForm[0]) return;

    $('#errorBox').hide();
    $('#loadingBlock').hide();

    $('#new_style').on('submit', function() {
        $('#output').empty();
        $('#errorBox').hide();
        $('#loadingBlock').show();
        progressLoad();

    }).on('ajax:complete', function(xhr, status) {
        var response = status.responseJSON;
        if (status.status == 200) {
            $('#output').html(response.html);
            $('#loadingBlock').hide();
            $("#tips li").hide();
        }
        else {
            $('#errorBox').show();
            $('#error').text(response.error);
            $('#loadingBlock').hide();
            $("#tips li").hide();
        }
    });
}

$(document).ready(styleChecker);
$(document).on('page:load', styleChecker);

function progressLoad()
{
  var progressBar = $('#loadingBar'),
  width = 0;

  progressBar.width(width);

  var interval = setInterval(function() {

    width += 10;

    progressBar.css('width', width + '%');
    showTips();
    if (width >= 100) {
      clearInterval(interval);
    }
  }, 1000)
}

function showTips()
{
  var ran = temp + 1;
  temp = ran;
  if ($("#loadingBar").is(":visible"))
  {
    $("#tips li").hide();
    $("#tips li:nth-child(" + ran + ")").fadeIn("fast");
  }
}
