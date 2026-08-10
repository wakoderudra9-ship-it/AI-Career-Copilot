# 🚀 AI Career Copilot

<p align="center">
  <img src="./assets/banner.png" alt="AI Career Copilot Banner" width="100%">
</p>

<p align="center">

![Python](https://img.shields.io/badge/Python-3.12-blue?style=for-the-badge&logo=python)

![FastAPI](https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi)

![React](https://img.shields.io/badge/React-Frontend-61DAFB?style=for-the-badge&logo=react)

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript)

![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql)

![Google Gemini](https://img.shields.io/badge/Google%20Gemini-AI-4285F4?style=for-the-badge&logo=google)

![Railway](https://img.shields.io/badge/Railway-Deployed-black?style=for-the-badge&logo=railway)

![MIT License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

</p>

---

## 📚 Table of Contents

- [Overview](#-overview)
- [Project Highlights](#-project-highlights)
- [Current Project Status](#-current-project-status)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Project Structure](#-project-structure)
- [Project Showcase](#-project-showcase)
- [Getting Started](#-getting-started)
- [API Endpoints](#-api-endpoints)
- [Version 2 Roadmap](#-version-2-roadmap)
- [Author](#-author)
- [License](#-license)

---

## 📌 Overview

**AI Career Copilot** is an AI-powered career assistant designed to help students and job seekers improve their resumes and prepare for their careers.

The application analyzes uploaded resumes, evaluates ATS compatibility, identifies skills and missing skills, provides AI-generated recommendations, and generates a professional PDF report.

Built using **FastAPI**, **React**, **TypeScript**, **PostgreSQL**, and **Google Gemini AI**, the project follows a modular architecture with JWT authentication, protected routes, database integration, and AI-powered services.

---

## 🌟 Project Highlights

- 🤖 AI-powered Resume Analysis
- 📊 ATS Compatibility Scoring
- 🔐 Secure JWT Authentication
- 📄 PDF Resume Parsing
- 🧠 Google Gemini AI Integration
- 📑 Professional PDF Report Generation
- 🎯 Skills & Missing Skills Detection
- 📈 Resume Health & Section Analysis
- 💡 AI-powered Resume Feedback
- 🚀 Railway Backend Deployment
- ⚡ Modern React + TypeScript Frontend

---

## 📌 Current Project Status

🟢 **Version 1.0.0 — Ready for Showcase**

### Completed

- ✅ User Registration
- ✅ JWT Authentication
- ✅ Protected Routes
- ✅ Current User Authentication (`/auth/me`)
- ✅ Resume PDF Upload
- ✅ PDF Text Extraction
- ✅ AI Resume Analysis
- ✅ ATS Compatibility Score
- ✅ Resume Score
- ✅ Resume Health Analysis
- ✅ Section-wise Resume Analysis
- ✅ Skills Detection
- ✅ Missing Skills Detection
- ✅ AI Resume Feedback
- ✅ AI Improvement Suggestions
- ✅ Resume Rewrite
- ✅ Professional PDF Report
- ✅ React + TypeScript Frontend
- ✅ FastAPI Backend
- ✅ PostgreSQL Database
- ✅ Railway Backend Deployment

### 🚧 Next Development Phase

**Version 2** is planned as a major upgrade focused on turning AI Career Copilot into a more complete career-management platform.

---

# ✨ Features

## 🔐 Authentication

- User Registration
- Secure Login using JWT Authentication
- Protected Routes
- Current User Authentication (`/auth/me`)

---

## 📄 Resume Analyzer

- Upload Resume in PDF format
- Extract text from PDF resumes
- AI-powered Resume Analysis
- Resume Score
- ATS Compatibility Score
- Resume Health Analysis
- Section-wise Performance
- Skills Detection
- Missing Skills Detection
- Email Detection
- Phone Number Detection

---

## 🤖 AI Features

- AI Resume Feedback
- Resume Improvement Suggestions
- Strength Analysis
- Weakness Analysis
- Resume Rewrite Suggestions
- AI Resume Health Report
- AI Career Roadmap
- AI Cover Letter Generator
- AI Interview Question Generator

---

## 📑 PDF Report

- Generate Professional Resume Analysis Reports
- Download AI Analysis as PDF

---

## ⚙️ Backend

- FastAPI REST APIs
- SQLAlchemy ORM
- PostgreSQL Database
- JWT Authentication
- Modular Service Architecture
- Google Gemini AI Integration
- Railway Deployment

---

## 💻 Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Responsive UI
- Protected Pages
- Dashboard
- Toast Notifications
- Axios API Integration
- React Router

---

# 🛠 Tech Stack

| Category | Technologies |
|----------|--------------|
| **Frontend** | React, TypeScript, Vite, Tailwind CSS |
| **Backend** | FastAPI, Python |
| **Database** | PostgreSQL |
| **ORM** | SQLAlchemy |
| **Authentication** | JWT |
| **AI** | Google Gemini AI |
| **PDF Processing** | PyMuPDF |
| **API Communication** | Axios |
| **Deployment** | Railway |
| **Version Control** | Git & GitHub |

---

# 🏗 Project Architecture

```text
                         ┌────────────────────────┐
                         │       React UI          │
                         │   TypeScript + Vite     │
                         └────────────┬───────────┘
                                      │
                                      │ Axios
                                      │ HTTP API
                                      ▼
                         ┌────────────────────────┐
                         │      FastAPI API        │
                         │                        │
                         │ Authentication         │
                         │ Resume Analyzer        │
                         │ Profile Management     │
                         │ Career Roadmap         │
                         │ Cover Letter           │
                         │ Interview Modules      │
                         └────────────┬───────────┘
                                      │
                    ┌─────────────────┴─────────────────┐
                    │                                   │
                    ▼                                   ▼
          ┌───────────────────┐              ┌────────────────────┐
          │    PostgreSQL     │              │   Google Gemini    │
          │     Database      │              │     AI Services    │
          │                   │              │                    │
          │ Users             │              │ Resume Analysis    │
          │ Profiles          │              │ AI Feedback        │
          │ Resumes           │              │ Suggestions        │
          └───────────────────┘              └────────────────────┘
```

---

# 📂 Project Structure

```text
AI-CAREER-COPILOT
│
├── backend
│   ├── app
│   │   ├── dependencies
│   │   ├── models
│   │   ├── routes
│   │   ├── schemas
│   │   └── services
│   │
│   ├── uploads
│   ├── requirements.txt
│   └── main.py
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── assets
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   └── types
│   │
│   ├── public
│   ├── package.json
│   └── vite.config.ts
│
├── screenshots
│
├── assets
│   └── banner.png
│
├── docs
│   ├── api.md
│   ├── architecture.md
│   ├── deployment.md
│   └── roadmap.md
│
├── LICENSE
├── README.md
└── .gitignore
```

---

# 📸 Project Showcase

## 🔐 Login

Secure JWT-based authentication.

<p align="center">
  <img src="./screenshots/01-login.png" alt="AI Career Copilot Login" width="900">
</p>

---

## 🏠 AI Career Dashboard

A centralized dashboard for accessing AI-powered career tools.

<p align="center">
  <img src="./screenshots/03-dashboard-hero.png" alt="AI Career Copilot Dashboard" width="900">
</p>

---

## 🧩 Dashboard Modules

Career-focused modules available through the application dashboard.

<p align="center">
  <img src="./screenshots/04-dashboard-modules.png" alt="AI Career Copilot Dashboard Modules" width="900">
</p>

---

## 📄 Resume Upload

Upload a PDF resume and send it for AI-powered analysis.

<p align="center">
  <img src="./screenshots/05-upload-page.png" alt="Resume Upload" width="900">
</p>

---

## 📊 ATS & Resume Analysis

Resume scoring and ATS compatibility analysis.

<p align="center">
  <img src="./screenshots/07-ats-score.png" alt="ATS Resume Analysis" width="900">
</p>

---

## 🤖 AI Recommendations

Personalized AI-generated recommendations for improving the resume.

<p align="center">
  <img src="./screenshots/11-ai-recommendations.png" alt="AI Resume Recommendations" width="900">
</p>

---

## 📚 Interactive API Documentation

FastAPI's automatically generated Swagger documentation.

<p align="center">
  <img src="./screenshots/12-api-docs.png" alt="FastAPI Swagger Documentation" width="900">
</p>

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/wakoderudra9-ship-it/AI-Career-Copilot.git
cd AI-Career-Copilot
```

---

## 2. Backend Setup

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate it on Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the FastAPI server:

```bash
uvicorn app.main:app --reload
```

Backend:

```text
http://127.0.0.1:8000
```

Swagger API documentation:

```text
http://127.0.0.1:8000/docs
```

---

## 3. Frontend Setup

Open a new terminal:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Frontend:

```text
http://localhost:5173
```

---

# 🔌 API Endpoints

## Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/auth/register` | Register a new user |
| POST | `/auth/login` | Authenticate user and generate JWT |
| GET | `/auth/me` | Get current authenticated user |

---

## Resume

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/resume/` | Upload and analyze a resume |

---

## Profile

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/profile` | Access user profile |
| PUT | `/profile` | Update user profile |

---

## AI Modules

The project also contains AI-powered modules for:

- Career Roadmap
- Cover Letter Generation
- Interview Preparation
- Mock Interview

---

# 🚀 Version 2 Roadmap

AI Career Copilot Version 2 will focus on expanding the platform beyond resume analysis.

### Planned Features

- 🖥️ Modern SaaS Dashboard
- 🤖 AI Career Chat Assistant
- 📄 AI Resume Builder
- 🔍 Job Recommendation Engine
- 🎯 Resume-to-Job Matching
- 📊 Interactive Career Analytics
- 🧑‍💻 AI Portfolio Generator
- 🎤 Voice-based AI Mock Interview
- ✉️ Email Notifications
- 🌐 Frontend Deployment
- 🔄 Resume Comparison
- 🧠 Personalized Career Recommendations

---

# 📌 Development Philosophy

AI Career Copilot is being developed incrementally.

**Version 1** focuses on establishing the core platform:

```text
Authentication
      ↓
Resume Upload
      ↓
PDF Extraction
      ↓
Resume Analysis
      ↓
AI Feedback
      ↓
ATS & Resume Scoring
      ↓
Professional Report
```

**Version 2** will expand these capabilities into a broader AI-powered career platform.

---

# 👨‍💻 Author

## Rudra Wakode

Final Year Information Technology Student

Interested in **Full Stack Development, Artificial Intelligence, Backend Engineering, and building practical software products.**

If you found the project interesting, consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is licensed under the **MIT License**.

See the [LICENSE](./LICENSE) file for details.

---

<p align="center">
  Built with ❤️ using React, FastAPI, PostgreSQL & Google Gemini AI
</p>