# MovieExplorer

Responsive React movie/show explorer powered by the free TVMaze API.

## Features
- Responsive landing page with navbar, hero, CTA, features, and footer
- Dedicated `/movies` listing page
- Browse TVMaze catalogue entries
- Debounced title search using `/search/shows?q=`
- Responsive poster grid
- Interactive details modal
- Loading, error, and empty states
- Keyboard Escape and backdrop modal close

## Run locally
```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build
```bash
npm run build
```

## API
TVMaze public API: https://api.tvmaze.com
No API key is required for the public endpoints used by this project.
