import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject'
import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list/shopping-list.service'
import { Recipe } from './recipe.model'

@Injectable()
export class RecipesService {
  // onRecipeSelected = new Subject<Recipe>()
  recipeChanged = new Subject<Recipe[]>()
  // private recipes: Recipe[] = []
  private recipes: Recipe[] = [
    new Recipe(
      'Makkhan',
      'Tasty makkhan from India',
      'https://thumbs.dreamstime.com/z/awadhi-makkhan-malai-sweet-snack-made-milk-cream-cuisine-traditional-assorted-indian-dishes-top-view-174922190.jpg',
      [new Ingredient('Makkhan', 20), new Ingredient('Paneer', 400)],
    ),
    new Recipe(
      'Sweets',
      'Sweets without Sugar',
      'https://thumbs.dreamstime.com/z/indian-sweet-dish-makkhan-bada-makhan-recipe-traditional-festive-rajasthan-made-making-maida-dough-balls-which-177509537.jpg',
      [new Ingredient('Sugar', 10), new Ingredient('Ghee', 41)],
    ),
    new Recipe(
      'Curry',
      'Currry without Sugar',
      ' https://cdn.pixabay.com/photo/2015/03/26/09/47/sky-690293_960_720.jpg',
      [new Ingredient('butter', 10), new Ingredient('curd', 41)],
    ),
  ]

  constructor(private slService: ShoppingListService) {}
 
  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes
    this.recipeChanged.next(this.recipes.slice())
  }

  getRecipes() {
    return this.recipes.slice()
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToTheShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient)
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipeChanged.next(this.recipes.slice())
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe
    this.recipeChanged.next(this.recipes.slice())
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1)
    this.recipeChanged.next(this.recipes.slice())
  }

  // deleteIngredient(){
  //   this.slService.deleteIngredient()
  // }
}
