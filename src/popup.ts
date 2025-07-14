document.addEventListener('DOMContentLoaded', () => {
    // Find the button in the popup
    const optionsButton = document.getElementById('openOptions');

    // Add a click event listener
    optionsButton?.addEventListener('click', () => {
        // This Chrome API command opens the extension's options page in a new tab
        chrome.runtime.openOptionsPage();
    });
});

