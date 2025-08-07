
# Frontend Test Submission — URL Shortener Web Application

## Objective
Build a React-based URL Shortener that interacts with an API to shorten URLs, display results, and log all activities using a centralized logging mechanism.

## Tech Stack
- React.js (with Hooks)
- JavaScript (ES6+)
- CSS
- Fetch API
- Custom logging middleware

## Features
1. **URL Shortening**: Enter a long URL, shorten it via API, and display the result.
2. **Logging Middleware**: All user actions and errors are logged to an external endpoint.
3. **Error Handling**: Friendly UI messages for invalid URLs, API failures, and empty inputs. All errors are logged.
4. **Real-time UI Feedback**: Loading state, disabled button during processing, and clear success/error messages.

## Folder Structure
```
Frontend Test Submission/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   └── ShortenerForm.jsx
│   ├── LoggingMiddleware/
│   │   └── logger.js
│   ├── App.js
│   ├── index.js
│   └── App.css
├── package.json
└── README.md
```

## Setup Instructions
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the app:**
   ```bash
   npm run dev
   ```
3. **Open in browser:**
   [http://localhost:3000](http://localhost:3000)

## Improvements Possible
- List of previously shortened URLs
- Copy-to-clipboard for shortened link
- Analytics (number of clicks)
- User authentication
- TypeScript support

---
This project demonstrates frontend skills in React, API integration, error handling, and modular code organization.
