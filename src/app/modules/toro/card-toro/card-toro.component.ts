import { Component, OnInit } from '@angular/core';
import { FullToroComponent } from "../full-toro/full-toro.component";
import { ModalController } from "@ionic/angular";

@Component({
  selector: 'app-card-toro',
  templateUrl: './card-toro.component.html',
  styleUrls: ['./card-toro.component.scss'],
})
export class CardToroComponent implements OnInit {

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
  constructor(public modalCTRL: ModalController) { }

  ngOnInit() {}

  editToro(toro){
    console.log(toro);
    this.showModal(toro)
  }

  async showModal(toro){
    const modal = await this.modalCTRL.create({
      component: FullToroComponent,
      componentProps: {toro}
    });
    return await modal.present();
  }

}
