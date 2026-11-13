import { Component, OnInit, signal} from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Pelicula } from '../peliculas-model';

@Component({
  imports: [],
  selector: 'app-peliculas-card',
  styleUrl: './pelicula-card.css',
  templateUrl: './peliculas-card.html',
})
export class PeliculaCard implements OnInit {
  peliculas = signal<Pelicula[]>([]);

  constructor(private peliculasService: PeliculasService) {}

  async ngOnInit() {
    const catalogo = await this.peliculasService.obtenerPeliculas();
    this.peliculas.set(catalogo);
  }
}
