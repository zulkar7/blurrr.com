const themeSwitch = document.getElementById('theme-switch');
    const body = document.body;

    themeSwitch.addEventListener('change', () => {
        body.classList.toggle('dark-theme');
    });

    const refreshButton = document.getElementById('refresh-button');
    refreshButton.addEventListener('click', () => {
        // Add logic for refreshing content or page
        location.reload();
    });
// For loader
    document.addEventListener("DOMContentLoaded", function () {
        // The DOMContentLoaded event ensures that the loader script runs after the DOM is fully loaded.

        // Get references to the loader and content
        const loaderWrapper = document.querySelector('.loader-wrapper');
        const content = document.querySelector('main'); // Adjust this selector based on your actual content structure

        // Simulate content loading (you can replace this with actual loading logic)
        setTimeout(function () {
            // Hide the loader
            loaderWrapper.style.display = 'none';

            // Show the content
            content.style.display = 'block';
        }, 2000); // Adjust the timeout duration based on your content loading time
    });

    // for booking appointment in clinic