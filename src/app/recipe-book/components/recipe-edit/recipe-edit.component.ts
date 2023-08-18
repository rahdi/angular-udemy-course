import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../models';
import { RecipeService } from '../../recipe.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit {
  recipe?: Recipe;
  id?: number;
  editMode = false;
  recipeForm?: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(({ id }) => {
      this.recipe = this.recipeService.getRecipe(+id);
      this.id = id;
      this.editMode = !!id;
      this.initForm();
    });
  }

  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';

    if (this.editMode && typeof this.id !== 'undefined') {
      const { name, imagePath, description } = this.recipeService.getRecipe(
        this.id
      );

      recipeName = name;
      recipeImagePath = imagePath;
      recipeDescription = description;
    }

    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName),
      imagePath: new FormControl(recipeImagePath),
      description: new FormControl(recipeDescription),
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }
}
