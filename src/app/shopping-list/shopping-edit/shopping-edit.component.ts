import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
@ViewChild('nameInput', {static: false})  nameInputRef!: ElementRef;
@ViewChild('amountInput', {static: false})  amountInputRef!: ElementRef;
@Output() ingredientAdded = new EventEmitter<ingredients>();
  constructor() { }

  ngOnInit() {

  }

  onAddItem() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new ingredients(ingName, ingAmount);

    this.ingredientAdded.emit(newIngredient);
  }
}
