import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {WordsApiService} from "../services/wordsapi/wordsapi.service";
import {WordsService, Word} from "../services/words/words.service";
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  searchedWord: string = '';

  resultWord$!: Observable<any>;

  constructor(
    private wordsApiService: WordsApiService,
    private wordsService: WordsService,
    private toastController: ToastController
  ) {
  }

  add() {
    if (this.searchedWord) {
      this.wordsApiService.getByWord$(this.searchedWord).subscribe(
        (resultWord) => {
          const newWord: Word = { word: this.searchedWord, homepage: false };
          this.wordsService.addWord(newWord);
          this.showToast("Word successfully added!");
        },
        (error) => {
          this.showToast("Error: Word not found!");
        }
      );
    }
  }

  async showToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      position: "bottom",
    });
    toast.present();
  }
}
