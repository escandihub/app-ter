import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-ternero',
  templateUrl: './modal-ternero.component.html',
  styleUrls: ['./modal-ternero.component.scss'],
})
export class ModalTerneroComponent implements OnInit {
  @Input() data: object;

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {}

  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}
