import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';


@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

   private recipes: Recipe[] = [
        new Recipe('A Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
            new Ingredient('meat', 1),
            new Ingredient('fries', 2)
        ]),
        new Recipe('Another Test Recipe', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg', [
                new Ingredient('bread', 2),
                new Ingredient('meaaat', 5)
        ])
    ];

   constructor(private slService: ShoppingListService){}

   getRecipes(){
       return this.recipes.slice();
   }

   addIngredientsToShoppingList(ingredients: Ingredient[]){
       this.slService.addIngredients(ingredients);
   }

}
