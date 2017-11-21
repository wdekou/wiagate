import { REQUEST_WISP_CREATION, SUCCESS_WISP_CREATION, FAILURE_WISP_CREATION, ADD_WISP, SET_WISPS,
  SET_CURRENT_WISP,
} from './actions';

const initialState = {
  isFetching: false,
  wisps: [],
  wisp: {},
  currentWispId: null,
}

export const wisps = (state = initialState, action) => {
  switch(action.type) {
    case REQUEST_WISP_CREATION: 
      return {
        ...state,
        isFetching: true
      }
    case SUCCESS_WISP_CREATION: 
      return {
        ...state,
        isFetching: false
      }
    case ADD_WISP:
      return {
        isFetching: false,
        wisps: state.wisps.concat(action.wisp),
        currentWispId: action.wisp.id
      }
    case SET_CURRENT_WISP: 
      console.log(action)
      return {
        ...state,
        currentWispId: action.wisp.id,
        wisp: action.wisp
      }
    case SET_WISPS: {
      return {
        ...state,
        wisps: action.wisps,
      }
    }
    default:
      return state;
  }
}
