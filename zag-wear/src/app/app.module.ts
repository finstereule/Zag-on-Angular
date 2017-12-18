import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CollectionSliderComponent } from './collection-slider/collection-slider.component';


@NgModule({
  declarations: [
    AppComponent,
    CollectionSliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
