// Page request API Call
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.action == 'analyzeImage') {
        const imageUrl = message.imageUrl;

        console.log('Analyzing Image URL:', message.imageUrl)
        fetchImageDescription(imageUrl)
            .then(description => {
                // On success, send description
                sendResponse({ success: true, description: description});
            })
            .catch(error => {
                // On failure
                sendResponse({ success: false, error: error.message });
            });
    }
    return true;
});

interface ImageDescription {
    description: string;
}

async function fetchImageDescription(imageUrl: string): Promise<ImageDescription> {
    const url = 'http://127.0.0.1:5000/analyze-image';
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ imageUrl: imageUrl}),
        });

        if (!res.ok) {
            throw new Error('HTTP error!')
        }

        const data = await res.json();

        if (!data.description) {
            throw new Error("API did not return description.")
        }

        return data;
    } catch (error) {
        console.error("API Calling Error: ", error);
        throw error;
    }
}