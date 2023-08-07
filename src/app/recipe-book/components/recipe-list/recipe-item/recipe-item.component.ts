import { Component, Input } from '@angular/core';
import { Recipe } from '../../../models';
import { Path } from 'src/app/shared';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipe!: Recipe;
  @Input() id!: number;
  path = Path;
}
