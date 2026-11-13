import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environments } from '../../environments/environment-prod';
import { Pelicula } from '../peliculas/peliculas-model';


@Injectable({ providedIn: 'root' })
export class PeliculasService {

  // ⚠️ SI CAMBIAS LA CONEXIÓN: si cambia la URL o la key en environment, esto se actualiza solo.
  private supabase: SupabaseClient = createClient(
    environments.supabaseUrl,   // ⚠️ nombre de la propiedad en tu environment.ts
    environments.supabaseKey    // ⚠️ nombre de la propiedad en tu environment.ts
  );

  // ⚠️ SI CAMBIAS EL NOMBRE DE LA TABLA: modificá 'peliculas' acá.
  private readonly tabla = 'peliculas';

  async obtenerPeliculas(): Promise<Pelicula[]> {
    
    const { data, error } = await this.supabase
      .from(this.tabla)
      .select('id, nombre, imagen, sinopsis, duracion');

    if (error) {
      console.error('Error al obtener películas:', error.message);
      throw error;
    }

    return data as Pelicula[];
  }
}