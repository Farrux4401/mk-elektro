import $ from 'jquery';


$(function () {
    const $catalogButton = $('.header-block__catalog');
    const $catalogDropdown = $('.catalog-dropdown');
    const $catalogBg = $(".catalog-bg")
    


    // Toggle dropdown and background on button click
    $catalogButton.on('click', function (e) {
        e.stopPropagation();
        $catalogDropdown.slideToggle(200);
        $catalogBg.toggle();
    });

    // Close dropdown and hide background when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.catalog-dropdown').length && !$(e.target).closest('.header-block__catalog').length) {
            $catalogDropdown.slideUp(200);
            $catalogBg.hide();
        }
    });

    // Prevent dropdown from closing when clicking inside it
    $catalogDropdown.on('click', function (e) {
        e.stopPropagation();
    });
});


$(document).ready(function () {
    // Toggle the dropdown menu for the clicked dropdown only
    $(".dropdown-toggle").click(function (event) {
        event.preventDefault();

        // Close any open dropdowns except for the one clicked
        $(".dropdown-menu").not($(this).next(".dropdown-menu")).hide();

        // Toggle the dropdown menu for the clicked button
        $(this).next(".dropdown-menu").toggle();
    });

    // Close dropdowns if clicking outside of them
    $(document).click(function (event) {
        if (!$(event.target).closest(".dropdown").length) {
            $(".dropdown-menu").hide();
        }
    });
});


$(function () {
    const $dropdownItem = $(".dropdown-item");
    const $catalogContent = $(".catalog-content");
    let hoverTimeout;

    // Show catalog content with delay when hovering over dropdown item
    $dropdownItem.on('mouseenter', function () {
        clearTimeout(hoverTimeout);
        $catalogContent.addClass("visible");
    });

    // Hide catalog content with slight delay to prevent flickering
    $(".dropdown-item, .catalog-content").on('mouseleave', function (e) {
        hoverTimeout = setTimeout(() => {
            if (!$(e.relatedTarget).closest('.dropdown-item').length &&
                !$(e.relatedTarget).closest('.catalog-content').length) {
                $catalogContent.removeClass("visible");
            }
        }, 200);
    });

    // Keep content visible when moving between items
    $catalogContent.on('mouseenter', function () {
        clearTimeout(hoverTimeout);
    });
});


