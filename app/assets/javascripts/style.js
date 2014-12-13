function styleChecker() {
    var $styleForm = $('#new_style');
    if (!$styleForm[0]) return;

    $('#new_style').on('submit', function() {
        $('#output').empty();
    }).on('ajax:complete', function(xhr, status) {
        var response = status.responseJSON;
        $('#output').html(response.html);
    });
}

$(document).ready(styleChecker);
$(document).on('page:load', styleChecker);
