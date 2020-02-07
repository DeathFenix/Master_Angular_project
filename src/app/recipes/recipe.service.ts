import { EventEmitter, Injectable } from "@angular/core";

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Tasty Schnitzel',         
            'A super-tasty Schnitzel - just awesome!', 
            'https://previews.123rf.com/images/boomeart/boomeart1905/boomeart190501874/124030252-tasty-schnitzel-in-breading-with-fried-potato-onion-and-mushrooms.jpg', 
            [
                new Ingredient('Meat', 1),
                new Ingredient('Frenc Fries', 20)
            ]),
        new Recipe(
            'Big Fat Burger', 
            'What else you need to say?', 
            'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2015/5/5/0/FNM_060115-Fatbuger-Recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1431449537270.jpeg', 
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1)
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