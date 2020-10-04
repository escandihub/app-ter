import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from "./database.service";
import { Tipo } from "../../share/models/tipo.model";
import { resolve } from 'dns';
import { rejects } from 'assert';

/**
 * Este servicio se encarga de optener los 
 * 3 grupos de animaes
 * la madre
 * el ternero
 * el macho 
 * no se debe actualizar ni eliminar
 */

@Injectable({
  providedIn: 'root'
})
export class TipoService {

  Tipos = new BehaviorSubject([]);
  constructor(private db: DatabaseService) { }

  getTipos() {
    let query = "SELECT * FROM tipos";
    return new Promise((resolve, reject) => {
      this.db.database.executeSql(query, []).then(data => {
        let tipos: Tipo[] = []
        if (data.rows.lenght > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            tipos.push({
              id: data.rows.item(i).id,
              nombre: data.rows.item(i).nombe
            });
          }
        }
        resolve(tipos)
      }), (error => reject(error))
    })
  }
}
