import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(private http: HttpClient) { }

  getAllPokemon(): Observable<object> {
    const query = "https://pokeapi.co/api/v2/pokemon";
    return this.http.get(query);
  }

  getPokemon(pokemon: string): Observable<object> {
    const query = "https://pokeapi.co/api/v2/pokemon/" + pokemon;
    return this.http.get(query);
  }
}
