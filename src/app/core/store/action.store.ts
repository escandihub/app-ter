import { createAction, props, Action } from '@ngrx/store';
import { Raza } from "../../share/models/raza.model";

export enum RazaActionTypes {
  AddRaza = '[Raza] add new Raza',
  LoadRaza = '[Raza] Get razas from SQLite',
  LoadSuccess = '[Raza] Load success'
}

export class AddRaza implements Action {
  readonly type = RazaActionTypes.AddRaza;
  constructor(public payload: { data: Raza }) { }
}

export class CargaSucces implements Action {
  readonly type = RazaActionTypes.LoadSuccess
  constructor(public payload: { data }) { }
}

export class GetRaza implements Action {
  readonly type = RazaActionTypes.LoadRaza;
}

export type RazaActions = GetRaza | CargaSucces | AddRaza
