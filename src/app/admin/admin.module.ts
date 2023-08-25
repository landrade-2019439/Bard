import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DogsComponent } from '../dogs/dogs.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '/dogs',
        component: DogsComponent,
      },
    ]),
  ],
  declarations: [
    DogsComponent,
  ],
  providers: [],
})
export class AdminModule { }
