import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon';
import { PokeApiService } from '../poke-api.service';
import { SharePokemonIdService } from '../share-pokemon-id.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.css']
})
export class SearchInputComponent implements OnInit {
  id: string = "";
  pokemons: Pokemon[] = [];

  pokemon: Pokemon;

  pokemonSearchString: string = "";

  constructor(private pokeapi: PokeApiService, private shareId: SharePokemonIdService) {
    this.pokemon = new Pokemon();
  }

  ngOnInit() {
    this.pokemons = [];

    this.pokeapi.getAllPokemon().subscribe(data => {
      console.log("Get pokemons: ", data);
      
      for (const [id, obj] of (data as any).results.entries()) {
        let p = new Pokemon((id + 1).toString(), obj.name);
        console.log("Create pok", p)
        this.pokemons[id] = p;
      }
      console.log("Get pokemons: ", this.pokemons)
    });
  }

  getCurrentPokemonName(): string | undefined {
    return this.pokemons[Number(this.id) - 1].name;
  }

  go() {
    this.pokeapi.getPokemon(this.getCurrentPokemonName()!).subscribe(data => {
      this.pokemon.initFromJson(data);
      // console.log(this.pokemon);
      this.shareId.changePokemon(this.pokemon);
    });
  }
}
