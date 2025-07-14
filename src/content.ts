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
            if (res && res.success) {
                console.log("Received description:", res.description);
                img.alt = res.description.description;
                img.setAttribute('aria-label', res.description.description);
            } else {
                console.error('Failed to get description: ', res.error);
            }
        } catch (error) {
            console.error("Error sending message or getting response:", error);
        }
    }
});

function isAccessible(img: HTMLImageElement) {
    // Check for a meaningful, non-empty alt
    const alt = img.getAttribute('alt');
    if (alt !== null && alt.trim() !== "") {
        return true;
    }

    // Check for ARIA attributes
    if (img.getAttribute('aria-hidden') === 'true' || img.getAttribute('role') === 'presentation') {
        return true;
    }

    // Check if its hidden
    const style = window.getComputedStyle(img);
    if (style.display == 'none' || style.visibility == 'hidden') {
        return true;
    }

    const opacity = parseFloat(style.opacity);
    if (opacity == 0 || opacity < 0.05) {
        return true;
    }
    
    // Check if Image is too small
    if (img.clientWidth < 50 || img.clientHeight < 50) {
        return true;
    }

    // Img failed to load or no src
    if (!img.complete || img.naturalHeight === 0 || img.naturalWidth === 0 || !img.currentSrc) {
        return true;
    }
    
    return false;
};