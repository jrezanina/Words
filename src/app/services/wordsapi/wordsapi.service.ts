import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class WordsApiService {

  constructor(
    private http: HttpClient
  ) {
  }

  getByWord$(word: string) {
    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', environment.apiToken)
      .set('X-RapidAPI-Host', 'wordsapiv1.p.rapidapi.com');
    return this.http.get(`${environment.baseUrl}/words/${word}/definitions`, { headers });
  }
}
