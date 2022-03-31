import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Recipe } from '../recipes/recipe.model'
import { RecipesService } from '../recipes/recipe.service'
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(
    private recipeService: RecipesService,
    private http: HttpClient,
  ) {}
  storeRecipes() {
    const recipes = this.recipeService.getRecipes()
    this.http
      .put(
        'https://recipebook-eb57d-default-rtdb.firebaseio.com/recipes.json',
        recipes,
      )
      .subscribe((responseData) => {
        console.log(responseData)
      })
  }
  fetchRecipes() {
    return this.http
      .get<Recipe[]>(
        'https://recipebook-eb57d-default-rtdb.firebaseio.com/recipes.json',
      )
      .pipe(
        map((recipes) => {
          return recipes.map((recipe) => {
            return {
              ...recipe,
              ingredients: recipe.ingredient ? recipe.ingredient : [],
            }
          })
        }),
        tap((recipes) => [this.recipeService.setRecipes(recipes)]),
      )
  }
}
