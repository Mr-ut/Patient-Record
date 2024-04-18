
---

# Audio Recording Form

This project is a web application for recording and reviewing audio recordings along with patient details. It consists of both frontend and backend components.

## Frontend

The frontend folder contains the client-side code for the application.

### Features

- **Recording Form**: Users can fill out a form with details about the recording, including the doctor's name, patient's name, patient's age, recording date, and upload the audio file.
- **Validation**: The form includes validation to ensure that all required fields are filled out before submission.
- **File Upload**: Users can upload audio files using the form.
- **Response Page**: After submitting the form, users are directed to a response page where they can review the details of their submission, including the audio recording.
- **Loading Indicator**: While the response page is loading, a loading indicator is displayed to indicate that the page is still loading.

### Technologies Used

- React: Frontend framework for building the user interface.
- React Router: For client-side routing to navigate between different pages.
- React Toastify: For displaying toast notifications.
- CSS: Styling the user interface.

### Setup

1. Navigate to the frontend folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm start
   ```

4. Open your web browser and navigate to [http://localhost:3000](http://localhost:3000) to view the frontend application.

## Backend

The backend folder contains the server-side code for the application.

### Features

- **API Endpoint**: Provides an API endpoint for uploading recordings.

### Technologies Used

- Express.js: Backend framework for handling API requests.
- MongoDB: NoSQL database for storing user submissions.
- Multer: Middleware for handling file uploads.

### Setup

1. Navigate to the backend folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the backend server:

   ```bash
   npm start
   ```

4. The backend server will start running on [http://localhost:8000](http://localhost:8000).


---

