import $ from 'jquery';


$(function () {
    const $catalogButton = $('.header-block__catalog');
    const $catalogDropdown = $('.catalog-dropdown');


    // Toggle dropdown on button click
    $catalogButton.on('click', function (e) {
        e.stopPropagation();
        $catalogDropdown.slideToggle(200);
    });

    // Close dropdown when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.catalog-dropdown').length && !$(e.target).closest('.header-block__catalog').length) {
            $catalogDropdown.slideUp(200);
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


$(document).ready(function () {
    // Show catalog content when hovering over any dropdown item
    $(".dropdown-item").mouseenter(function () {
        $(".catalog-content").addClass("visible");
    });

    // Hide catalog content when the mouse leaves both dropdown items and catalog content area
    $(".dropdown-item, .catalog-content").mouseleave(function () {
        $(".catalog-content").removeClass("visible");
    });
});

// ******************************************
$(document).ready(function () {
    // Show .menu-catalog when hovering over .dropdown-toggle
    $(".dropdown-toggle").hover(
        function () {
            $(".dropdown-item").addClass("_active"); // Add _active class on hover
        },
        function () {
            $(".dropdown-item").removeClass("_active"); // Remove _active class when mouse leaves
        }
    );

    // Optional: Keep .menu-catalog visible if hovering over it
    $(".dropdown-item").hover(
        function () {
            $(this).addClass("_active");
        },
        function () {
            $(this).removeClass("_active");
        }
    );
});