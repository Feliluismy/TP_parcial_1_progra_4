import { Component, input, output, numberAttribute } from '@angular/core';
import { PeliculaModel } from '../peliculas-model';

@Component({
  imports: [],
  selector: 'app-peliculas-card',
  styleUrl: './pelicula-card.css',
  templateUrl: './peliculas-card.html',
})
export class PeliculaCard {

  pelicula = input.required<PeliculaModel>();

  compact = input(false);

  duracion = input(0, {transform:numberAttribute});

  size = input<'sm' | 'md' | 'lg'>('md', { alias: 'cardSize' }); 

}
