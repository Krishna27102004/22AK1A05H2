URL Shortener Web App (Frontend Only)
Project Overview
This is a frontend-only URL Shortener web app built using React. Users can enter a long URL and get a shortened version displayed on the page. The app also includes a Statistics page to show previously shortened URLs (mock data in frontend for demonstration).

Features
Shorten long URLs (frontend simulation only, no backend storage).

Display a list of shortened URLs with click counts (mock data).

Responsive UI using React and CSS.

Modular structure with reusable components and custom API hook (optional for future backend integration).

App Structure
url-shortener-frontend/
│
├─ public/
│   └─ index.html
│
├─ src/
│   ├─ components/
│   │   ├─ UrlShortenerPage.js       # Page for shortening URLs
│   │   └─ StatisticsPage.js        # Page to display stats
│   │
│   ├─ hooks/
│   │   └─ useApi.js                # Optional hook for future API calls
│   │
│   ├─ styles/
│   │   └─ App.css                  # Styling
│   │
│   ├─ App.js                        # Root component with routing
│   └─ index.js                      # Entry point
│
├─ package.json
└─ README.md
Technologies Used
Frontend: React, JavaScript, HTML, CSS

Routing: React Router DOM

HTTP Requests (optional): Axios for future API integration

