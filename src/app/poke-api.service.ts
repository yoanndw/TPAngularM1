import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GetAllPokemonsResponse, PokemonInfo } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(private http: HttpClient) { }

  getAllPokemons(): Observable<GetAllPokemonsResponse> {
    const query = "https://pokeapi.co/api/v2/pokemon";
    return this.http.get(query) as Observable<GetAllPokemonsResponse>;
  }

  getPokemon(pokemon: string): Observable<PokemonInfo> {
    const query = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    return this.http.get(query) as Observable<PokemonInfo>;
  }
}
