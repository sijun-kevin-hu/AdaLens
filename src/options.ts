const apiKeyInput = document.getElementById('apiKey') as HTMLInputElement;
const saveButton = document.getElementById('save');
const statusDiv = document.getElementById('status');

// Load the saved key when the options page opens
chrome.storage.sync.get(['geminiApiKey'], (result) => {
  if (result.geminiApiKey) {
    apiKeyInput.value = result.geminiApiKey;
  }
});

// Save the key when the button is clicked
if (saveButton) {
  saveButton.addEventListener('click', () => {
    const apiKey = apiKeyInput.value;
    chrome.storage.sync.set({ geminiApiKey: apiKey }, () => {
      if (statusDiv) {
        statusDiv.textContent = 'API key saved!';
        setTimeout(() => {
          statusDiv.textContent = '';
        }, 2000);
      }
    });
  });
}