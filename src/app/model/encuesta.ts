import { Opcion, opciones1 } from './opcion';

export interface Encuesta {
    id: Number,
    titulo: string,
    opciones: Opcion[],
};

export const encuesta1 : Encuesta = {
    id: 1,
    titulo: 'Encuesta 1',
    opciones: opciones1
};