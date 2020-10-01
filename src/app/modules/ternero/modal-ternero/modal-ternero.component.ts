import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { from } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { GetRaza } from "../../../core/store/action.store";

import { RazaService } from '../../../core/services/raza.service';
import { Rumiante } from "../../../share/models/rumiante.model";
import { Raza } from 'src/app/share/models/raza.model';
@Component({
  selector: 'app-modal-ternero',
  templateUrl: './modal-ternero.component.html',
  styleUrls: ['./modal-ternero.component.scss'],
})
export class ModalTerneroComponent implements OnInit {
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
    private store: Store<any>,
    private razaService: RazaService
    ) {
      store.pipe(select('razas')).subscribe(data => (this.razas = data.razas))
     }

  ngOnInit() {
    this.ternero = {...this.data}
    this.store.dispatch( new GetRaza())
    console.log(this.razas);
    
  }

  dismiss(){
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  async onSubmit(){
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
