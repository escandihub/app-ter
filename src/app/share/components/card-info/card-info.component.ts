import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent implements OnInit {

  @Input() get datas(): any { return this.items; }
  set datas(datas: any) {
    this.items = datas;
  }
  protected items = [];

  @Output() propagar = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}
  fullInfo(data){
    this.propagar.emit(data);
    
  }

}
