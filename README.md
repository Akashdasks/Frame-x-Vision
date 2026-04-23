# 👁️ FrameX Vision — AI-Powered Image Intelligence

> Upload any photo and get an instant AI-powered breakdown of the scene, objects, people, emotions, environment, and more.

![FrameX Vision](https://img.shields.io/badge/FrameX-Vision-6366f1?style=for-the-badge)
![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js)
![AI](https://img.shields.io/badge/AI-OpenRouter-FF6B6B?style=for-the-badge)

---

## 🚀 Live Demo

- **Frontend:** [framex-vision.vercel.app](https://framex-vision.vercel.app)
- **Backend:** [framex-vision-api.render.com](https://framex-vision-api.render.com)

---

## ✨ Features

- 🎯 **Object Detection** — Identifies every object with confidence scores and locations
- 👥 **People Analysis** — Detects emotions, actions, age groups and clothing
- 🌍 **Scene Understanding** — Weather, season, time of day and environment type
- 🎨 **Visual Breakdown** — Colors, mood, lighting and composition analysis
- 🐾 **Animal Detection** — Spots and identifies animals with their actions
- 📝 **Text Extraction** — Reads any visible text, signs or labels in the image
- 💡 **Interesting Facts** — Unique AI observations about the image

---

## 🛠️ Tech Stack

| Layer         | Technology                         |
| ------------- | ---------------------------------- |
| Frontend      | React.js + Vite + Tailwind CSS     |
| Backend       | Node.js + Express.js               |
| AI Engine     | OpenRouter API (Multimodal Vision) |
| File Handling | Multer + Uniqid                    |
| HTTP Client   | Axios                              |
| Environment   | Dotenv                             |

---

## 📁 Project Structure

image-analyzer/
├── image-analyzer-back/ ← Backend
│ ├── config/
│ │ └── ai.js ← OpenRouter AI setup
│ ├── controllers/
│ │ └── analyzeController.js ← Analysis logic
│ ├── middleware/
│ │ └── upload.js ← Multer file handling
│ ├── routes/
│ │ └── analyzeRoutes.js ← API routes
│ ├── uploads/ ← Temp image storage
│ ├── .env.example
│ └── server.js ← Entry point
│
└── image-analyzer-front/ ← Frontend
├── src/
│ ├── components/
│ │ ├── ImageUploader.jsx
│ │ ├── AnalysisResult.jsx
│ │ └── LoadingScreen.jsx
│ ├── pages/
│ │ ├── LandingPage.jsx
│ │ └── AnalyzerPage.jsx
│ └── App.jsx
└── .env.example

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- OpenRouter API Key — [Get it free here](https://openrouter.ai/keys)

### 1. Clone the repository

```bash
git clone https://github.com/Akashdasks/framex-vision.git
cd image-analyzer
```

### 2. Setup Backend

```bash
cd server
npm install
cp .env.example .env
# Add your OPENROUTER_API_KEY to .env
npm run dev
```

### 3. Setup Frontend

```bash
cd image-analyzer-front
npm install
cp .env.example .env
# .env already has correct default values
npm run dev
```

### 4. Open the app

http://localhost:5173

---

## 🔌 API Endpoints

| Method | Endpoint       | Description               |
| ------ | -------------- | ------------------------- |
| GET    | `/api/health`  | Server health check       |
| POST   | `/api/analyze` | Analyze an uploaded image |

### POST `/api/analyze`

**Request:** `multipart/form-data` with `image` field

**Response:**

```json
{
  "success": true,
  "analysis": {
    "scene_title": "Sunset at the Beach",
    "description": "A beautiful golden sunset...",
    "objects": [...],
    "people": {...},
    "environment": {...},
    "visual": {...},
    "animals": [...],
    "text_in_image": [...],
    "interesting_facts": [...]
  }
}
```

---

## 🚀 Deployment

- **Frontend** → [Vercel](https://vercel.com) (free)
- **Backend** → [Render](https://render.com) (free)

---

## 👨‍💻 Author

**Akash Das K S**

- GitHub: [@Akashdasks](https://github.com/Akashdasks)
- LinkedIn: [akashdasks](https://linkedin.com/in/akashdasks)
- Email: akashdasks007@gmail.com

---

## 📄 License

MIT License — feel free to use and modify!
