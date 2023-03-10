import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  constructor(private http: HttpClient) { }

  getAllPokemon(): any {
    const query = "https://pokeapi.co/api/v2/pokemon";
    const res = this.http.get(query);
    res.subscribe((data) => {
      console.log(data);
    });
  }
}
