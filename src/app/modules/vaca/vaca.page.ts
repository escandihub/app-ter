import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vaca',
  templateUrl: './vaca.page.html',
  styleUrls: ['./vaca.page.scss'],
})
export class VacaPage implements OnInit {

  /** this array gonna be of effect of NgRx
   *  for while i building the views
   */

  vacas = [
    {
      id: 1,
      nombre: 'Maria',
      sexo: 1,
      edad: 15,
      raza: 2,
      grupo: 1,
      img: 'not found'
    },
    {
      id: 1,
      nombre: 'Luci',
      sexo: 1,
      edad: 15,
      raza: 2,
      grupo: 1,
      img: 'not found'
    },
  ];

  singleVaca(e){
    //here gonna open the modal 
    console.log(e);
    
  }
  constructor() { }

  ngOnInit() {
  }

}
