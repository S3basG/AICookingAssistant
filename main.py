from fastapi import FastAPI, HTTPException
from firebase_config import db

app = FastAPI()

@app.get("/recipes")
def get_recipes():
    recipes_ref = db.collection("recipes")
    recipes = [doc.to_dict() for doc in recipes_ref.stream()]
    return {"recipes": recipes}

@app.get("/recipe/{id}")
def get_recipe(id: int):
    recipe_ref = db.collection("recipes").document(str(id))
    recipe = recipe_ref.get()

    if recipe.exists:
        return {"recipe": recipe.to_dict()}
    else:
        raise HTTPException(status_code=404, detail="Recipe not found")
    
@app.get("/users")
def get_users():
    users_ref = db.collection("users")
    users = [doc.to_dict() for doc in users_ref.stream()]
    return {"users": users}

@app.get("/user/{id}")
def get_recipe(id: int):
    user_ref = db.collection("users").document(str(id))
    user = user_ref.get()

    if user.exists:
        return {"user": user.to_dict()}
    else:
        raise HTTPException(status_code=404, detail="User not found")
