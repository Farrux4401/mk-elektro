import select2 from 'select2';

$(function () {
    $('.search-select').select2({
        placeholder: "Введите текст",
        allowClear: false
    });
});
