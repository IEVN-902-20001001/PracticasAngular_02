import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TemperaturaComponent } from './temperatura/temperatura/temperatura.component';
import { MultiplicarComponent } from './multiplicar/multiplicar/multiplicar.component';
import { CinepolisComponent } from './cinepolis/cinepolis/cinepolis.component';


@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent, MultiplicarComponent, CinepolisComponent
  ],
  imports: [
    BrowserModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
