import { NgModule } from '@angular/core';
import { AlertComponent, LoadingSpinnerComponent } from './components';
import { DropdownDirective, PlaceholderDirective } from './directives';
import { CommonModule } from '@angular/common';
// import { LoggingService } from '../logging.service';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropdownDirective,
    CommonModule,
  ],
  // providers: [LoggingService],
})
export class SharedModule {}
