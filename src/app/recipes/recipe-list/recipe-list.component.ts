import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

@Output() recipeWasSelected = new EventEmitter<Recipe>();

recipes: Recipe[] = [
  new Recipe('A Test Recipe', 'Just a simple test for a description', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
  new Recipe('Another A Test Recipe', 'Just a simple test for a description', 'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg'),
];

constructor() { }

ngOnInit(): void {
  
}

onRecipeSelected(recipe: Recipe){
  this.recipeWasSelected.emit(recipe);
}

}
