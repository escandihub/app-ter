import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { NewRumianteComponent } from "../../share/components/new-rumiante/new-rumiante.component";
import { ModalFullInfoComponent } from '../../share/components/modal-full-info/modal-full-info.component';

@Component({
  selector: 'app-toro',
  templateUrl: './toro.page.html',
  styleUrls: ['./toro.page.scss'],
})
export class ToroPage implements OnInit {

  toros = [
    {
      id: 1,
      nombre: 'robert',
      edad: 5,
      raza: 'Billmaster',
      img: 'someImage'
    },
    {
      id: 2,
      nombre: 'robert',
      edad: 5,
      raza: 'Billmaster',
      img: 'someImage'
    },
    {
      id: 3,
      nombre: 'robert',
      edad: 5,
      raza: 'Billmaster',
      img: 'someImage'
    },
  ];

  procesaPropagar(e) {
    console.log('procesaPropagar');
    this.detailModal(e)
  }
  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  // Aqui va a despachar el servicio que sera enviado al card-info
  openNewToro() {
    this.presentModal()
  }
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: NewRumianteComponent,
      componentProps: {
        whoIs: true
      }
    })
    return await modal.present();
  };

  async detailModal(data){
    const modal = await this.modalCtrl.create({
      component: ModalFullInfoComponent,
      componentProps: {data}
    });
    return await modal.present();
  }
}
