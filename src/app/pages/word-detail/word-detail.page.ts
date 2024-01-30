import { Component, OnInit } from '@angular/core';
import {WordsApiService} from "../../services/wordsapi/wordsapi.service";

@Component({
  selector: 'app-word-detail',
  templateUrl: './word-detail.page.html',
  styleUrls: ['./word-detail.page.scss'],
})

export class WordDetailPage implements OnInit {

  word: any;

  constructor(
    private wordsApiService: WordsApiService
  ) {
    this.word = this.wordsApiService.detail!;
  }

  getWordFrequency(freq : number): { word: string, color: string } {
    let result: { word: string, color: string };

    switch (true) {
      case freq <= 2.5:
        result = { word: "Rare", color: "danger" };
        break;
      case freq <= 4.0:
        result = { word: "Low", color: "warning" };
        break;
      case freq <= 5.5:
        result = { word: "Medium", color: "primary" };
        break;
      case freq <= 7:
        result = { word: "High", color: "success" };
        break;
      default:
        result = { word: "Unavailable", color: "dark" };
        break;
    }

    return result;
  }

  ngOnInit() {
  }

}
