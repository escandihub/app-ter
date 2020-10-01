import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import { DatePicker } from '@ionic-native/date-picker/ngx';
@Component({
  selector: 'app-new-rumiante',
  templateUrl: './new-rumiante.component.html',
  styleUrls: ['./new-rumiante.component.scss'],
})
export class NewRumianteComponent implements OnInit {
/**
 * this input wait for know how call this modal 
 * 1 - adulto - true
 * 2 - ternero - false
 */
@Input() whoIs: boolean;
razas = [
  {
    id: 1,
    nombre: 'ASD'
  },
  {
    id: 2,
    nombre: 'ASDD'
  },
];

sexos = [
  {
    id: 1,
    nombre: 'Macho',
  },
  {
    id: 2,
    nombre: 'Hembra',
  },
];
rumiante = new FormGroup({
  nombre: new FormControl('', Validators.required),
  sexo: new FormControl('', Validators.required),
  edad: new FormControl(''),
  nacimiento: new FormControl('', ),
  raza: new FormControl('', Validators.required), //gonna be an id
  // grupo: new FormControl('', Validators.required), //gona be an id 
})
  constructor(public modalCtrl: ModalController, private datePicker: DatePicker) { }

  ngOnInit() {}

  onSubmit(){
    console.log(this.rumiante.value);
    
  }
  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

  showDataPicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => {
        this.rumiante.patchValue({
          nacimiento:  date.getDate()+"/"+date.toLocaleString('default', { month: 'long' })+"/"+date.getFullYear()
        })
        console.log('Got date: ', date)},
      err => console.log('Error occurred while getting date: ', err)
    );
  }
}
