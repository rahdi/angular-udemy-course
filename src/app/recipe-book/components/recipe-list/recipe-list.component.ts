import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Path } from 'src/app/shared';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes?: Recipe[];

  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  openNewRecipe() {
    this.router.navigate([Path.NewRecipe], { relativeTo: this.route });
  }
}
