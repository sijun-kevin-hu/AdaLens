
const img_list = document.querySelectorAll('img');
let valid_imgs: HTMLImageElement[];

console.log(img_list);

img_list.forEach(async img => {
    if (!isAccessible(img as HTMLImageElement)) {
        console.log('Image not accessible: ' + img);
        const img_url = img.getAttribute('src');

        try {
            const res = await chrome.runtime.sendMessage({
                action: "analyzeImage",
                imageUrl: img_url
            });
            console.log("Received description:", res.description);
        } catch (error) {
            console.error("Error sending message or getting response:", error);
        }
    }
});


function isAccessible(img: HTMLImageElement) {
    if (img.hasAttribute('alt') && (img.getAttribute('alt') !== "")) {
        return true;
    }

    if (img.getAttribute('aria-hidden') == 'true' || img.getAttribute('role') == 'presentation') {
        return true;
    }

    const display = window.getComputedStyle(img).display;
    const visibility = window.getComputedStyle(img).visibility;
    if (display == 'none' || visibility == 'hidden') {
        return true;
    }

    const opacity = parseFloat(window.getComputedStyle(img).opacity);
    if (opacity == 0 || opacity < 0.05) {
        return true;
    }
    
    // Img is not loaded
    if (!img.complete || img.naturalHeight === 0 || img.naturalWidth === 0) {
        return true;
    }
    return false;
};