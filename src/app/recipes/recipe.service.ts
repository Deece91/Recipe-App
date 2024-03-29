import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>;

    private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'Just a simple test for a description', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
        new Recipe('Another A Test Recipe', 'Just a simple test for a description', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
    ];

    getRecipes() {

        return this.recipes.slice();
    }
}