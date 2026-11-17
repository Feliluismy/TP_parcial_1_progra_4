import { Component, OnInit, signal} from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../peliculas.model';

@Component({
  imports: [],
  selector: 'app-peliculas',
  styleUrl: './pelicula.component.css',
  templateUrl: '../html/peliculas.html',
})
export class PeliculaCard implements OnInit {
  peliculas = signal<Pelicula[]>([]);
  //signal: es un contenedor reactivo: guarda un valor y avisa
  // automáticamente a la plantilla cuando ese valor cambia,
  // para que Angular vuelva a renderizar solo lo necesario.

  constructor(private peliculasService: PeliculasService) {}//lo manejo via this por ser dentro de la clase

  async ngOnInit() {
    const catalogo = await this.peliculasService.obtenerPeliculas();
    this.peliculas.set(catalogo);
  }
  
}
