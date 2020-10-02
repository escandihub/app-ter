import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Rumiante } from "../../models/rumiante.model";

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {

  @Input() get datas(): Rumiante { return this.items; }
  set datas(datas: Rumiante) {
    this.items = datas;
  }
  protected items: Rumiante;

  @Output() propagar = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}
  informacionCompleta(data){
    this.propagar.emit(data);
    
  }

}
