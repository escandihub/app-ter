import { Raza } from 'src/app/share/models/raza.model';
import { RazaActions, RazaActionTypes } from './action.store';

export interface State {
  razas: Raza[]
};
export const initalState: State = {
  razas: null
};

export function RazaReduce(state = initalState, action: RazaActions) {
  switch (action.type) {
    case RazaActionTypes.LoadSuccess:
      return {
        ...state,
        razas: [action.payload]
      };

    case RazaActionTypes.AddRaza:
      return {
        ...state,
        razas: [...state.razas, action.payload]
      };
    default:
      console.log('does\'s found');
      return state
  }
}