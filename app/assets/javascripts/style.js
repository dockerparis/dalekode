function styleChecker() {
    var $styleForm = $('#new_style');
    if (!$styleForm[0]) return;

    $('#errorBox').hide();

    $('#new_style').on('submit', function() {
        $('#output').empty();
        $('#errorBox').hide();
    }).on('ajax:complete', function(xhr, status) {
        var response = status.responseJSON;
        if (status.status == 200) {
            $('#output').html(response.html);
        }
        else {
            $('#errorBox').show();
            $('#error').text(response.error);
        }
    });
}

$(document).ready(styleChecker);
$(document).on('page:load', styleChecker);
