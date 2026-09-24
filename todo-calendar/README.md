# Todo + Calendar (React + MUI + FullCalendar)

A small, modern todo list with integrated calendar, built with React + TypeScript, Material UI, and FullCalendar. Clean, responsive UI inspired by Flutter-style polish.

## Features
- Add tasks with optional due dates
- Toggle completion, delete tasks
- Persistent storage via localStorage
- Calendar views: Month, Week, Day, and List
- Click a date to quickly create a task for that day
- Drag events to change due dates

## Getting Started

```bash
cd todo-calendar
npm install
npm run dev
```

Open the printed local URL in your browser.

## Build

```bash
npm run build
npm run preview
```

## Tech Stack
- React + TypeScript + Vite
- Material UI + X Date Pickers
- FullCalendar (dayGrid, timeGrid, list, interaction)
- dayjs for dates

## Notes
- Data is stored in `localStorage` under the `todos` key.
- To reset, clear site data in your browser or remove that key.
