import { Component, OnInit } from '@angular/core';
import { Marcador } from 'src/app/classes/marcador.class';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MapaEditarComponent } from './mapa-editar.component';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']
})
export class MapaComponent implements OnInit
{
  marcadores: Marcador[] = [];
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(public snackBar: MatSnackBar, public dialog: MatDialog)
  {
    if(localStorage.getItem('marcadores'))
    {
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
  }

  editarMarcador(marcador: Marcador)
  {
    const dialogRef = this.dialog.open(MapaEditarComponent,
    {
      width: '250px',
      data: { titulo: marcador.titulo, descripcion: marcador.descripcion }
    });

    dialogRef.afterClosed().subscribe((result: Marcador) =>
    {
      if(!result)
      {
        return;
      }

      marcador.titulo = result.titulo;
      marcador.descripcion = result.descripcion;
      this.guardarStorage();
      this.snackBar.open('Marcador actualizado', 'Cerrar', {duration: 3000});
    });
  }

  agregarMarcador(evento)
  {
    const coordenadas: { lat: number, lng: number} = evento.coords;
    const nuevoMarcador = new Marcador(coordenadas.lat, coordenadas.lng);
    this.marcadores.push(nuevoMarcador);
    this.guardarStorage();
    this.snackBar.open('Marcador agregado', 'Cerrar', {duration: 3000});
  }

  borrarMarcador(index: number)
  {
    this.marcadores.splice(index, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador eliminado', 'Cerrar', {duration: 3000});
  }

  guardarStorage()
  {
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  ngOnInit() {
  }

}
