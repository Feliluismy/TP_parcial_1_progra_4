export interface Pelicula {
    id: number;
    nombre: string;
    imagen: string;
    sinopsis: string;
    duracion: number;
}

/* esto es para:
CREAR UNA PELICULA, NO PARA MOSTRARLA ANIMAL

export type PeliculaDraft = Omit<Pelicula, 'id'>;
omite el ID a la hora de createEmptyTicketDraft
una nueva pelicula
export type PeliculaPatch = Partial<Pelicula>;
permite que una variable pueda quedar vacia (para este TP, inutil)
export function createEmptyPeliculaDraft(): PeliculaDraft{
return {
       nombre: "",
        imagen: "",
       sinopsis: "",
        duracion: 0,
    };
}*/