# Torn Bazaar

A simplified marketplace frontend inspired by Torn, built with React + TypeScript, using Redux Toolkit and Redux-Saga for state management. Includes legacy jQuery behavior (tooltips) and SCSS styling.

## 🔧 Tech Stack

- **React 19** + **TypeScript**
- **Redux Toolkit** + **Redux-Saga**
- **jQuery** (for simulating legacy DOM manipulation)
- **SCSS** for styling
- **Vite** for fast build/dev
- **Jest** and **Testing Library** for testing

## 🖥️ Development Environment

- **macOS Sequoia 15.5**
- **Node.js**: `v22.17.0`
- **npm**: `10.9.2`

---

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

---

## ✨ Features
- Redux-based item marketplace
- Async item loading with redux-saga
- Dynamic tooltips via jQuery hover binding
- Cart state management
- Global and scoped SCSS styling

---

## 🧪 Testing
Jest and React Testing Library are preinstalled. To run tests:
```bash
# Run tests
npm run test
```

---

## 📂 Project Structure

```bash
src/
├── app/             # Redux store setup
├── features/
│   └── market/      # Item list, cart, saga, slice, UI
├── styles/          # Global SCSS
├── App.tsx
├── main.tsx
```

---

## 📝 License
MIT — free to use, fork, and modify.