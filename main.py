from fastapi import FastAPI
from firebase_config import db

app = FastAPI()

@app.get("/recipes")
def get_recipes():
    recipes_ref = db.collection("recipes")
    recipes = [doc.to_dict() for doc in recipes_ref.stream()]
    return {"recipes": recipes}

@app.get("/users")
def get_users():
    users_ref = db.collection("users")
    users = [doc.to_dict() for doc in users_ref.stream()]
    return {"users": users}
