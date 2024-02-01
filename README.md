# AI Diagnostic Model for Healthcare Chat

## Overview

This project aims to develop a comprehensive AI diagnostic model for healthcare that enables users to engage in a chat about basic healthcare information. Users can also upload medical reports, with a focus on chest X-rays in the current prototype, for a more in-depth understanding.

**Note: This project is still in development, with the user interface and the deep learning model components completed. Future work will involve developing an NLP chatbot trained on medical data to enhance user interactions and provide relevant solutions.**

## Project Structure

### Backend

- **`model/full_model_weight.h5`**: The trained deep learning model weights file.
- **`app.py`**: Flask backend server handling image uploads and model predictions.

### Frontend

- **`src/`**: ReactJS frontend source code.
  - **`components/`**: React components for the user interface.
  - **`App.css`**: Styles for the main React App component.
  - **`App.js`**: Main React App component structure.
  - **`App.test.js`**: Test file for App component.
  - **`index.css`**: Styles for the React app entry point.
  - **`index.js`**: Entry point for the React app.
  - **`logo.png`**: Project logo image.
  - **`logo.svg`**: Project logo in SVG format.
  - **`reportWebVitals.js`**: Metrics reporting script.
  - **`setupTests.js`**: Configuration for Jest tests.

### Others

- **`public/`**: Static assets including the HTML template.
- **`.gitignore`**: Specifies files and directories to be ignored by Git.
- **`Chest.ipynb`**: Jupyter Lab notebook file containing the main code used to train the deep learning model.

## Tech Stack

- ReactJS: Frontend user interface.
- TensorFlow & Keras: For developing and training the deep learning model.
- OpenCV (cv2): Image processing for medical reports.
- Jupyter Lab: Notebook for developing and training machine learning models.
- Python: Backend server logic and data processing.
- Flask: Backend server framework.
- Google Colab: Collaborative environment for training machine learning models and data analysis.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo.git
   ```

2. Navigate to the `frontend` directory and install dependencies:

   ```bash
   cd frontend
   npm install
   ```

3. Start the React app:

   ```bash
   npm start
   ```

4. In a separate terminal, navigate to the `backend` directory and run the Flask app:

   ```bash
   cd backend
   python app.py
   ```

The application should now be accessible at `http://localhost:3000` for the React frontend and `http://localhost:5000` for the Flask backend.

Feel free to explore and contribute to the development of this project!

---


