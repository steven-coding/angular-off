import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StorageComponent } from './storage.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'storage', component: StorageComponent }
    ])
  ],
  exports: [RouterModule]
})
export class StorageRoutingModule { }
