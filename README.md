# Chakra Frontend

React-based web interface for the Chakra agricultural suitability platform.

## Tech Stack
- React 19 + TypeScript
- Vite (build tool)
- Chakra UI v2 (component library)
- Recharts (data visualization)
- Axios (HTTP client)

## Getting Started
```bash
npm install
npm run dev
```
Runs on `http://localhost:5173`.

## Environment Variables
| Variable       | Default                          | Description          |
|----------------|----------------------------------|----------------------|
| `VITE_API_URL` | `http://localhost:8080/api/v1`  | Backend API base URL |

## Scripts
| Command           | Description                |
|-------------------|----------------------------|
| `npm run dev`     | Start development server   |
| `npm run build`   | Type-check + production build |
| `npm run preview` | Preview production build   |
| `npm run lint`    | Run ESLint                 |

## Project Structure
```
src/
├── api/                # Axios service (evaluationService.ts)
├── components/
│   ├── EvaluationForm.tsx      # Input form (district, crop, date)
│   ├── ResultsDashboard.tsx    # Results with score, charts, recommendation
│   ├── ScoreGauge.tsx          # Circular animated score indicator
│   └── LanguageSwitcher.tsx    # ES/EN toggle
├── i18n/
│   ├── translations.ts         # Translation strings
│   └── LanguageContext.tsx      # Language provider + hook
├── theme/
│   └── index.ts               # Chakra UI theme (Andean-inspired palette)
├── types/
│   └── index.ts               # TypeScript types (matches backend DTOs)
├── App.tsx                     # Root component (form ↔ results routing)
└── main.tsx                    # Entry point
```

## Features
- District, crop, and planting date selection
- Suitability score gauge with animated ring
- Risk level indicator (Favorable / Caution / Not Recommended)
- Bar charts for temperature, precipitation, humidity, soil moisture
- Spanish / English language toggle
- Responsive design
