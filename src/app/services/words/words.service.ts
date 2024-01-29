import {Injectable} from '@angular/core';
import {Preferences} from "@capacitor/preferences";
import {ReplaySubject} from "rxjs";

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

  private get words() {
    return this.privateWords;
  }

  private privateWordsSubject = new ReplaySubject<Word[]>(1)

  get words$() {
    return this.privateWordsSubject.asObservable();
  }

  constructor() {
    Preferences.get({key: 'words'}).then(data => {
      if (data.value) {
        const words = JSON.parse(data.value)
        this.privateWordsSubject.next(words as Word[])
      } else {
        this.privateWordsSubject.next(this.words)
      }
    });
  }

  async setHome(index: number, active: boolean) {
    this.privateWords[index].homepage = active;
    this.privateWordsSubject.next(this.privateWords);
    await Preferences.set({
      key: 'words',
      value: JSON.stringify(this.privateWords),
    });
  }
}
