# Aditya Kourav | Developer Portfolio

A full-stack portfolio website built with the MERN stack, featuring an AI chatbot (Aadi AI) that answers questions about my skills and projects, a contact form, and one-click resume download and WhatsApp contact.

**Live site:** [aditya-kourav.vercel.app](https://aditya-kourav.vercel.app)

<img width="1920" height="934" alt="Portfolio preview" src="https://github.com/user-attachments/assets/1f4de9de-4441-48a0-a33b-5b172b843357" />

## Features

- Responsive design for mobile, tablet and desktop
- **Aadi AI chatbot** powered by Llama 3.1 on Cloudflare Workers AI, answering visitor questions using my portfolio data
- Contact form with validation
- Downloadable resume and direct WhatsApp contact
- Smooth-scroll navigation with active section highlighting
- Rate limiting and CORS protection on the backend

## Tech Stack

| Area | Technologies |
| --- | --- |
| Frontend | React, CSS, react-icons |
| Backend | Node.js, Express |
| Database | MongoDB |
| Chatbot | Cloudflare Workers AI (`@cf/meta/llama-3.1-8b-instruct-fast`) |
| Deployment | Vercel (frontend), Node.js hosting for the backend |

## Project Structure

```
portfolio/
├── portfolio-frontend/        # React frontend
│   ├── public/    # Static files (resume PDF, images)
│   └── src/
└── portfolio-backend/        # Express backend
    ├── routes/
    └── server.js
```

## Getting Started

### Prerequisites

- Node.js 18 or higher
- npm

### 1. Clone the repository

```bash
git clone https://github.com/code-aadi/Portfolio.git
cd Portfolio
```

### 2. Set up the backend

```bash
cd server
npm install
cp .env.example .env
```

Open `.env` and add your own values (see below), then start the server:

```bash
npm run dev
```

### 3. Set up the frontend

```bash
cd client
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

## Environment Variables

**Backend (`server/.env`)**

| Variable | Description |
| --- | --- |
| `PORT` | Port the server runs on |
| `FRONTEND_URL` | Frontend URL allowed by CORS |
| `CF_ACCOUNT_ID` | Cloudflare account ID |
| `CF_API_TOKEN` | Cloudflare Workers AI API token |

**Frontend (`client/.env.development`)**

| Variable | Description |
| --- | --- |
| `VITE_API_URL` | Backend URL, e.g. `http://localhost:5000` |

Never commit real keys. Use `.env.example` as the template.

## Deployment

- **Frontend:** deployed on Vercel at [aditya-kourav.vercel.app](https://aditya-kourav.vercel.app), with `VITE_API_URL` pointing to the live backend.
- **Backend:** deployed separately, with `FRONTEND_URL` set to `https://aditya-kourav.vercel.app`.

## Contact

- Email: [kouravaditya7@gmail.com](mailto:kouravaditya7@gmail.com)
- GitHub: [code-aadi](https://github.com/code-aadi)
- LinkedIn: [Aditya Kourav](https://www.linkedin.com/in/aditya-kourav-813959304/)
- Instagram: [@code_aadi](https://www.instagram.com/code_aadi)

## License

This project is for personal portfolio use. Please do not copy it as your own. Feel free to take inspiration.