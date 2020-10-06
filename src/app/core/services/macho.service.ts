import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from "./database.service";
import { Rumiante, Bovino } from "../../share/models/rumiante.model";
import { resolve } from 'dns';
import { rejects } from 'assert';
import { error, promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class MachoService {

  toros = new BehaviorSubject([]);
  constructor(
    private db: DatabaseService
  ) { }

  public getAllMachos() {
    return new Promise((resolve, reject) => {
      let query = 'SELECT rumiante.id, rumiante.nombre, rumiante.sexo, rumiante.edad,  raza.nombre AS raza, raza.id AS razaID, grupo.nombre AS tipo From rumiante INNER JOIN raza on rumiante.raza_id = raza.id INNER JOIN grupo on rumiante.tipo_id = grupo.id WHERE grupo.id = 1 ORDER BY rumiante.nombre';
      this.db.database.executeSql(query, []).then(data => {
        // let toros: Rumiante[] = [];
        let toros = [];
        console.log('datos en rumiantes');
        console.log(data.rows.length);
        if (data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            toros.push({
              id: data.rows.item(i).id,
              nombre: data.rows.item(i).nombre,
              sexo: data.rows.item(i).sexo,
              raza: data.rows.item(i).raza,
              edad: data.rows.item(i).edad,
              razaID: data.rows.item(i).razaID,
              nacimiento: data.rows.item(i).nacimiento,
              grupo: data.rows.item(i).tipo
            });
          }
        }
        resolve(toros)
        // this.toros.next(toros);
      }), (error => reject(error))
    });

  }

  public newToro(toro) {
    console.log(toro);
    
    new Promise((resolve, reject) => {
      let query = 'INSERT INTO rumiante(nombre, sexo, nacimiento, raza_id, tipo_id) VALUES(?, ?, ?, ?, ?)'
      return this.db.database.executeSql(query, [toro.nombre, toro.sexo, toro.nacimiento, toro.raza, toro.grupo]).then(data => {
        resolve(data)
      }), (error => reject(error))
    })
  }

  updateToro(toro: Bovino) {
    console.log('updating');
    console.log(toro);
    new Promise((resolve, reject) => {
      let query = `UPDATE rumiante SET nombre = ?, nacimiento = ?, edad = ?, raza_id = ? WHERE rumiante.id = ${toro.id}`;
      this.db.database.executeSql(query, [toro.nombre, toro.nacimiento, toro.edad, toro.razaID]).then(reponse => {
        resolve(reponse)
      }), (error => reject(error))
    })
  };

  deleteToro(id: number) {
    new Promise((resolve, reject) => {
      let query = 'DELETE FROM rumiante WHERE rumiante.id = ?';
      this.db.database.executeSql(query, [id]).then(response => {
        resolve(resolve)
      }), (error => reject(error))
    })
  };
}
