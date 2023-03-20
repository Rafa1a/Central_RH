import { createStore, Store } from 'redux'

import {State, Action} from './interfaces'

const estadoinicial: State = {
 
  darkMode : false
}

function reducer(state: State = estadoinicial, action: Action) {
  switch (action.type) {
    // Defina as ações aqui
    case 'DARK_MODE': 
    
    return {
      ...state,
      darkMode : !state.darkMode
    }

    default:
      return state
  }
}

const store: Store<State, Action> = createStore(reducer)

export default store
