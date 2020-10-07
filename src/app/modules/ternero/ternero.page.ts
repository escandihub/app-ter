import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TerneroService } from 'src/app/core/services/ternero.service';
import { ModalFullInfoComponent } from '../../share/components/modal-full-info/modal-full-info.component';

@Component({
  selector: 'app-ternero',
  templateUrl: './ternero.page.html',
  styleUrls: ['./ternero.page.scss'],
})
export class TerneroPage implements OnInit {
  entrada = ''

  /**
   * hard code of SQLite DATA
   */
  terneros;

  constructor(
    private terneroService: TerneroService,
    public modalCtrl: ModalController) { }

  ngOnInit() {
    this.terneroService.getTerneros().then(terneros => {
      this.terneros = terneros
    })
  }
  // metodo que le llega de 'share/components'
  procesaPropagar(e){
    console.log('MODAL IS OPEN');
    this.showModal(e);
    
  }
  /**  metodo que controla el modal ubicado en ./modal-ternero
   *  @data objeto para mostrar en el modla
   *  @duda aun no sabemos si haremos una peticion para conocer mas 
   *  detaller del objeto
   * */
  async showModal(data){
    const modal = await this.modalCtrl.create({
      component: ModalFullInfoComponent,
      componentProps: {
        data,
        tipoRumiante: 'Ternero'
      }
    });
    //return 
    await modal.present();

    /**
     * Meto que se ejecuta cuando en el onDismiss es emitido
     */
    let modalResponse = await modal.onDidDismiss().then(data => {
      let modalData = data.data.data
      if(modalData != undefined){
        this.terneros.filter(el => el.id == modalData.id).map(el => {
          el.nombre = modalData.nombre
          console.log(el);
        });
      }
      
      })
    
  }
}
