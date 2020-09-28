import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-ternero',
  templateUrl: './modal-ternero.component.html',
  styleUrls: ['./modal-ternero.component.scss'],
})
export class ModalTerneroComponent implements OnInit {
   @Input()  data: object;

  ternero = {};


  constructor(
    public modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.ternero = {...this.data}
  }

  dismiss(){
    this.data = {...this.ternero}
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  onSubmit(){
    
  }
}
