import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UploadComponent } from './upload.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'upload', component: UploadComponent }
    ])
  ],
  exports: [RouterModule]
})
export class UploadRoutingModule { }
