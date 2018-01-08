import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { StorageModule } from './storage/storage.module';
import { UploadModule } from './upload/upload.module';


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AboutModule,
    HomeModule,
    StorageModule,
    UploadModule,
    SharedModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: true
    })
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]

})
export class AppModule { }
