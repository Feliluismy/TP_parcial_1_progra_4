import { Component, signal, computed, inject } from '@angular/core';
import { PeliculaModel } from '../peliculas-model';
import { RouterLink } from '@angular/router';
import { PeliculasStore } from '../pelicula-store';
import { PeliculaCard } from '../card/peliculas-card';


@Component({
  imports: [RouterLink, PeliculaCard],
  selector: 'app-pelicula-list',
  styleUrl: './peliculas-list.css',
  templateUrl: './peliculas.html',
})
export class PeliculaList {

  private readonly store = inject(PeliculasStore);

  filter = signal('');

  peliculas = computed(() => {
    const q = this.filter().toLowerCase();
    return this.store.peliculas().filter(p => p.nombre.toLowerCase().includes(q))
  })
  





  /*remove(id: number) {
    this.store.remove(id);
  }*/
}
