import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'

import { Recipe } from '../recipe.model'
import { RecipesService } from '../recipe.service'

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe
  id: number

  constructor(
    private recipesService: RecipesService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    // const id=this.route.snapshot.params['id'];
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id']
      this.recipe = this.recipesService.getRecipe(+params['id'])
    })
  }

  onAddToShoppingList() {
    this.recipesService.addIngredientsToTheShoppingList(this.recipe.ingredient)
  }

  AddToRecipeEditComponent() {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route })
  }

  deleteRecipe() {
    this.recipesService.deleteRecipe(this.id)
    this.router.navigate(['/recipes'])
  }
}
