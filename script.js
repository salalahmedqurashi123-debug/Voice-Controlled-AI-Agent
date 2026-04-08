document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const root = document.documentElement;
    const chatInput = document.getElementById("user-input");
    const chatMain = document.getElementById("chat-main");
    const sendBtn = document.getElementById("send-btn");
    const micBtn = document.getElementById("mic-btn");
    const fileInput = document.getElementById("file-input");
    const attachmentBtn = document.getElementById("attachment-btn");
    const assistantBtn = document.getElementById("mic-btn-sort");

    // Ensure elements exist before adding event listeners
    if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
    }

    if (sendBtn) {
        sendBtn.addEventListener("click", processMessage);
    }

    if (chatInput) {
        chatInput.addEventListener("keypress", (event) => {
            if (event.key === "Enter") processMessage();
        });
    }

    if (micBtn) {
        micBtn.addEventListener("click", startSpeechRecognition);
    }

    if (attachmentBtn && fileInput) {
        attachmentBtn.addEventListener("click", () => fileInput.click());
        fileInput.addEventListener("change", handleFileAttachment);
    }

    if (assistantBtn) {
        assistantBtn.addEventListener("click", processVoice);
    }

    function toggleTheme() {
        const currentTheme = root.getAttribute("data-theme");
        const newTheme = currentTheme === "light" ? "dark" : "light";
        root.setAttribute("data-theme", newTheme);
        updateThemeIcon(newTheme);
    }

    function updateThemeIcon(theme) {
        const icon = theme === "light" ? "night-mode.png" : "day-mode.png";
        themeToggle.innerHTML = `<img src="${icon}" width="25px" height="25px" />`;
    }

    function processMessage() {
        const message = chatInput.value.trim();
        if (message) {
            displayMessage(message, "user-message");
            sendMessageToBackend(message);
            chatInput.value = "";
        }
    }

    async function sendMessageToBackend(message) {
        try {
            const response = await fetch("http://127.0.0.1:5000/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message })
            });

            if (response.ok) {
                const data = await response.json();
                displayMessage(data.response, "bot-message");
            } else {
                displayMessage("Error: Unable to get response.", "bot-message");
            }
        } catch (error) {
            displayMessage("Error: Connection failed.", "bot-message");
        }
    }

    function displayMessage(message, className) {
        const messageDiv = document.createElement("div");
        messageDiv.className = `message ${className}`;
        messageDiv.textContent = message;
        chatMain.appendChild(messageDiv);
        chatMain.scrollTop = chatMain.scrollHeight;
    }

    function startSpeechRecognition() {
        const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
        recognition.lang = "en-US";
        recognition.onstart = () => micBtn.title = "Listening...";
        recognition.onresult = handleSpeechResult;
        recognition.onerror = () => alert("Error capturing voice. Please try again.");
        recognition.start();
    }

    function handleSpeechResult(event) {
        const voiceInput = event.results[0][0].transcript;
        displayMessage(voiceInput, "user-message");
        sendMessageToBackend(voiceInput);
    }

    function handleFileAttachment() {
        const file = fileInput.files[0];
        if (file) {
            displayMessage(`File attached: ${file.name}`, "user-message");
        }
    }

    async function processVoice() {
        try {
            const response = await fetch("http://127.0.0.1:5000/process_voice", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: "Voice message or some data" })
            });

            if (response.ok) {
                const data = await response.json();
                displayMessage(data.command, "user-message");
                displayMessage(data.response, "bot-message");
            } else {
                displayMessage("Error: Could not process voice.", "bot-message");
            }
        } catch (error) {
            displayMessage("Error: Unable to connect to the server.", "bot-message");
        }
    }
});
