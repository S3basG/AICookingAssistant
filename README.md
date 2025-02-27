# AI Cooking System



## Introduction
The **AI Cooking System** is designed to assist users with all their meal-related needs. From suggesting recipes based on dietary preferences and existing inventory to generating guided cooking instructions, our goal is to create an interactive and intelligent cooking companion.

### Key Functionalities
- **Recipe Recommendations**: Provide recipes based on user preferences (e.g., spicy, vegan) and the available inventory.
- **Guided Cooking Instructions**: Step-by-step instructions to help users cook with ease.
- **Meal Planning**: Suggest weekly or monthly meal plans with considerations for nutrition, dietary restrictions, and expiration dates.

## Features

   - Inventory Management: Track ingredients from grocery receipts or user inputs.  
   - Automated Recipe Recommendations: Use AI to suggest recipes that match user preferences.  
   - Guided Cooking: Provide real-time instructions and feedback during the cooking process.  
   - Future AI Integration: Incorporate advanced ML/AI for more robust recommendations and real-time speech recognition.

## Tech Stack & Tools
- **Backend**: Django or Flask (Python-based framework)  
- **Frontend**: React Native (JavaScript)  
- **Database**: Firebase for real-time database and authentication  
- **ML/AI Component**: (Future Integration) TensorFlow or PyTorch for advanced data analysis and model training  
- **Version Control**: Git & GitHub for source code management  

## Installation & Setup

### Prerequisites
Ensure you have the following installed on your machine:
- **Python 3.9+**
- **Node.js 16+**
- **Git**

```bash
git clone https://github.com/S3basG/AICookingAssistant.git
cd AICookingAssistant

```
```bash
cd backend
python -m venv venv
# Activate virtual environment:
# On macOS/Linux:
source venv/bin/activate
# On Windows:
venv\Scripts\activate

pip install -r requirements.txt
uvicorn main:app --reload --port 8000
```
```bash
cd ../frontend
npm install
npm start
```
