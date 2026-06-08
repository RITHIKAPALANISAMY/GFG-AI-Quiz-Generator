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
<img%PDF-1.3
%º�x¬à
3 0 obj
<</Type /Page
/Parent 1 0 R
/Resources 2 0 R
/MediaBox [0 0 595.2799999999999727 841.8899999999999864]
/Contents 4 0 R
>>
endobj
4 0 obj
<<
/Length 3526
>>
stream
0.5670000000000001 w
0 G
BT
/F1 20 Tf
23. TL
0 g
56.6929133858267775 785.1970866141732586 Td
(GFG AI Quiz Generator Report) Tj
ET
BT
/F1 12 Tf
13.7999999999999989 TL
0 g
56.6929133858267775 728.5041732283464171 Td
(Quiz Completed) Tj
T* (4/5) Tj
T* () Tj
T* (Percentage: 80.00%) Tj
T* () Tj
T* (Level: Advanced) Tj
ET
BT
/F1 14 Tf
16.0999999999999979 TL
0 g
56.6929133858267775 643.4648031496062686 Td
(Question 1) Tj
ET
BT
/F1 11 Tf
12.6499999999999986 TL
0 g
56.6929133858267775 620.7876377952754865 Td
(What type of programming language is Java?) Tj
ET
BT
/F1 11 Tf
12.6499999999999986 TL
0 g
56.6929133858267775 603.7797637795274568 Td
(Correct Answer: Object-oriented) Tj
ET
BT
/F1 11 Tf
12.6499999999999986 TL
0 g
56.6929133858267775 581.1025984251967884 Td
(Explanation: Java is a high-level, object-oriented programming language used to build web apps,) Tj
T* (mobile applications, and enterprise software systems.) Tj
ET
BT
/F1 14 Tf
16.0999999999999979 TL
0 g
56.6929133858267775 518.7403937007873083 Td
(Question 2) Tj
ET
BT
/F1 11 Tf
12.6499999999999986 TL
0 g
56.6929133858267775 496.0632283464566399 Td
(What is the main advantage of Java being platform-independent?) Tj
ET
BT
/F1 11 Tf
12.6499999999999986 TL
0 g
56.6929133858267775 479.0553543307086102 Td
(Correct Answer: It can run on any device that supports the Java Virtual Machine \(JVM\)) Tj
ET
BT
/F1 11 Tf
12.6499999999999986 TL
0 g
56.6929133858267775 456.378188976377885 Td
(Explanation: Java is a platform-independent language, which means code written in Java can run) Tj
T* (on any device that supports the Java Virtual Machine \(JVM\).) Tj
ET
BT
/F1 14 Tf
16.0999999999999979 TL
0 g
56.6929133858267775 394.0159842519684616 Td
(Question 3) Tj
ET
BT
/F1 11 Tf
12.6499999999999986 TL
0 g
56.6929133858267775 371.3388188976377364 Td
(What is the purpose of the main method in a Java program?) Tj
ET
BT
/F1 11 Tf
12.6499999999999986 TL
0 g
56.6929133858267775 354.3309448818897067 Td
(Correct Answer: To serve as the entry point) Tj
ET
BT
/F1 11 Tf
12.6499999999999986 TL
0 g
56.6929133858267775 331.6537795275589815 Td
(Explanation: The main method serves as the entry point and prints 'Hello World!' to the console.) Tj
ET
BT
/F1 14 Tf
16.0999999999999979 TL
0 g
56.6929133858267775 286.2994488188975311 Td
(Question 4) Tj
ET
BT
/F1 11 Tf
12.6499999999999986 TL
0 g
56.6929133858267775 263.6222834645668627 Td
(Why is Java a popular choice for software development?) Tj
ET
BT
/F1 11 Tf
12.6499999999999986 TL
0 g
56.6929133858267775 246.614409448818833 Td
(Correct Answer: It has popular frameworks like Spring and Hibernate) Tj
ET
BT
/F1 11 Tf
12.6499999999999986 TL
0 g
56.6929133858267775 223.9372440944881646 Td
(Explanation: Java has popular frameworks like Spring and Hibernate which makes it powerful for) Tj
T* (enterprise applications.) Tj
ET
BT
/F1 14 Tf
16.0999999999999979 TL
0 g
56.6929133858267775 161.5750393700786844 Td
(Question 5) Tj
ET
BT
/F1 11 Tf
12.6499999999999986 TL
0 g
56.6929133858267775 138.8978740157479024 Td
(What is the benefit of using Java methods?) Tj
ET
BT
/F1 11 Tf
12.6499999999999986 TL
0 g
56.6929133858267775 121.8899999999998727 Td
(Correct Answer: They improve code readability and reduce repetition) Tj
ET
BT
/F1 11 Tf
12.6499999999999986 TL
0 g
56.6929133858267775 99.2128346456692043 Td
(Explanation: Java methods are reusable blocks of code that perform specific tasks and help) Tj
T* (organize your program. They improve code readability, reduce repetition, and make debugging) Tj
T* (easier.) Tj
ET
endstream
endobj
1 0 obj
<</Type /Pages
/Kids [3 0 R ]
/Count 1
>>
endobj
5 0 obj
<<
/Type /Font
/BaseFont /Helvetica
/Subtype /Type1
/Encoding /WinAnsiEncoding
/FirstChar 32
/LastChar 255
>>
endobj
6 0 obj
<<
/Type /Font
/BaseFont /Helvetica-Bold
/Subtype /Type1
/Encoding /WinAnsiEncoding
/FirstChar 32
/LastChar 255
>>
endobj
7 0 obj
<<
/Type /Font
/BaseFont /Helvetica-Oblique
/Subtype /Type1
/Encoding /WinAnsiEncoding
/FirstChar 32
/LastChar 255
>>
endobj
8 0 obj
<<
/Type /Font
/BaseFont /Helvetica-BoldOblique
/Subtype /Type1
/Encoding /WinAnsiEncoding
/FirstChar 32
/LastChar 255
>>
endobj
9 0 obj
<<
/Type /Font
/BaseFont /Courier
/Subtype /Type1
/Encoding /WinAnsiEncoding
/FirstChar 32
/LastChar 255
>>
endobj
10 0 obj
<<
/Type /Font
/BaseFont /Courier-Bold
/Subtype /Type1
/Encoding /WinAnsiEncoding
/FirstChar 32
/LastChar 255
>>
endobj
11 0 obj
<<
/Type /Font
/BaseFont /Courier-Oblique
/Subtype /Type1
/Encoding /WinAnsiEncoding
/FirstChar 32
/LastChar 255
>>
endobj
12 0 obj
<<
/Type /Font
/BaseFont /Courier-BoldOblique
/Subtype /Type1
/Encoding /WinAnsiEncoding
/FirstChar 32
/LastChar 255
>>
endobj
13 0 obj
<<
/Type /Font
/BaseFont /Times-Roman
/Subtype /Type1
/Encoding /WinAnsiEncoding
/FirstChar 32
/LastChar 255
>>
endobj
14 0 obj
<<
/Type /Font
/BaseFont /Times-Bold
/Subtype /Type1
/Encoding /WinAnsiEncoding
/FirstChar 32
/LastChar 255
>>
endobj
15 0 obj
<<
/Type /Font
/BaseFont /Times-Italic
/Subtype /Type1
/Encoding /WinAnsiEncoding
/FirstChar 32
/LastChar 255
>>
endobj
16 0 obj
<<
/Type /Font
/BaseFont /Times-BoldItalic
/Subtype /Type1
/Encoding /WinAnsiEncoding
/FirstChar 32
/LastChar 255
>>
endobj
17 0 obj
<<
/Type /Font
/BaseFont /ZapfDingbats
/Subtype /Type1
/FirstChar 32
/LastChar 255
>>
endobj
18 0 obj
<<
/Type /Font
/BaseFont /Symbol
/Subtype /Type1
/FirstChar 32
/LastChar 255
>>
endobj
2 0 obj
<<
/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]
/Font <<
/F1 5 0 R
/F2 6 0 R
/F3 7 0 R
/F4 8 0 R
/F5 9 0 R
/F6 10 0 R
/F7 11 0 R
/F8 12 0 R
/F9 13 0 R
/F10 14 0 R
/F11 15 0 R
/F12 16 0 R
/F13 17 0 R
/F14 18 0 R
>>
/XObject <<
>>
>>
endobj
19 0 obj
<<
/Producer (jsPDF 2.5.1)
/CreationDate (D:20260608150412+05'30')
>>
endobj
20 0 obj
<<
/Type /Catalog
/Pages 1 0 R
/OpenAction [3 0 R /FitH null]
/PageLayout /OneColumn
>>
endobj
xref
0 21
0000000000 65535 f 
0000003734 00000 n 
0000005551 00000 n 
0000000019 00000 n 
0000000156 00000 n 
0000003791 00000 n 
0000003916 00000 n 
0000004046 00000 n 
0000004179 00000 n 
0000004316 00000 n 
0000004439 00000 n 
0000004568 00000 n 
0000004700 00000 n 
0000004836 00000 n 
0000004964 00000 n 
0000005091 00000 n 
0000005220 00000 n 
0000005353 00000 n 
0000005455 00000 n 
0000005799 00000 n 
0000005885 00000 n 
trailer
<<
/Size 21
/Root 20 0 R
/Info 19 0 R
/ID [ <C21796C324B8FEB75097ACD91437E77E> <C21796C324B8FEB75097ACD91437E77E> ]
>>
startxref
5989
%%EOF width="1918" height="971" alt="image" src="https://github.com/user-attachments/assets/c465c207-779e-4dc0-8928-9c8efbbb995d" />



---

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
