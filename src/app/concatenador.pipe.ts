import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from './model/usuario';
@Pipe({
  name: 'concatenador',
  pure: false
})
/**
 * Prueba con pipes, no terriblemente útil
 */
export class ConcatenadorPipe implements PipeTransform {

  transform(value: Usuario[], ...args: string[]): string {
    let separador = ", ";
    if ((args != null) && (args.length > 0)) {
      separador = args[0];
    }
    let result = "";
    for (let i = 0; i < value.length; i++) {
      if (i != 0) {
        result += separador;
      }
      result += value[i].nombre;
    }
    return result;
  }
}