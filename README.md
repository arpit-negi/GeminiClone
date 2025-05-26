# Gemini Clone

A production-grade conversational AI interface built with React and powered by the Gemini API. This project emulates the functionality and design of Google's Gemini, allowing users to interact with a powerful AI assistant in real-time.

---

## 🚀 Project Description

**Gemini Clone** is a responsive and intuitive chatbot interface that replicates the experience of Google's Gemini AI. It connects to the official Gemini API to provide intelligent responses, real-time chat updates, and enhanced user interaction.

This project demonstrates how to integrate modern frontend frameworks with cutting-edge AI models, offering a foundation for building intelligent assistants, support bots, and learning platforms.

---

### 🔍 Key Features

- Real-time interaction with Gemini API  
- Clean, mobile-first responsive UI  
- Markdown and code-block rendering  
- AI typing simulation  
- Persistent session handling 
- Error and token handling  

---

### 🧰 Technologies Used

- **React.js** – Frontend architecture  
- **Tailwind CSS** – Utility-first styling  
- **Gemini API** – AI conversational backend  
- **Axios/Fetch** – API communication  
- **Markdown-it** – Rich text rendering  
- **Framer Motion** – Animations and transitions  

---

### ⚙️ Challenges Faced

- Managing asynchronous Gemini API responses smoothly  
- Designing a dynamic and responsive UI/UX  
- Ensuring safe and secure use of API keys  
- Handling token limits and streaming responses  

---

### 📈 Future Improvements

- OAuth/Firebase authentication  
- Chat history storage with backend/database  
- Voice input/output (Web Speech API)  
- Conversation threading and message editing  
- Export chat history  

---

## 📋 Table of Contents

- [Project Description](#-project-description)  
- [Key Features](#-key-features)  
- [Technologies Used](#-technologies-used)  
- [Challenges Faced](#-challenges-faced)  
- [Future Improvements](#-future-improvements)  
- [Installation](#-installation)  
- [Usage](#-usage)    
- [API Key Setup](#-api-key-setup)  
- [Credits](#-credits)  
- [How to Add This to GitHub](#-how-to-add-this-to-github)  

---

## 🛠️ Installation

```bash
# 1. Clone the repository
git clone https://github.com/arpit-negi/GeminiClone.git
cd gemini-clone

# 2. Install dependencies
npm install

# 3. Create a `.env` file and add your Gemini API key
echo "VITE_GEMINI_API_KEY=your_api_key_here" > .env

# 4. Run the development server
npm run dev

# 5. Open in your browser
http://localhost:3000
# API Key Setup for Gemini Clone

To run the Gemini Clone project successfully, you need to set up the Gemini API key properly.

## Steps to Get and Configure Your Gemini API Key

1. **Generate Gemini API Key**  
   - Visit [Google AI Studio](https://makersuite.google.com/app).  
   - Sign in with your Google account.  
   - Navigate to the Gemini API section and generate a new API key.

2. **Add the API Key to Your Project**  
   - In the root folder of your project, create a file named `.env` (if it doesn’t exist).  
   - Add the following line, replacing `your_api_key_here` with your actual API key:


3. **Use the API Key in Your Code**  
- Access the API key in your React app using environment variables:

```js
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
