import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-modal-ternero',
  templateUrl: './modal-ternero.component.html',
  styleUrls: ['./modal-ternero.component.scss'],
})
export class ModalTerneroComponent implements OnInit {
   @Input() 
   get data(): object { return this.item }
   set data(data){
     this.item = data
   }

  ternero = {};
  item = {}

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
    this.ternero = {...this.data}
  }

  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  async onSubmit(){
    console.log('on sumit');
    this.data = {...this.ternero}
    this.modalCtrl.dismiss({
      data: this.data,
    })
  }
}
