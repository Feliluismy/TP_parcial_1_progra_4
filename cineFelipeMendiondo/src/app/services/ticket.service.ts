import { computed, Injectable, signal } from '@angular/core';
import { Ticket } from '../ticket/ticket-model';
import { Pelicula } from '../peliculas/peliculas.model';

@Injectable({providedIn: 'root'})
export class TicketService {
    private readonly _ticket = signal<Ticket[]>([]);

    readonly ticket = this._ticket.asReadonly();
    
    readonly cantidad = computed(() => this._ticket().reduce((cantActual, ticket) => 
        cantActual + ticket.cantidad, 0)
  );

  agregar(pelicula: Pelicula): void {
    this._ticket.update(tickets => {
      const existe = tickets.some(t => t.pelicula === pelicula.id);

      if (existe) {
        return tickets;
      }
      return [...tickets, { id: pelicula.id, pelicula: pelicula.id, cantidad: 1 }];
    });
}
}
/*readonly es una palabra clave de TypeScript
que significa “esta propiedad no se puede
reasignar después de inicializarla
asReadonly() devuelve una versión sin esos métodos:
solo podés leerla llamándola como función, por ejemplo carrito.items().
*/
//usar este servicio == usar misma instancia