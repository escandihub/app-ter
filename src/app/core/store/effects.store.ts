import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store'
import { EMPTY, from, Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import * as razaActions from '../store/action.store'
import { RazaService } from '../services/raza.service';

@Injectable()
export class RazaEffects {
  constructor(
    private actions$: Actions,
    private razaService: RazaService
  ) { }

  @Effect()
  // LoadRazas$: Observable<Action> = this.actions$.pipe(
  //   ofType(razaActions.RazaActionTypes.LoadRaza),
  //   mergeMap(
  //     action => this.razaService.fakeGetData().pipe(
  //       map(razas => (new razaActions.CargaSucces({ data: razas }))),
  //       catchError(err => EMPTY)
  //     )
  //   )
  // )
  LoadRazas$= this.actions$.pipe(
    ofType(razaActions.RazaActionTypes.LoadRaza),
    mergeMap(
      action => this.razaService.loadRaza().then(razas => {
        new razaActions.CargaSucces({data: razas})
      }).catch(errr => EMPTY)
    )
  )
}
