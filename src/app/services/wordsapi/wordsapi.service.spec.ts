import { TestBed } from '@angular/core/testing';

import { WordsApiService } from './wordsapi.service';

describe('WordsApiService', () => {
  let service: WordsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
