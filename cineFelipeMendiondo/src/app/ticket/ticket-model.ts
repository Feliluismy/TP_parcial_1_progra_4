export interface Ticket {
    id: number;
    pelicula: number;
    cantidad: number;
}

export type TicketDraft = Omit<Ticket, 'id'>;
export type TicketPatch = Partial<Ticket>;
export function createEmptyTicketDraft(): TicketDraft{
    return {
        pelicula: 0,
        cantidad: 0
    };
}