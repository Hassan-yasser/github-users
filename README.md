# GitHub Users Favorite App

This is a simple Next.js application that displays GitHub users with infinite scrolling, search with debounce, and the ability to mark users as favorites using Redux Persist.

## Features

- Display GitHub users from the public API
- Infinite scrolling to load more users as you scroll down
- Add users to a local favorites list
- Favorites are stored using Redux Persist (saved in localStorage)
- Debounced search input for better performance
- Smooth animations using Framer Motion when rendering user cards
- Separate page for viewing favorite users

## Tech Stack

- Next.js / React
- TypeScript
- Redux Toolkit
- Redux Persist
- Tailwind CSS
- Framer Motion
- GitHub REST API

## Pages

- `/` Home page with user list, search input, and infinite scroll
- `/favorites-users` Page that displays the list of favorited users

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/Hassan-yasser/github-users.git
```

cd github-users

```
npm install
```
