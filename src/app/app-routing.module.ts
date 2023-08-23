import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Path } from './shared';
import { NotFoundComponent } from './not-found';
import { AuthComponent } from './auth';

const appRoutes: Routes = [
  {
    path: Path.Empty,
    redirectTo: Path.Recipes,
    pathMatch: 'full',
  },
  { path: Path.Auth, component: AuthComponent },
  { path: Path.NotFound, component: NotFoundComponent },
  {
    path: Path.Wildcard,
    redirectTo: Path.NotFound,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
