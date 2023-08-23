import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { Path, SharedModule } from '../shared';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    FormsModule,
    SharedModule,
    RouterModule.forChild([{ path: Path.Auth, component: AuthComponent }]),
  ],
  exports: [RouterModule],
})
export class AuthModule {}
