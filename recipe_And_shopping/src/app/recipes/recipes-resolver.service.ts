import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from '@angular/router'
import { DataStorageService } from '../shared/data-storage.service'
import { Recipe } from './recipe.model'
import { RecipesService } from './recipe.service'

@Injectable({
  providedIn: 'root',
})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeServie: RecipesService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recieps = this.recipeServie.getRecipes()
    if (recieps.length === 0) {
      return this.dataStorageService.fetchRecipes()
    } else {
      return recieps
    }
  }
}
