import { call, put, takeEvery } from 'redux-saga/effects';
import { REQUEST_API_DATA, receiveApiData } from '../actions';
import { fetchData } from '../api';

// воркер Saga: будет запускаться на действия типа `USER_FETCH_REQUESTED`
function * getApidata(action : any){
  try{
    const data = yield call(fetchData);
    yield put(receiveApiData(data));
  } catch(e){
    console.log(e)
  }
}

function * mySaga(){
  yield takeEvery(REQUEST_API_DATA, getApidata);
}

export default mySaga;
