import {Injectable} from '@angular/core';

export interface Word {
  word: string;
  homepage: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private privateWords: Word[] = [
    {
      word: "car",
      homepage: true,
    },
    {
      word: "hello",
      homepage: true,
    },
    {
      word: "word",
      homepage: false,
    },
    {
      word: "hospital",
      homepage: false,
    },
    {
      word: "variable",
      homepage: true,
    }
  ];

  get words() {
    return this.privateWords;
  }

  constructor() {
  }

  setHome(index: number, active: boolean) {
    this.privateWords[index].homepage = active;
  }
}
