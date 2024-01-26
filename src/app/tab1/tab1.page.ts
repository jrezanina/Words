import {Component} from '@angular/core';
import {WordsApiService} from "../services/wordsapi/wordsapi.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any = {};

  word$: Observable<any>;

  constructor(
    private wordsApiService: WordsApiService
  ) {
    this.word$ = this.wordsApiService.getByWord$("hello")
  }

  fetchData() {
    this.wordsApiService.getByWord$("hello").subscribe(data => {
      this.data = data;
    })
  }
}
