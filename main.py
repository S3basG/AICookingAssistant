from fastapi import FastAPI, HTTPException
from firebase_config import db
from typing import Dict

app = FastAPI()

# RECIPE ENDPOINTS

@app.get("/recipes") #get recipes
def get_recipes():
    recipes_ref = db.collection("recipes")
    recipes = [doc.to_dict() for doc in recipes_ref.stream()]
    return {"recipes": recipes}

@app.get("/recipes/{id}") #get recipe by ID
def get_recipe(id: int):
    recipe_ref = db.collection("recipes").document(str(id))
    recipe = recipe_ref.get()

    if recipe.exists:
        return {"recipe": recipe.to_dict()}
    else:
        raise HTTPException(status_code=404, detail="Recipe not found")
    
@app.post("/recipes") #adds recipe to db
def create_recipe(recipe: Dict):
    try:
        recipes_ref = db.collection("recipes")
        new_recipes_ref = recipes_ref.add(recipe)
        return {"message": "Recipe added successfully", "recipe_id": new_recipes_ref[1].id}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    
@app.put("recipes/{id}") #updates recipe by ID
def update_recipe(id: int, new_recipe: Dict):
    recipe_ref = db.collection("recipes").document(str(id))
    recipe = recipe_ref.get()

    if not recipe.exists:
        raise HTTPException(status_code=404, detail="Recipe not found")
    recipe_ref.update(new_recipe)
    return {"message": "Recipe added successfully", "recipe_id": id}

@app.delete("recipes/{id}") #deletes recipe by ID
def delete_recipe(id: int):
    recipe_ref = db.collection("recipes").document(str(id))
    recipe = recipe_ref.get()

    if not recipe.exists:
        raise HTTPException(status_code=404, detail="Recipe not found")
    recipe_ref.delete(recipe)
    return {"message": "Recipe deleted successfully", "recipe_id": id}




# USER ENDPOINTS
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

