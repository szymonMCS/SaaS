# Medical Report Generator

Aplikacja webowa do generowania raportów medycznych.

## Technologie

### Frontend
- **Next.js** - Framework React
- **React** - Biblioteka do budowania interfejsów użytkownika
- **TypeScript** - Typowany JavaScript
- **Pages Router** - Routing w Next.js
- **Tailwind CSS** - Framework CSS

### Backend
- **FastAPI** - Nowoczesny, szybki framework Pythonowy do budowania API
- **LLM** - Generowanie raportów przy wykorzystaniu dużych modeli językowych

### Deployment
- **Vercel** - Platforma do deploymentu
  - Dev environment
  - Preview environment
  - Production environment z SSL

### Autentykacja i Subskrypcje
- **Clerk** - Kompleksowe rozwiązanie do autentykacji i zarządzania użytkownikami

## Uruchomienie lokalne

```bash
# Uruchomienie frontend
npm run dev

# Uruchomienie backend (w katalogu api)
cd api
python index.py
```

## Struktura projektu

```
├── api/                 # Backend (FastAPI)
├── pages/              # Frontend (Next.js Pages Router)
├── styles/             # Style (Tailwind CSS)
└── public/             # Pliki statyczne
```
