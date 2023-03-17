import { Component } from '@angular/core';
import { Pokemon } from '../search-input/pokemon';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css']
})
export class PokemonInfoComponent {
  pokemon: Pokemon;

  constructor() {
    this.pokemon = new Pokemon("1", "psyduck");
  }
}
