import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core'
import { NgForm } from '@angular/forms'
import { Subscription } from 'rxjs'

import { Ingredient } from '../../shared/ingredient.model'
import { ShoppingListService } from '../shopping-list.service'

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef
  // @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef
  @ViewChild('f', { static: false }) accessForm: NgForm
  cancleSubscription: Subscription
  editMode = false
  editedItemIndex: number
  editedItem: Ingredient
  clearForm = false

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingListService.editIngredientClick.subscribe((index: number) => {
      this.editMode = true
      this.editedItemIndex = index
      this.editedItem = this.shoppingListService.getIngredient(index)
      this.accessForm.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount,
      })
    })
  }

  onAddItem(form: NgForm) {
    const ingName = form.value.name
    const ingAmount = form.value.amount
    const newIngredient = new Ingredient(ingName, ingAmount)
    if (this.editMode) {
      this.shoppingListService.updateIngredient(
        this.editedItemIndex,
        newIngredient,
      )
    } else {
      this.shoppingListService.addIngredient(newIngredient)
    }
    this.accessForm.reset()
    this.editMode = false
  }

  deleteItem() {
    this.shoppingListService.deleteIngredient(this.editedItemIndex)
    this.letsClearForm()
  }

  letsClearForm() {
    this.clearForm = true
    this.editMode = false
    this.accessForm.reset()
  }

  ngOnDestroy() {
    // this.cancleSubscription.unsubscribe()
  }
} 
