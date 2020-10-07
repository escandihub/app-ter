import { Injectable } from '@angular/core';
import { DatabaseService } from './database.service';

@Injectable({
  providedIn: 'root'
})
export class TerneroService {

  constructor(
    private db: DatabaseService
  ) { }

  getTerneros(){
    return new Promise((resolve, reject) => {
      let query = 'SELECT rumiante.id, rumiante.nombre, raza.nombre AS raza FROM rumiante INNER JOIN raza on rumiante.raza_id = raza.id INNER JOIN grupo on rumiante.tipo_id = grupo.id  WHERE grupo.id = 3';
      this.db.database.executeSql(query, []).then( data => {
        let terneros = [];

        if(data.rows.length > 0){
          for (let i = 0; i < data.rows.length; i++) {
            terneros.push({
              id: data.rows.item(i).id,
              nombre: data.rows.item(i).nombre,
              raza: data.rows.item(i).raza
            });
          }
        }
        resolve(terneros)
      }), (error => (reject(error)))
    })
  }
}//endClass
