export interface PeliculaModel {
id: number;
nombre: string;
imagen: string;
sinopsis: string;
duracion: number;
}

export type PeliculaDraft = Omit<PeliculaModel, 'id'>;
export type PeliculaPatch = Partial<PeliculaModel>;
export function createEmptyPeliculaDraft(): PeliculaDraft{
    return {
        nombre: "",
        imagen: "",
        sinopsis: "",
        duracion: 0,
    };
}