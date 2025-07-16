# AdaLens - AI-Powered Image Descriptions (Chrome Extension)

This repository contains the frontend code for the **AdaLens Chrome Extension**, a tool that automatically makes websites more accessible. It scans web pages for images missing descriptive alt text, uses the Google Gemini AI to generate a meaningful description, and applies it to the image, making the web more accessible for users who rely on screen readers.

This extension is the user-facing part of the project and communicates with a separate, secure [backend server](https://github.com/sijun-kevin-hu/AdaLens_Backend) to process images.

![AdaLens Options Page](https://i.imgur.com/j8nQ5yI.png)

## ✨ Key Features

- **Automatic Image Scanning:** Intelligently finds images that are inaccessible to screen readers.
- **AI-Generated Alt Text:** Leverages Google's Gemini AI to create context-aware descriptions for images.
- **Secure "Bring Your Own Key" Model:** Users provide their own API key, which is stored securely in the browser using `chrome.storage`.
- **User-Friendly Options:** A simple options page allows users to easily save and update their API key.
- **Modern Tech Stack:** Built with TypeScript and Vite for a fast and reliable development workflow.

## 🚀 How to Use

1. **Install the Extension:** Get AdaLens from the Chrome Web Store.
2. **Get an API Key:** Create a free API key at [Google AI Studio](https://aistudio.google.com/app/apikey).
3. **Add Your Key:** Right-click the AdaLens icon in your browser toolbar, select "Options," and paste your API key.
4. **Browse the Web:** AdaLens will now work automatically in the background to make images accessible!

## 🛠️ Local Development Setup

To run this extension locally for development or contributions:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/sijun-kevin-hu/AdaLens.git
    cd AdaLens
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Run the development build:**
    This command will watch for changes and automatically re-compile your code into the `dist` folder.

    ```bash
    npm run dev
    ```

4. **Load the extension in Chrome:**
    - Open Chrome and navigate to `chrome://extensions`.
    - Enable "Developer mode."
    - Click "Load unpacked" and select the `dist` folder from this project.

_Note: For the extension to function, the [backend server](https://github.com/sijun-kevin-hu/adalens-backend) must also be running._

## 💻 Tech Stack

- **Language:** TypeScript
- **Build Tool:** Vite
- **Core APIs:** Chrome Extension APIs (`chrome.storage`, `chrome.runtime`)
