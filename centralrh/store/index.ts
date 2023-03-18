import { createStore, Store } from 'redux'

interface State {
  // Defina o seu estado inicial aqui
}

interface Action {
  type: string;
  // Defina as ações aqui
}

const estadoinicial: State = {
  // Defina o seu estado inicial aqui
}

function reducer(state: State = estadoinicial, action: Action) {
  switch (action.type) {
    // Defina as ações aqui
    default:
      return state
  }
}

const store: Store<State, Action> = createStore(reducer)

export default store
