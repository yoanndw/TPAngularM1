import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pokemon } from './search-input/pokemon';

@Injectable({
  providedIn: 'root'
})
export class SharePokemonIdService {
  pokemon: Pokemon = new Pokemon("", "");
  observable: Subject<Pokemon>;

  constructor() { 
    this.observable = new Subject();
  }

  changePokemon(p: Pokemon) {
    this.observable.next(p);
    // console.log("service", p)
  }
}
