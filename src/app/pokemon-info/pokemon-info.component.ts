import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pokemon } from '../search-input/pokemon';
import { SharePokemonIdService } from '../share-pokemon-id.service';

@Component({
  selector: 'app-pokemon-info',
  templateUrl: './pokemon-info.component.html',
  styleUrls: ['./pokemon-info.component.css', '../app.component.css']
})
export class PokemonInfoComponent implements OnInit {
  pokemon?: Pokemon;
  shareIdSubscription?: Subscription;

  constructor(private shareId: SharePokemonIdService) {
  }

  ngOnInit() {
    this.shareIdSubscription = this.shareId.observable.subscribe(p => this.onPokemonChange(p));
    console.log("this.share", this.shareId);
    console.log("this.subscription", this.shareIdSubscription);
  }

  onPokemonChange(p: Pokemon) {
    this.pokemon = p;
    console.log("in pokemon info", this.pokemon);
  }
}
