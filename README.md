# Syntax Software Solutions

Official website for **Syntax Software Solutions** — a full-stack software company based in Addis Ababa, Ethiopia, founded in 2019. We build websites, mobile apps, gaming platforms, enterprise systems, and AI-powered bots.

🌐 **Live Site:** [syntaxsoftwaresolution.com](https://syntaxsoftwaresolution.com)

---

## Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, stats, services overview, why us, testimonials |
| **About** | Company story, timeline, team members |
| **Services** | 8 core services with process steps |
| **Projects** | 11 real projects with category filters |
| **Contact** | Contact form, office info, social links |

---

## Tech Stack

### Frontend
- **React** + **TypeScript** — component-based UI
- **Vite** — fast build tool with HMR
- **Tailwind CSS** — utility-first styling
- **shadcn/ui** — accessible UI component library
- **wouter** — lightweight client-side routing
- **TanStack Query** — server state management

### Backend
- **Node.js** + **Express.js** — REST API server
- **Drizzle ORM** — type-safe database layer
- **Zod** — runtime schema validation
- **Multer** — file upload handling

---

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repo
git clone https://github.com/Naol724/SYNTAX_01.git
cd SYNTAX_01

# Install dependencies
npm install

# Start development server
npm run dev
```

The app runs on **http://localhost:5000** — backend and frontend served from the same port.

---

## Project Structure

```
├── client/                  # React frontend
│   ├── src/
│   │   ├── pages/           # Home, About, Services, Projects, Contact
│   │   ├── components/
│   │   │   ├── layout/      # Navbar, Footer
│   │   │   └── ui/          # shadcn/ui components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # API client, query setup
│   │   └── index.css        # Design system & animations
├── server/                  # Express backend
│   ├── index.ts             # Server entry point
│   ├── routes.ts            # API routes
│   ├── storage.ts           # In-memory data storage
│   └── vite.ts              # Vite dev server integration
├── shared/
│   └── schema.ts            # Shared TypeScript types & Zod schemas
└── package.json
```

---

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/contact` | Submit a contact form message |
| `GET` | `/api/messages` | Retrieve all contact messages |

---

## Company Info

- 📍 **Address:** Bole Dembel, Amir Commercial Complex, Addis Ababa, Ethiopia
- 📞 **Phone:** +251 945 455 141 / +251 940 023 840
- 📧 **Email:** syntaxsoftwaresolution@gmail.com
- 🕐 **Hours:** Monday – Saturday, 9:00 AM – 6:00 PM

### Leadership
- **Nathenal Teklay** — CEO & Co-Founder
- **Leulseged Lemma** — CTO & Co-Founder

---

## License

© 2024 Syntax Software Solutions. All rights reserved.
