import { TestBed } from '@angular/core/testing';

import { SharePokemonIdService } from './share-pokemon-id.service';

describe('SharePokemonIdService', () => {
  let service: SharePokemonIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharePokemonIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
