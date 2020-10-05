import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { from } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { GetRaza } from "../../../core/store/action.store";

import { RazaService } from '../../../core/services/raza.service';
import { Rumiante } from "../../models/rumiante.model";
import { Raza } from 'src/app/share/models/raza.model';
import { MachoService } from 'src/app/core/services/macho.service';
@Component({
  selector: 'app-modal-full',
  templateUrl: './modal-full-info.component.html',
  styleUrls: ['./modal-full-info.component.scss'],
})
export class ModalFullInfoComponent implements OnInit {
   @Input() 
   get data(): Rumiante { return this.item }
   set data(data){
     this.item = data
   }

  ternero = {};
  razas = [];
  item: Rumiante;
  isDisable: boolean;

  @Output('ngModelChange') upNombre = new EventEmitter();
  @Output('ngModelChange') upEdad = new EventEmitter();
  @Output('ngModelChange') upNacimiento = new EventEmitter();
  @Output('ngModelChange') upRaza = new EventEmitter();
  @Output('ngModelChange') upVendido = new EventEmitter();
   

  constructor(
    public modalCtrl: ModalController,
    private toroService: MachoService,
    private razaService: RazaService
    ) {
     }

  ngOnInit() {
    this.razaService.loadRaza().then(razas => {
      console.log(razas);
    }).catch(err => console.log('eh?' + err))
    this.ternero = {...this.data}
    console.log(this.razas);
    
  }

  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  async onSubmit(){
    console.log(this.data);
    // this.toroService.updateToro(this.data)
    console.log('on sumit');
    this.data = {...this.item}
    this.modalCtrl.dismiss({
      data: this.data,
    })
  }
/** control de eventos cuando se edite  */
  alterNombre(event){
    this.isDisable  = true
  }
  changeEdad(event){
    this.isDisable  = true
  }
  changeNacimiento(event){
    this.isDisable  = true
  }
}
