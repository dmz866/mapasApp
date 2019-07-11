import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './components/mapa/mapa.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MapaEditarComponent } from './components/mapa/mapa-editar.component';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  entryComponents: [
    MapaEditarComponent
  ],
  declarations: [
    AppComponent,
    MapaComponent,
    MapaEditarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatSnackBarModule,
    MatDialogModule,
    MatInputModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyAwSSgZJ4t8wwfS5U980B0WWhOMlCe40fE'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
