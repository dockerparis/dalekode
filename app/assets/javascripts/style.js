var temp = 0;

function styleChecker() {
    var $styleForm = $('#new_style');
    if (!$styleForm[0]) return;

    $('#errorBox').hide();
    $('#loadingBlock').hide();

    var loading = null;
    $('#new_style').on('submit', function() {
        $('#output').empty();
        $('#errorBox').hide();
        loading = progressLoad();

    }).on('ajax:complete', function(xhr, status) {
        if (loading) {
            clearInterval(loading);
            loading = null;
        }

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

function progressLoad() {
  var progressBar = $('#loadingBar'),
      width = 0;

  progressBar.width(width);

  $('#loadingBlock').show();
  return setInterval(function() {
    if (width >= 100)
        width = 0;
    else
        width += 10;

    progressBar.css('width', width + '%');
    showTips();
  }, 1000);
}

function showTips() {
  var ran = temp + 1;
  temp = ran;
  if ($("#loadingBar").is(":visible")){
    $("#tips li").hide();
    $("#tips li:nth-child(" + ran + ")").fadeIn("fast");
  }
}
