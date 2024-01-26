import {Component} from '@angular/core';
import {WordsApiService} from "../services/wordsapi/wordsapi.service";
import {Observable} from "rxjs";
import {ModalController} from "@ionic/angular";
import {SettingsPage} from "../pages/settings/settings.page";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  data: any = {};

  word$: Observable<any>;

  constructor(
    private wordsApiService: WordsApiService,
    private modalCtrl: ModalController
  ) {
    this.word$ = this.wordsApiService.getByWord$("car")
  }

  fetchData() {
    this.wordsApiService.getByWord$("car").subscribe(data => {
      this.data = data;
    })
  }
  async openSettings() {

    const modal = await this.modalCtrl.create({
      component: SettingsPage,
    });

    await modal.present();
  }
}
