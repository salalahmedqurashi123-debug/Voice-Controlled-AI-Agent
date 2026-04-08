# 🏆 Chat-CED: AI Voice Assistant

![Award Badge](https://img.shields.io/badge/Award-STEAM_2024_1st_Prize-gold.svg)
![Python](https://img.shields.io/badge/Python-3.8%2B-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-Framework-009688)
![Gemini API](https://img.shields.io/badge/AI-Google_Gemini_1.5-orange)

**Proudly developed representing Govt. College for IT Qasimabad for the official STEAM 2024 exhibition organized under the Sindh Government.**

Chat-CED is a highly interactive, voice-controlled AI chatbot. It combines natural language processing, automated web tasks, and seamless text-to-speech feedback to provide users with a next-level virtual assistant experience.

## ✨ Core Features

* **🎙️ Real-Time Voice Recognition:** Accurately captures and processes spoken commands (using `SpeechRecognition`).
* **🧠 Intelligent Responses:** Generates smart, concise, and context-aware answers via the Google Gemini 1.5 Flash API.
* **🤖 Web & System Automation:** Searches on YouTube/Google, plays videos, and controls the system cursor using voice commands (using `pyautogui`).
* **🔊 Text-to-Speech (TTS):** Provides natural-sounding voice feedback (using `pyttsx3`).
* **🎨 Modern UI/UX:** Frontend designed with Bootstrap 5 and Tailwind CSS, featuring smooth animations and theme toggling support.

## 🛠️ Tech Stack

**Frontend:**
* HTML5, CSS3, JavaScript
* Bootstrap 5 & Tailwind CSS
* FontAwesome Icons

**Backend:**
* Python
* FastAPI & Uvicorn (For REST API and server routing)

**AI & Automation Libraries:**
* `google-generativeai` (Gemini API)
* `speech_recognition` (Voice input)
* `pyttsx3` (Audio output)
* `pyautogui` (System/Cursor automation)
* `python-dotenv` (Environment variable management)
```
* Voice-Controlled-AI-Agent/
├── chat bot backend.py      # FastAPI server & AI logic
├── chat bot frontend.Html   # Main user interface
├── script.js                # Frontend functionality & API calls
├── .env                     # API keys (Not tracked by git)
├── bg.jpg                   # Background image
├── README.md                # Project documentation
└── requirements.txt         # Project dependencies (libraries)
```
## 🚀 Getting Started

Follow these steps to run this project on your local machine.

### Prerequisites

* Python 3.8+ must be installed.
* Google Gemini API Key (Get it from Google AI Studio).

### Installation

**1. Clone the repository:**
```bash
git clone [https://github.com/yourusername/chat-ced.git](https://github.com/yourusername/chat-ced.git)
cd chat-ced

Getting Started
Follow these steps to set up and run this project on your local machine.

Prerequisites
Python 3.8+ must be installed on your system.

Google Gemini API Key (You can get this for free from Google AI Studio).

Installation Steps
1. Clone the repository:
Open your terminal or command prompt and run the following commands:

Bash
git clone [https://github.com/yourusername/chat-ced.git](https://github.com/yourusername/chat-ced.git)
cd chat-ced
2. Install required Python packages:

Create a new file named .env in the project folder and paste your API key like this:

Code snippet
GEMINI_API_KEY=paste_your_actual_api_key_here
▶️ How to Run the Application
Step 1: Start the Backend Server
Run the following command in your terminal within the project folder to start the AI and API server:

Bash
python "chat bot backend.py"
The server will start successfully and run on http://127.0.0.1:5000.

Step 2: Launch the Frontend UI
No separate server is needed for the frontend.

Simply navigate to your project folder and double-click the chat bot frontend.Html file to open it in your browser (like Chrome, Edge, or Safari).

Alternatively, if you are using VS Code, right-click the file and select "Open with Live Server".
```
Step 3: Start Interacting!

Text Mode: Type your message in the input box and click Send.

Voice Mode: Click the Microphone icon on the screen to talk directly to the AI or give system commands.

🗣️ Voice Commands Guide
Click the microphone button and try these commands:

"Search on YouTube [query]" - Searches for the query on YouTube.

"Play [song name]" - Searches and plays the first video result on YouTube.

"Search Google [query]" - Performs a Google search.

"Scroll down" / "Scroll up" - Scrolls the current active window.

"Exit" / "Quit" - Closes the assistant.

```
```
## **⚙️ System Architecture & Data Flow**
```
```
<img width="449" height="694" alt="image" src="https://github.com/user-attachments/assets/959e2766-2dd2-47e1-af11-af9dfbc9bdaf" />

