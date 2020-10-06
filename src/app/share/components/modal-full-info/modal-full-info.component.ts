import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { from } from 'rxjs';

import { select, Store } from '@ngrx/store';
import { GetRaza } from "../../../core/store/action.store";

import { RazaService } from '../../../core/services/raza.service';
import { Bovino, Rumiante } from "../../models/rumiante.model";
import { Raza } from 'src/app/share/models/raza.model';
import { MachoService } from 'src/app/core/services/macho.service';
@Component({
  selector: 'app-modal-full',
  templateUrl: './modal-full-info.component.html',
  styleUrls: ['./modal-full-info.component.scss'],
})
export class ModalFullInfoComponent implements OnInit {
  @Input()
  get data(): Bovino { return this.rumiante }
  set data(data) {
    this.rumiante = data
  }

  ternero;
  razas;
  rumiante: Bovino;
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
    private razaService: RazaService
  ) { }

  ngOnInit() {
    this.razaService.loadRaza().then(razas => {
      this.razas = razas
      console.log(this.rumiante);

      this.razaSelected = this.data.razaID.toString();
      this.compareWith = this.compareWithFn;

    }).catch(err => console.log('eh?' + err))
    this.ternero = this.data;
    this.data.nacimiento != '' ? this.data.nacimiento = 'none' : ''
  }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
  async onSubmit() {
    console.log(this.data);
    this.toroService.updateToro(this.rumiante)

    //send a copy of the last state
    this.data = { ...this.rumiante }
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
}
