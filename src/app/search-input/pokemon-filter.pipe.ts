import { Pipe, PipeTransform } from '@angular/core';
import { Pokemon } from '../pokemon';

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonFilterPipe implements PipeTransform {

  transform(value: Pokemon[], searchString?: string): Pokemon[] {
    if (typeof(value) !== "undefined") {
      if (typeof(searchString) !== "undefined" || searchString === "") {
        return value.filter(e => {
          if (typeof e !== "undefined") {
            return e.name!.toLowerCase().indexOf(searchString?.toLowerCase()) !== -1;
          } else {
            return false;
          }
        });
      } else {
        return value;
      }
    } else {
      return [];
    }
  }

}
