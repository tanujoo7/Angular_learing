import { Component, OnDestroy, OnInit } from '@angular/core'
import { Subscription } from 'rxjs'
import { Recipe } from '../recipes/recipe.model'
import { RecipesService } from '../recipes/recipe.service'

import { Ingredient } from '../shared/ingredient.model'
import { ShoppingListService } from './shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[]
  private letsUnscribe: Subscription

  constructor(
    private shoppingListService: ShoppingListService,
    private recipesService: RecipesService,
  ) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.letsUnscribe = this.shoppingListService.ingredientsChanged.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
        // console.log(ingredient)
      },
    )
  }

  onEditItem(id: number) {
    this.shoppingListService.editIngredientClick.next(id)
  }

  ngOnDestroy() {
    this.letsUnscribe.unsubscribe()
  }
}
