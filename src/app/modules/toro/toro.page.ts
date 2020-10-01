import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { NewRumianteComponent } from "../../share/components/new-rumiante/new-rumiante.component";

@Component({
  selector: 'app-toro',
  templateUrl: './toro.page.html',
  styleUrls: ['./toro.page.scss'],
})
export class ToroPage implements OnInit {

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }

  // Aqui va a despachar el servicio que sera enviado al card-info
  openNewToro(){
    this.presentModal()
  }
  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: NewRumianteComponent,
      componentProps: {
        whoIs: true
      }
    });
    return await modal.present();
  }
}
