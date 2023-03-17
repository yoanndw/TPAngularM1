import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string): string {
    let first = value.charAt(0);
    first = first?.toUpperCase();

    return first + value.substring(1);
  }

}
