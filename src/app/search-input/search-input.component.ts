import { Component } from '@angular/core';

import { Pokemon } from './pokemon';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent {
  id: string = "";
  pokemons = [
    new Pokemon("1", "Pikachu"),
    new Pokemon("2", "Tortank"),
    new Pokemon("3", "Bulbizar"),
    new Pokemon("4", "Miaous")
  ];

  pokemonSearchString: string = "";

  go() {
    if (this.id !== "") {
      console.log("go!", this.id);
    }
  }
}
