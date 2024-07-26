# PlantBud.

## Overview
PlantBud is a plant care assistant application for discovering suitable plants, learning about plant care, and keeping track of the user's plants.

## Features
- Discover plants
- Learn about plant care
- Track your plants

## Installation
To set up and run PlantBud on your local machine, follow these steps:

1. Clone the repository:
  ```bash
  git clone https://github.com/yourusername/plantbud.git
  cd plantbud
  ```

2. Install Dependencies:
Ensure you have Node.js installed. Then run:
  ```bash
  npm install
  ```

3. PlantBud uses Firebase for authentication and data storage. Set up a Firebase project and add your Firebase configuration to a .env file in the root directory.
  ```env
  VITE_API_KEY=your_api_key
  VITE_AUTH_DOMAIN=your_project_id.firebaseapp.com
  VITE_PROJECT_ID=your_project_id
  VITE_STORAGE_BUCKET=your_project_id.appspot.com
  VITE_MESSAGING_SENDER_ID=your_messaging_sender_id
  VITE_APP_ID=your_app_id
  ```

4. Start the Application in Development Mode:
  Make sure base in vite.config.js is set to '/'
  ```bash
  npm run dev
  ```
This will run the app in development mode. Open http://localhost:3000 to view it in the browser.

5. Build and Serve the Application for Production:
  ```bash
  npm run build
  npm run preview
  ```
  Replace dist/index.html and dist/login.html with dist/public/index.html
  and dist/public./login.html respectively.
This will create a production build and serve it using Vite's preview server.

## Testing
This project includes tests to ensure reliability and correctness.

To run tests:
  ```bash
  npm test
  ```

For detailed information on the testing strategy, implemented tests, and future plans, please refer to the [Test Documentation](./TESTS.md).