import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UploadComponent } from './upload.component';
import { UploadRoutingModule } from './upload-routing.module';

@NgModule({
  imports: [CommonModule, UploadRoutingModule, SharedModule],
  declarations: [UploadComponent],
  exports: [UploadComponent]
})
export class UploadModule { }
