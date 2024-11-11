import select2 from 'select2';

$(function () {
    $('#js-example-basic-single').select2({
        placeholder: "Введите текст",
        allowClear: false
    });
});

$('#js-example-basic-single').one('select2:open', function (e) {
    $('input.select2-search__field').prop('placeholder', 'Введите текст');
});