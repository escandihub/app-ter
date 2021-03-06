import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Rumiante } from "../../models/rumiante.model";

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {
@Input() datas;
  // @Input() get datas(): Rumiante { return this.items; }
  // set datas(datas: Rumiante) {
  //   this.items = datas;
  // };
  @Input() tipo;
  protected items: Rumiante;

  @Output() propagar = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {console.log(this.tipo);
  }
  informacionCompleta(data){
    this.propagar.emit(data);
    
  }

}
