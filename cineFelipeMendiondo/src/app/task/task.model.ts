// Datos del usuario (credenciales + perfil)
export interface UserModel {
    id: number;
    nombre: string;
    contraseña: string;
    email?: string;
}

// Datos de una reserva/compra de entradas
export interface ReservaModel {
    id: number;
    usuarioId: number;
    funcion: number;     // 1 alta · 2 media · 3 baja
    butacas: string[];
}
