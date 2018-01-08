import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StorageComponent } from './storage.component';
import { StorageRoutingModule } from './storage-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, StorageRoutingModule, SharedModule],
  declarations: [StorageComponent],
  exports: [StorageComponent]
})
export class StorageModule { }
