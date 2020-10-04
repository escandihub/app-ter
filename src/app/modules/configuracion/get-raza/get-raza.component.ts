import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ModalController } from '@ionic/angular';
import { RazaService } from "../../../core/services/raza.service";
import {  Raza} from "../../../share/models/raza.model";

import { NewItemComponent } from "../new-item/new-item.component";

@Component({
  selector: 'app-get-raza',
  templateUrl: './get-raza.component.html',
  styleUrls: ['./get-raza.component.scss'],
})
export class GetRazaComponent implements OnInit {

  // razas: Observable<Raza[]>;
  // razas: []
  razas: Raza[] = []
  constructor(
    private razaServicio: RazaService,
    public modalControl: ModalController
     ) { }

  ngOnInit() {
    this.razaServicio.isOk().subscribe(ready => {
      if(ready){
        // this.razaServicio.loadRaza().then(data => {
        //   this.razaServicio.getRazaAS().subscribe(data => {
        //     this.razas = data
        //   })
        // })
      }else{
        console.log('error en la coneccion del servicio ');
        
      }
    });
  }

  openModal(){
    console.log('gonna open the modal');
    this.presentModal()
    
  }
  async presentModal() {
    const modal = await this.modalControl.create({
      component: NewItemComponent,
    });
    return await modal.present();
  }


}