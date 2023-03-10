import { Component } from '@angular/core';

import { Pokemon } from './pokemon';
import { PokeApiService } from '../poke-api.service';

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

  constructor(private pokeapi: PokeApiService) {}

  go() {
    this.pokeapi.getAllPokemon();
  }
}
