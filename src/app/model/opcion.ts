import {Usuario, usuarios} from './usuario';

export interface Opcion {
    id: Number;
    nombre: string;
    votos: Usuario[];
};

export const opciones1 : Opcion[] = [
    {id: 1, nombre: 'Lunes', votos: []},
    {id: 2, nombre: 'Martes', votos: [usuarios[0]]},
    {id: 3, nombre: 'Miércoles', votos: [usuarios[1], usuarios[2]]},
    {id: 4, nombre: 'Jueves', votos: []},
    {id: 5, nombre: 'Viernes', votos: []},
    {id: 6, nombre: 'Sábado', votos: []},
    {id: 7, nombre: 'Domingo', votos: []}
];