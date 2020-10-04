import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { DatabaseService } from "./database.service";
import { Raza } from "../../share/models/raza.model";
import { HttpClient } from '@angular/common/http';
import { error } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';

/**
 * este servicio raza del rumiante
 * get() ?> obtener todas las razas
 * insert() ?> inertar una nueva raza
 */

@Injectable({
  providedIn: 'root'
})
export class RazaService {

  raza = new BehaviorSubject([]);
  // constructor(private http: HttpClient) { 
  constructor(private db: DatabaseService) {
  }
  isOk() {
    return this.db.isReady()
  }

  getRazaAS() {
    return this.raza.asObservable();
  }
  loadRaza() {
    return new Promise((resolve, reject) => {
      let query = 'SELECT * FROM raza';
      this.db.database.executeSql(query, []).then(data => {
        let raza: Raza[] = [];

        if (data.rows.length > 0) {

          for (let i = 0; i < data.rows.length; i++) {
            console.log(data.rows.item(i).nombre);
            raza.push({
              id: data.rows.item(i).id,
              nombre: data.rows.item(i).nombre,
            });
          }
        } else {
          console.log('sin datos :v');
        }
        resolve(raza)
        // this.raza.next(raza);
      }, (error) => {
        reject(error)
      });
    })
  }

  NewRaza(nombreRaza) {
    return new Promise((resolve, reject) => {
      let query = 'INSERT INTO raza(nombre) VALUES(?)';
      this.db.database.executeSql(query, nombreRaza).then(data => {
        resolve(data)
      }), (error) => (reject(error))
    })
  }

  updateRaza(newNombre, id) {
    return new Promise((resolve, reject) => {
      let query = 'UPDATE raza(nombre) VALUES(?) WHERE raza.id = ?';
      this.db.database.executeSql(query, [newNombre, id]).then(resp => {
        resolve(resp)
      }).catch(error => reject(error))
    })
  }
}
