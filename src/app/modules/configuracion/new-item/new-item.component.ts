import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
})
export class NewItemComponent implements OnInit {

  raza = ""
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}
  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  saveNewRaza(){
    console.log('en el modal a salvar ' + this.raza);
    
  }

}
