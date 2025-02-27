AI Cooking Assistant



Overview

The AI Cooking Assistant is an intelligent system designed to help users with meal planning, guided cooking instructions, and recipe recommendations. It leverages AI/ML capabilities for personalized meal suggestions and step-by-step cooking assistance.

Features

🍽 Recipe Recommendations: AI-driven suggestions based on user preferences and available ingredients.

📖 Guided Cooking Instructions: Step-by-step assistance for cooking various meals.

📅 Meal Planning: Helps users organize their meals for the week.

🔐 User Authentication: Secure login and personalized user experience.

💾 Data Storage: Saves favorite recipes and user preferences.

Tech Stack & Tools

Backend: Django/Flask (Python)

Frontend: React Native.js

Database: Firebase

ML/AI Component: TensorFlow / PyTorch (future integration)

Version Control: Git & GitHub

Installation & Setup

Prerequisites

Ensure you have the following installed:

Python 3.9+

Node.js 16+

Git

Clone the Repository

 git clone https://github.com/S3basG/AICookingAssistant.git
 cd AICookingAssistant

Backend Setup

 cd backend
 python -m venv venv
 source venv/bin/activate  # On Windows: venv\Scripts\activate
 pip install -r requirements.txt
 uvicorn main:app --reload --port 8000

Frontend Setup

 cd frontend
 npm install
 npm start

API Endpoints

Base URL:

http://localhost:8000

Method

Endpoint

Description

GET

/

Returns a welcome message

GET

/recipes

Fetches available recipes

POST

/recipes

Adds a new recipe

GET

/recipes/{id}

Retrieves details of a specific recipe

Contribution Guidelines

Fork the repository and clone it locally.

Create a new branch (feature-branch-name).

Commit your changes with descriptive messages.

Push to your fork and create a Pull Request.

Follow code style guidelines and review process.

License

This project is licensed under the MIT License.

Contact

For any queries, reach out to:

Project Lead: Sebastian Garcia

GitHub Repository: AI Cooking Assistant

🌟 Show Your Support!

If you found this project useful, consider starring ⭐ the repository on GitHub!

