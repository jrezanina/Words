import {Component, OnInit} from '@angular/core';
import {ModalController} from "@ionic/angular";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  words: any[] = [
    {
      word: "car",
      homepage: false
    },
    {
      word: "word",
      homepage: false
    },
  ]

  form: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private fb: FormBuilder
  ) {

    this.form = this.fb.group({
      ch1: [this.words[0].homepage, []],
      ch2: [this.words[1].homepage, []],
    })

    this.form.valueChanges.subscribe(data => {
      console.log(data);
    })
  }

  ngOnInit() {
  }

  async dismiss() {
    await this.modalCtrl.dismiss();
  }

}
