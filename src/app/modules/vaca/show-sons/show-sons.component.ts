import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-sons',
  templateUrl: './show-sons.component.html',
  styleUrls: ['./show-sons.component.scss'],
})
export class ShowSonsComponent implements OnInit {
  /**
   * here el servico despachara una busqueda del id de la madre
   * para conocer todos sus hijos 
   */
  constructor() { }

  ngOnInit() {}

}
