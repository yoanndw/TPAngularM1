import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { PokemonFilterPipe } from './search-input/pokemon-filter.pipe';
import { PokeApiService } from './poke-api.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    PokemonFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PokeApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
