import { NgModule, NgZone } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { PokemonFilterPipe } from './search-input/pokemon-filter.pipe';
import { PokeApiService } from './poke-api.service';
import { PokemonInfoComponent } from './pokemon-info/pokemon-info.component';
import { SharePokemonIdService } from './share-pokemon-id.service';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    PokemonFilterPipe,
    PokemonInfoComponent,
    CapitalizePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PokeApiService, SharePokemonIdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
