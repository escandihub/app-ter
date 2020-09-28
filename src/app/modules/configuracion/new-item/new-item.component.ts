import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { RazaService } from "../../../core/services/raza.service";

@Component({
  selector: 'app-new-item',
  templateUrl: './new-item.component.html',
  styleUrls: ['./new-item.component.scss'],
})
export class NewItemComponent implements OnInit {

  nombre: string = 'verde ';
  name: string = 'LOL';
  constructor(
    private  db: RazaService,
    private modalCtrl: ModalController) { }

  ngOnInit() {}
  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  saveNewRaza(){
    // this.db.NewRaza(this.nombre);
    console.log('nombre');
    console.log( this.nombre);
    
  }

}
