console.log("AdaLens content script loaded on this page.");

img_list = document.querySelectorAll('img');
valid_imgs = [];

valid_imgs.forEach(img => {
    if (img.isAccessible == false) {
        console.log('Image not accessible: ' + img);
    }
});


const isAccessible = (img) => {
    if (img.hasAttribute('alt') || !(img.getAttribute('alt') == "")) {
        return true;
    }

    if (img.getAttribute('aria-hidden') == true || img.getAttribute('role') == 'presentation') {
        return true;
    }

    if (img.getAttribute('display') == 'none' || img.getAttribute('visibility') == 'hidden') {
        return true;
    }

    return false;
};