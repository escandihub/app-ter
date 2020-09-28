import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalTerneroComponent } from './modal-ternero/modal-ternero.component';

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
  terneros = [
    {
      id: 1,
      nombre: 'CHil',
      edad: 5,
      nacimiento: '11/09/2019',
      raza: 'Billmaster',
      grupo: 'ternero',
      img: 'someImage'
    },
    {
      id: 2,
      nombre: 'Colosio',
      edad: 5,
      nacimiento: '11/09/2019',
      raza: 'Billmaster',
      grupo: 'ternero',
      img: 'someImage'
    },
    {
      id: 3,
      nombre: 'Negro',
      edad: 5,
      nacimiento: '11/09/2019',
      raza: 'Billmaster',
      grupo: 'ternero',
      img: 'someImage'
    },
  ];

  constructor(public modalCtrl: ModalController) { }

  ngOnInit() {
  }
  // metodo que le llega de 'share/components'
  procesaPropagar(e){
    console.log('me ha llegado algo tio, es lo de abajo');
    this.showModal(e);
    
  }
  /**  metodo que controla el modal ubicado en ./modal-ternero
   *  @data objeto para mostrar en el modla
   *  @duda aun no sabemos si haremos una peticion para conocer mas 
   *  detaller del objeto
   * */
  async showModal(data){
    const modal = await this.modalCtrl.create({
      component: ModalTerneroComponent,
      componentProps: {data}
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
