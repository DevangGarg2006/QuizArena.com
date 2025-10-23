
```markdown
# 🎯 QuizArena

**QuizArena** is a sleek and interactive quiz web app built with React, designed to challenge your knowledge across a variety of topics (like History, General Knowledge, Animals, and Sports). It fetches real-time trivia questions from the [Open Trivia Database](https://opentdb.com/) API, offering a dynamic and engaging experience for users.

> 🛠️ **Note from the Developer**  
> This is my **first React project**, which I proudly built myself as part of my learning journey. I did take a bit of help from **ChatGPT** and a few online resources like **YouTube**, but I fully understand each and every line of code in this project. It reflects my hands-on learning and growing confidence in frontend development.

---

## 🚀 Features

- 🧠 Multiple-choice quizzes powered by OpenTDB  
- 🎯 Category and difficulty selection  
- 🔄 Real-time question fetching via REST API  
- 📊 Score tracking and instant feedback  
- 🎨 Responsive UI with smooth transitions  

---

## 🛠️ Tech Stack

| Layer       | Technology                        |
|-------------|------------------------------------|
| Frontend    | React, Axios, React Router         |
| API Source  | [OpenTDB](https://opentdb.com/)    |
| Styling     | CSS Modules / Tailwind / Styled Components |
| State Mgmt  | React Context / Redux (optional)   |

---

## 📦 Installation

### 1. Clone the repository

```bash
git clone https://github.com/DevangGarg2006/QuizArena.git
cd quizArena
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm start
```

> The app will run on `http://localhost:3000` by default.

---

## 🔗 API Integration

QuizArena uses [OpenTDB](https://opentdb.com/api_config.php) to fetch trivia questions. No authentication is required.

### Sample API Call

```bash
https://opentdb.com/api.php?amount=10&category=27
```

### Parameters Used

- `amount`: Number of questions  
- `category`: Quiz category (e.g., General Knowledge, Science, etc.)

---

## 🧪 Testing

To run tests:

```bash
npm test
```

Uses **Jest** and **React Testing Library** for unit and integration tests.

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you'd like to improve.

---

```
