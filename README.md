# 🚀 GFG AI Quiz Generator

An AI-powered Chrome Extension that automatically generates interactive quizzes from GeeksforGeeks articles using the Groq API and Llama 3.3 model.

---

## 📖 Overview

GFG AI Quiz Generator helps users learn technical concepts more effectively by converting GeeksforGeeks articles into AI-generated multiple-choice quizzes.

The extension extracts article content from the currently opened GeeksforGeeks page and sends it to an AI model, which generates quiz questions, answer options, explanations, and performance analytics.

---

## ✨ Features

### 🤖 AI Quiz Generation

Generate multiple-choice questions automatically from article content.

### 📄 Article Content Extraction

Reads and extracts content directly from GeeksforGeeks articles.

### 📝 Dynamic Quiz Interface

Displays generated questions interactively within the extension popup.

### ✅ Instant Evaluation

Checks user answers and calculates scores instantly.

### 💡 Answer Explanations

Displays AI-generated explanations after quiz submission.

### 📊 Performance Analysis

Shows:

* Score
* Percentage
* Skill Level

### 🎯 Skill Classification

Classifies users as:

* Beginner
* Intermediate
* Advanced

### 🔄 Generate New Quiz

Create a fresh quiz from the same article.

### 📥 Download Report

Download quiz results and performance reports.

---

## 🏗️ System Workflow

1. User opens a GeeksforGeeks article.
2. Extension extracts article text.
3. Article content is sent to Groq AI.
4. AI generates MCQs in JSON format.
5. Questions are displayed dynamically.
6. User submits answers.
7. Extension evaluates performance.
8. Results and explanations are displayed.
9. Report can be downloaded.

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Chrome Extension APIs

* Chrome Tabs API
* Chrome Scripting API
* Manifest V3

### AI Services

* Groq API
* Llama 3.3 70B Versatile

### Additional Libraries

* jsPDF

---

## 📂 Project Structure

```text
gfg-ai-quiz-generator/
│
├── content.js
├── jspdf.umd.min.js
├── manifest.json
├── popup.html
├── popup.js
├── style.css
└── README.md
```

---

## ⚙️ Installation

### Step 1: Clone Repository

```bash
git clone https://github.com/yourusername/gfg-ai-quiz-generator.git
```

### Step 2: Open Chrome Extensions

```text
chrome://extensions
```

### Step 3: Enable Developer Mode

Turn ON Developer Mode.

### Step 4: Load Extension

Click:

```text
Load unpacked
```

Select the project folder.

---

## 🔑 API Configuration

Open:

```javascript
popup.js
```

Replace:

```javascript
const API_KEY = "YOUR_GROQ_API_KEY";
```

with your own Groq API key.

---

## 🚀 How to Use

1. Open any GeeksforGeeks article.
2. Click the extension icon.
3. Press Generate Quiz.
4. Wait for AI to create questions.
5. Answer all questions.
6. Click Submit Quiz.
7. View score and explanations.
8. Download the report.

---

## 📸 Screenshots

### Home Screen

<img width="1918" height="1018" alt="image" src="https://github.com/user-attachments/assets/f73e5076-1da2-4d10-acd1-8fa04c2946a7" />


### Quiz Generation

<img width="1918" height="1021" alt="image" src="https://github.com/user-attachments/assets/c15d5a90-00b4-4dec-bb05-873238a3c223" />


### Result Dashboard

<img width="1918" height="957" alt="image" src="https://github.com/user-attachments/assets/a3a2b709-6789-4ea9-9027-98f92e248537" />

[GFG_AI_Quiz_Report (1).pdf](https://github.com/user-attachments/files/28701970/GFG_AI_Quiz_Report.1.pdf)
<img width="487" height="692" alt="image" src="https://github.com/user-attachments/assets/a112654a-4213-4324-bd0f-69c0a7426f57" />

## 🎯 Future Enhancements

* Dark Mode
* Difficulty Levels
* PDF Report Export
* Multi-Language Support
* User Authentication
* Cloud Storage
* Progress Tracking

---

## 🌟 Project Highlights

* AI-powered educational tool
* Real-world Chrome Extension project
* Groq API integration
* LLM-based content understanding
* Interactive learning experience
* Modern Manifest V3 architecture

---

## 👩‍💻 Author

**Rithika P**

Web Development Intern | AI Enthusiast

---

## 📄 License

This project is developed for educational and learning purposes.
