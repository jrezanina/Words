import {Component} from '@angular/core';
import {WordsApiService} from "../services/wordsapi/wordsapi.service";
import {firstValueFrom, Observable} from "rxjs";
import {ModalController} from "@ionic/angular";
import {SettingsPage} from "../pages/settings/settings.page";
import {WordsService} from "../services/words/words.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  words$: Observable<any>[] = [];

  constructor(
    private wordsApiService: WordsApiService,
    private modalCtrl: ModalController,
    private wordsService: WordsService
  ) {
    this.initWords();
  }

  private async initWords() {
    this.words$ = [];
    const wordList = await firstValueFrom(this.wordsService.words$)
    wordList.forEach(word => {
      if (word.homepage) {
        this.words$.push(
          this.wordsApiService.getByWord$(word.word)
        )
      }
    })
  }

  async openSettings() {
    const modal = await this.modalCtrl.create({
      component: SettingsPage,
    });

    await modal.present();

    modal.onWillDismiss().then(_ => {
      this.initWords();
    });

  }

  setDetailData(word: any) {
    this.wordsApiService.detail = word;
  }
}
