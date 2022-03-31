import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription } from 'rxjs'

import { Recipe } from '../recipe.model'
import { RecipesService } from '../recipe.service'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes: Recipe[]
  subscription:Subscription;

  constructor(
    private recipesService: RecipesService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    
   this.subscription =this.recipesService.recipeChanged.subscribe((recipes:Recipe[]) => {
        this.recipes=recipes
    })
    this.recipes = this.recipesService.getRecipes()
  }

  addToEditRecipe(index: number) {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
