// Page request API Call
chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
    if (message.action == 'analyzeImage') {
        console.log('Analyzing Image...');
        sendResponse({
            description: 'Got it!'
        })
    } else {
        console.log('Message isn\'t right:', message);
        sendResponse({
            description: 'Don\'t dont it'
        });
    }
    return true;
});