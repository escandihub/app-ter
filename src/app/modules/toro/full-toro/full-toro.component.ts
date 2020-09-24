import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-full-toro',
  templateUrl: './full-toro.component.html',
  styleUrls: ['./full-toro.component.scss'],
})
export class FullToroComponent implements OnInit {
  @Input() toro: object;
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
