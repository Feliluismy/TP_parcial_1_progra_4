export interface Pelicula {
    id: number;
    nombre: string;
    imagen: string;
    sinopsis: string;
    duracion: number;
}

export type PeliculaDraft = Omit<Pelicula, 'id'>;
export type PeliculaPatch = Partial<Pelicula>;
export function createEmptyPeliculaDraft(): PeliculaDraft{
    return {
        nombre: "",
        imagen: "",
        sinopsis: "",
        duracion: 0,
    };
}