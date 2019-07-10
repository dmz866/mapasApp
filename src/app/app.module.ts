import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './components/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    MapaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAwSSgZJ4t8wwfS5U980B0WWhOMlCe40fE'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
