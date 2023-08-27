import { NgModule } from '@angular/core';
import { RecipeService } from './recipe-book';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth';
// import { LoggingService } from './logging.service';

@NgModule({
  providers: [
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    // LoggingService
  ],
})
export class CoreModule {}
