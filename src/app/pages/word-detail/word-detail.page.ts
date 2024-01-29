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

  ngOnInit() {
  }

}
