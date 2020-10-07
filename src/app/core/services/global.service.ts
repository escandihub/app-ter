import { Injectable } from '@angular/core';
import { error } from 'protractor';
import { Rumiante } from 'src/app/share/models/rumiante.model';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(
    private db: DatabaseService
  ) { }

  getRumiante(id) {
    let query = 'SELECT rumiante.id, rumiante.nombre, rumiante.sexo, rumiante.edad, rumiante.nacimiento, rumiante.raza_id AS razaID From rumiante WHERE rumiante.id = ?';
    return new Promise((resolve, reject) => {
      this.db.database.executeSql(query, [id]).then(data => {
        let rumiante: Rumiante ;
        if (data.rows.length) {
          for (let i = 0; i < data.rows.length; i++) {
            rumiante = {
              id: data.rows.item(i).id,
              nombre: data.rows.item(i).nombre,
              sexo: data.rows.item(i).sexo,
              edad: data.rows.item(i).edad,
              nacimiento: data.rows.item(i).nacimiento,
              razaID: data.rows.item(i).razaID
            };
          }
        }
        resolve(rumiante)
      }), (error => reject(error))
    })
  }
}
