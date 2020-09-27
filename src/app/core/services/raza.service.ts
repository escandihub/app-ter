import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from "./database.service";
import { Raza } from "../../share/models/raza.model";

@Injectable({
  providedIn: 'root'
})
export class RazaService {

  Raza = new BehaviorSubject([]);
  constructor(private db: DatabaseService) { }

  getRaza(){
    let query = 'SELET * FROM raza';
    return this.db.database.executeSql(query, []).then(data => {
      let raza: Raza[] = [];
      
      if(data.rows.lenght > 0){

      data.rows.forEach((tipo, i) => {
        raza.push({
          id: tipo.item(i).id,
          nombre: tipo.item(i).nombre,
        });
      });
        // for (let i = 0; i < data.rows.length; i++) {
        //   raza.push({
        //     id: data.rows.item(i).id,
        //     nombre: data.rows.item(i).nombre,
        //   });
        // }
      }
      this.Raza.next(raza);
    });
  }
}
