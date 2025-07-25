# GitHub Users App

A modern and responsive GitHub Users Explorer built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This app allows users to browse GitHub profiles, search with debouncing, add/remove favorites, and enjoy a clean dark mode experience.

> Live data powered by https://api.github.com
> Built with state management using Redux Toolkit + Redux Persist

---

## Repository

https://github.com/Hassan-yasser/github-users.git

---

## Features

- Infinite scroll to load more users
- Debounced search input for optimized filtering
- Dark mode toggle with persisted preference
- Favorites page (add/remove users from favorites)
- Global state with Redux Toolkit and Redux Persist
- Error handling for API failures and empty results
- Custom toasts for feedback on actions
- Smooth animations using Framer Motion
- Fully responsive design

---

src/
├── app/
│ ├── favorites-users/ # Favorites page route
│ ├── globals.css # Global styles
│ ├── layout.tsx # Root layout
│ └── page.tsx # Main page
│
├── components/  
│ ├── favorites-layout/ # Favorites UI components
│ ├── header/ # App header
│ ├── Loader-Errors/ # Loading and error components
│ ├── pagination/ # Pagination (if any)
│ ├── Search/ # Debounced search bar
│ ├── ThemeButton/ # Dark mode toggle button
│ ├── Toaster/ # Custom toast alerts
│ ├── userCard/ # User profile cards
│ └── users-layout/ # Main users layout
│
├── lib/
│ ├── hooks/ # Custom hooks (e.g., useDebounce)
│ └── providers/ # Global providers (e.g., ReduxProvider)
│
├── redux/
│ ├── PersistSlices/ # Redux slices with persistence
│ ├── slices/ # Regular Redux slices
│ └── PersistStore.tsx # Store config with redux-persist
│
├── public/ # Static assets
│
├── .gitignore
└── eslint.config.mjs

---

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion
- Redux Toolkit
- Redux Persist
- React Hot Toast

---

## Installation & Usage

```bash
# Clone the repository
git clone https://github.com/Hassan-yasser/github-users.git

# Navigate to the project folder
cd github-users

# Install dependencies
npm install

# Run the development server
npm run dev
```
