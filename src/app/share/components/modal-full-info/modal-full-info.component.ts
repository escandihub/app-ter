import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { from } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { GetRaza } from "../../../core/store/action.store";

import { RazaService } from '../../../core/services/raza.service';
import { Bovino, Rumiante, showRumiante } from "../../models/rumiante.model";
import { Raza } from 'src/app/share/models/raza.model';
import { MachoService } from 'src/app/core/services/macho.service';
import { GlobalService } from 'src/app/core/services/global.service';
import { Console } from 'console';
import { error } from 'protractor';
@Component({
  selector: 'app-modal-full',
  templateUrl: './modal-full-info.component.html',
  styleUrls: ['./modal-full-info.component.scss'],
})
export class ModalFullInfoComponent implements OnInit {
  @Input() data: showRumiante;
  @Input() tipoRumiante: string;
  ternero;
  razas;
  rumiante ;
  isDisable: boolean;

  compareWith: any;
  razaSelected: string;

  @Output('ngModelChange') upNombre = new EventEmitter();
  @Output('ngModelChange') upEdad = new EventEmitter();
  @Output('ngModelChange') upNacimiento = new EventEmitter();
  @Output('ngModelChange') upRaza = new EventEmitter();
  @Output('ngModelChange') upVendido = new EventEmitter();
  @Output('ngModelChange') selectRaza = new EventEmitter();


  constructor(
    public modalCtrl: ModalController,
    private toroService: MachoService,
    private razaService: RazaService,
    private rumianteService: GlobalService
  ) { }

  ngOnInit() {
    this.rumianteService.getRumiante(this.data.id).then(rumiante => {
      this.rumiante = rumiante
    }).catch(error => console.log(error))

    this.razaService.loadRaza().then(razas => {
      this.razas = razas
      // fn that compare to select by default 
      this.compareWith = this.compareWithFn; 
    }).catch(err => console.log('eh?' + err))
    this.ternero = this.data;
    // this.data.nacimiento != '' ? this.data.nacimiento = 'none' : ''
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  async onSubmit() {
    console.log(this.rumiante);
    switch(this.tipoRumiante){
      case 'Toro':
        this.toroService.updateToro(this.rumiante)
        break
      case 'Madre':
        break
      case 'Ternero':
        break
      default: {
        console.log('que paso amgio');
      }
    };

    //send a copy of the last state
    //this.data = { ...this.rumiante }
    this.modalCtrl.dismiss({
      data: this.data,
    })
  }
  /** control de eventos cuando se edite  */
  alterNombre(event) {
    this.isDisable = true
  }
  changeEdad(event) {
    this.isDisable = true
  }
  changeNacimiento(event) {
    this.isDisable = true
  }

  compareWithFn = (o1, o2) => {
    return o1 === o2;
  };

  //output to select the raza selected
  razaSeleccionada(e){
    this.rumiante.razaID = e.target.value
  }
}
