document
  .getElementById("generateBtn")
  .addEventListener("click", generateQuiz);

const API_KEY = "YOUR_GROQ_API_KEY";

let quizData = [];

async function generateQuiz() {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    const result = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => document.body.innerText
    });

    const articleText = result[0].result.slice(0, 3000);

    document.getElementById("quizContainer").innerHTML = `
<div class="loader-container">
  <div class="loader"></div>
  <p>Generating AI Quiz...</p>
</div>
`;

    const prompt = `
Generate exactly 5 MCQ questions from the article.

Return ONLY valid JSON.

[
  {
    "question": "",
    "options": ["", "", "", ""],
    "answer": "",
    "explanation": ""
  }
]

Article:

${articleText}
`;

    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          messages: [
            {
              role: "user",
              content: prompt
            }
          ],
          temperature: 0.3
        })
      }
    );

    const data = await response.json();

    console.log("Status:", response.status);
    console.log("Response:", data);

    if (!response.ok) {
      throw new Error(
        data.error?.message || "API Request Failed"
      );
    }

    const quizText = data.choices[0].message.content;

    const cleanText = quizText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    try {
      quizData = JSON.parse(cleanText);
    } catch {
      const match = cleanText.match(/\[[\s\S]*\]/);

      if (!match) {
        throw new Error("Invalid JSON returned by AI");
      }

      quizData = JSON.parse(match[0]);
    }

    renderQuiz();

  } catch (error) {
    console.error(error);

    document.getElementById("quizContainer").innerHTML =
      `<p>${error.message}</p>`;
  }
}

function renderQuiz() {
  let html = "";

  quizData.forEach((q, index) => {
    html += `
      <div class="question">
        <h4>${index + 1}. ${q.question}</h4>

        ${q.options.map(option => `
          <label>
            <input
              type="radio"
              name="q${index}"
              value="${option}">
            ${option}
          </label>
          <br>
        `).join("")}
      </div>
    `;
  });

  html += `
  <button id="submitQuiz">
    Submit Quiz
  </button>

  <button id="newQuiz">
    Generate New Quiz
  </button>

  <button id="downloadReport" disabled>
  Download Report
</button>

  <div id="result"></div>
`;

  document.getElementById("quizContainer").innerHTML = html;

document
  .getElementById("submitQuiz")
  .addEventListener("click", checkAnswers);

document
  .getElementById("newQuiz")
  .addEventListener("click", generateQuiz);

document
  .getElementById("downloadReport")
  .addEventListener("click", downloadReport);
}

function checkAnswers() {
  document
  .querySelectorAll(".explanation")
  .forEach(el => el.remove());

  let score = 0;

  quizData.forEach((q, index) => {

    const selected =
      document.querySelector(
        `input[name="q${index}"]:checked`
      );

    const options =
      document.querySelectorAll(
        `input[name="q${index}"]`
      );

    options.forEach(option => {

      // Show correct answer in green
      if (option.value === q.answer) {
        option.parentElement.style.color =
          "green";
        option.parentElement.style.fontWeight =
          "bold";
      }

      // Show wrong selected answer in red
      if (
        selected &&
        option.value === selected.value &&
        selected.value !== q.answer
      ) {
        option.parentElement.style.color =
          "red";
      }
    });

    if (
      selected &&
      selected.value === q.answer
    ) {
      score++;
    }
    const questionDiv =
  document.querySelectorAll(".question")[index];

const explanationDiv =
  document.createElement("div");

explanationDiv.className =
  "explanation";

explanationDiv.innerHTML = `
  <strong>Explanation:</strong>
  ${q.explanation || "Not available"}
`;

questionDiv.appendChild(
  explanationDiv
);
  });

  const percentage =
    (score / quizData.length) * 100;

  let level = "";

  if (percentage < 40) {
    level = "Beginner";
  }
  else if (percentage < 80) {
    level = "Intermediate";
  }
  else {
    level = "Advanced";
  }

  document.getElementById("result").innerHTML = `
<div class="result-card">

  <h2>
    Quiz Completed
  </h2>

  <div class="score-circle">
    ${score}/${quizData.length}
  </div>

  <p>
    Percentage:
    ${percentage.toFixed(2)}%
  </p>

  <p>
    Level:
    ${level}
  </p>

</div>
`;

  document.getElementById(
    "submitQuiz"
  ).disabled = true;

  document.getElementById(
  "downloadReport"
).disabled = false;
}

 async function downloadReport() {

  const { jsPDF } = window.jspdf;

  const doc = new jsPDF();

  let scoreText =
    document.getElementById("result")
      .innerText;

  doc.setFontSize(20);
  doc.text(
    "GFG AI Quiz Generator Report",
    20,
    20
  );

  doc.setFontSize(12);

  doc.text(
    scoreText,
    20,
    40
  );

  let y = 70;

  quizData.forEach((q, index) => {

    if (y > 250) {
      doc.addPage();
      y = 20;
    }

    doc.setFontSize(14);

    doc.text(
      `Question ${index + 1}`,
      20,
      y
    );

    y += 8;

    doc.setFontSize(11);

    const questionLines =
      doc.splitTextToSize(
        q.question,
        170
      );

    doc.text(
      questionLines,
      20,
      y
    );

    y += questionLines.length * 6;

    doc.text(
      `Correct Answer: ${q.answer}`,
      20,
      y
    );

    y += 8;

    const explanationLines =
      doc.splitTextToSize(
        `Explanation: ${q.explanation || "Not Available"}`,
        170
      );

    doc.text(
      explanationLines,
      20,
      y
    );

    y += explanationLines.length * 6 + 10;
  });

  doc.save(
    "GFG_AI_Quiz_Report.pdf"
  );
}