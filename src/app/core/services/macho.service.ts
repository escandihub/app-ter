import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from "./database.service";
import { Rumiante  } from "../../share/models/rumiante.model";

@Injectable({
  providedIn: 'root'
})
export class MachoService {

  toros = new BehaviorSubject([]);
  constructor(
    private db: DatabaseService
  ) { }

  public getAllMachos(){
    let query = 'SELECT rumiante.id, rumiante.nombre, rumiante.sexo, raza.nombre AS raza, grupo.nombre AS tipo From rumiante INNER JOIN raza on rumiante.raza_id = raza.id INNER JOIN grupo on rumiante.tipo_id = grupo.id WHERE grupo.id = 1';

    return this.db.database.executeSql(query, []).then(data => {
      let toros: Rumiante[] = [];

      if(data.rows.length > 0){
        for (let i = 0; i < data.rows.length; i++) {
          toros.push({
            id: data.rows.item(i).id,
            nombre: data.rows.item(i).nombre,
            sexo: data.rows.item(i).sexo,
            raza: data.rows.item(i).raz,
            nacimiento:data.rows.item(i).nacimiento,
            grupo: data.rows.item(i).tipo
          });
        }
      }
      this.toros.next(toros);
    })
  }

  public createNewMacho(toro: Array<any>){
    let query = 'INSERT INTO rumiante(nombre, sexo, nacimiento, raza_id, tipo_id) VALUES(?, ?, ?, ?, ?)'
    return this.db.database.executeSql(query, toro).then(data => {
      this.getAllMachos();
    })
  }
}
