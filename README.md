<div align="center">

# 💇 Hair Reborn — Content Plan & Analysis

**AI-powered content strategy tool for the Hair Reborn brand**

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Site-brightgreen?style=for-the-badge)](https://andrewfrancis00.github.io/hair-reborn-content-plan-analysis-/)
[![Built with React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Powered by Gemini](https://img.shields.io/badge/Gemini_AI-1.5-orange?style=for-the-badge&logo=google)](https://ai.google.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)

</div>

---

## 📌 About

Hair Reborn Content Plan & Analysis is a smart web application that leverages **Google Gemini AI** to generate, analyze, and manage content strategies for the Hair Reborn brand — a premium hair care product line.

The tool helps create data-driven content calendars, campaign ideas, and marketing insights tailored specifically for the hair care and beauty industry.

---

## ✨ Features

- 🤖 **AI-Powered Content Generation** — Uses Gemini 1.5 to generate creative content ideas
- 📅 **Content Calendar Planning** — Organize posts, campaigns, and promotions
- 📊 **Brand Analysis** — Understand audience engagement and content performance
- 💡 **Campaign Suggestions** — Smart recommendations for social media (Instagram, Facebook, TikTok)
- 🎨 **Modern UI** — Built with React, TypeScript, and Tailwind CSS
- ⚡ **Fast & Responsive** — Vite-powered for lightning-fast performance

---

## 🚀 Live Demo

👉 **[https://andrewfrancis00.github.io/hair-reborn-content-plan-analysis-/](https://andrewfrancis00.github.io/hair-reborn-content-plan-analysis-/)**

> ⚠️ The live demo requires a valid `GEMINI_API_KEY` configured on the server to use AI features.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| React | 18 | UI Framework |
| TypeScript | 5 | Type Safety |
| Vite | 6 | Build Tool |
| Tailwind CSS | 4 | Styling |
| Google Gemini AI | 1.29 | AI Engine |
| GitHub Actions | — | CI/CD Deployment |
| GitHub Pages | — | Hosting |

---

## 🏃 Run Locally

### Prerequisites
- Node.js 18+
- A [Gemini API Key](https://aistudio.google.com/app/apikey) (free)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/andrewfrancis00/hair-reborn-content-plan-analysis-.git
cd hair-reborn-content-plan-analysis-

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local and add your GEMINI_API_KEY

# 4. Start the development server
npm run dev
```

The app will be available at `http://localhost:3000`

---

## 🔑 Environment Variables

Create a `.env.local` file in the root directory:

```env
GEMINI_API_KEY=your_gemini_api_key_here
```

Get your free API key from [Google AI Studio](https://aistudio.google.com/app/apikey).

---

## 📦 Deployment

This project is automatically deployed to **GitHub Pages** via **GitHub Actions** on every push to `main`.

To deploy your own version:
1. Fork this repository
2. Go to **Settings → Secrets → Actions**
3. Add `GEMINI_API_KEY` as a repository secret
4. Enable **GitHub Pages** with source set to **GitHub Actions**
5. Push to `main` — the workflow handles the rest!

---

## 📁 Project Structure

```
hair-reborn-content-plan-analysis-/
├── src/
│   ├── components/       # React components
│   ├── hooks/            # Custom hooks
│   ├── types/            # TypeScript types
│   └── main.tsx          # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions CI/CD
├── index.html
├── vite.config.ts
└── package.json
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first.

---

## 📄 License

MIT License — feel free to use and modify.

---

<div align="center">

Made with ❤️ for **Hair Reborn** · Powered by **Google Gemini AI**

</div>
