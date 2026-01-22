# Medical Report Generator

Aplikacja webowa do generowania raportów medycznych przy wykorzystaniu sztucznej inteligencji (LLM).

## Funkcjonalności

- Generowanie raportów medycznych na podstawie notatek lekarza
- Automatyczne tworzenie podsumowania wizyty, kolejnych kroków i draftu emaila do pacjenta
- Streaming odpowiedzi w czasie rzeczywistym
- Bezpieczna autentykacja użytkowników

## Technologie

### Frontend
- **Next.js** - Framework React
- **React** - Biblioteka do budowania interfejsów użytkownika
- **TypeScript** - Typowany JavaScript
- **Pages Router** - Routing w Next.js
- **Tailwind CSS** - Framework CSS

### Backend
- **FastAPI** - Nowoczesny, szybki framework Pythonowy do budowania API
- **OpenAI API** - Generowanie raportów przy wykorzystaniu modelu GPT-5-nano

### Autentykacja
- **Clerk** - Kompleksowe rozwiązanie do autentykacji i zarządzania użytkownikami

### Deployment
- **Docker** - Konteneryzacja aplikacji
- **Vercel** - Platforma do deploymentu (dev, preview, production z SSL)

## Struktura projektu

```
├── api/                 # Backend (FastAPI + OpenAI LLM)
│   ├── server.py        # Główny serwer z API i serwowaniem frontendu
│   └── index.py         # Oryginalny plik API
├── pages/              # Frontend (Next.js Pages Router)
│   ├── index.tsx        # Strona główna
│   └── product.tsx      # Formularz generowania raportów
├── styles/             # Style (Tailwind CSS)
├── public/             # Pliki statyczne
├── Dockerfile          # Konfiguracja Docker
└── .dockerignore       # Pliki ignorowane przez Docker
```

## Uruchomienie lokalne

### Frontend

```bash
npm run dev
```

### Backend (FastAPI)

```bash
cd api
python server.py
```

### Docker

```bash
docker build -t medical-report-generator .
docker run -p 8000:8000 medical-report-generator
```

## Zmienne środowiskowe

- `CLERK_JWKS_URL` - URL do Clerk JWKS dla autentykacji
- `OPENAI_API_KEY` - Klucz API OpenAI

## API Endpoints

- `POST /api/consultation` - Generowanie raportu medycznego (wymaga autentykacji)
- `GET /health` - Health check endpoint
- `GET /` - Serwowanie frontend aplikacji
