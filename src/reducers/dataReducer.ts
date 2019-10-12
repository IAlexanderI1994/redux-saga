import { RECEIVE_API_DATA } from '../actions';
const initialState = {
  data: {}
};

export default (state = initialState, {type, data}: { type: string, data: any }) => {

  switch(type){
    case RECEIVE_API_DATA:
      return {...state, data } ;
    default:
      return state;

  }

}
