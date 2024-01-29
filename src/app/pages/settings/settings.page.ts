import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {FormBuilder, FormGroup, FormControl} from "@angular/forms";
import {Word, WordsService} from "../../services/words/words.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  words: Word[];

  form: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private wordsService: WordsService,
    private fb: FormBuilder
  ) {

    this.words = this.wordsService.words

    this.form = this.fb.group({
    })

    this.words.forEach((word, i) => {
      this.form.addControl("ch" + (i + 1), new FormControl(word.homepage));
    })

    this.form.valueChanges.subscribe(data => {
      this.words.forEach((word, i) => {
        this.wordsService.setHome(i, data["ch" + (i + 1)]);
      })
    })
  }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

}
