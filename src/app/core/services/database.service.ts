import { Platform } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class DatabaseService{
  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  public database: SQLiteObject;

  constructor(
    private platform: Platform, 
    private sqlite: SQLite, 
    private httpClient: HttpClient,
    private sqlPorter: SQLitePorter
  ){
    this.platform.ready().then(() => {
      console.log('esta funcion corre plataform');
      
      this.sqlite.create({
        name:'database_name.sql',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        //corremos script method
        console.log('alimentando');
        //this.clear().then(res => console.log('se ha limpiado'))
        //this.seeder();  
      });
    });
  }
//check if the connection is establecid
  isReady(){
    return this.isDbReady.asObservable();
  }

/**
 * Method thad feed the database @databse : SQLiteObject
 */ 
  public seeder(){
    this.httpClient.get('assets/seed.sql', {responseType: 'text'})
    .subscribe(data => {
      this.sqlPorter.importSqlToDb(this.database, data)
      .then(_ => {
        // call a variable to add data inside of databse
        this.isDbReady.next(true);
        console.log('todo a salido bien ');
        
      }).catch(error => {
        console.log('un erron en la carga de los datos ');
        
        console.error(error)
      })
    })
  }

   /**
    * @public
    * @method clear
    * @description          Removes all tables/data from the application database
    * @return {Promise}
    */
   clear() : Promise<any>
   {
      return new Promise((resolve, reject) =>
      {
         this.sqlPorter
         .wipeDb('database_name.sql')
         .then((data) =>
         {
            resolve(data);
         }) 
         .catch((error) =>
         {
            reject(error);
         }); 
      });
   }
}