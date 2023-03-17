import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonFilter'
})
export class PokemonFilterPipe implements PipeTransform {

  transform(value: any[], property: string, searchString?: string): any[] {
    if (typeof(value) !== "undefined") {
      if (typeof(searchString) !== "undefined" || searchString === "") {
        return value.filter(e => {
          return e[property].toLowerCase().indexOf(searchString?.toLowerCase()) !== -1;
        });
      } else {
        return value;
      }
    } else {
      return [];
    }
  }

}
