import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { NewRumianteComponent } from "../../share/components/new-rumiante/new-rumiante.component";
import { ModalFullInfoComponent } from '../../share/components/modal-full-info/modal-full-info.component';
import { MachoService } from 'src/app/core/services/macho.service';


@Component({
  selector: 'app-toro',
  templateUrl: './toro.page.html',
  styleUrls: ['./toro.page.scss'],
})
export class ToroPage implements OnInit {

  toros;
  tipoRumiante = "Toro";
  procesaPropagar(e) {
    console.log('procesaPropagar');
    this.detailModal(e)
  }
  constructor(
    private toroService: MachoService,
    public modalCtrl: ModalController) { }

  ngOnInit() {
    this.toroService.getAllMachos().then(toros => {
      this.toros = toros      
    })
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
      componentProps: {
        data, 
        tipoRumiante: this.tipoRumiante}
    });
    return await modal.present();
  }
}
