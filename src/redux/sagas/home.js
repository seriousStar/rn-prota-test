import { put, call, takeEvery } from "redux-saga/effects";

import { home } from "../stores";
import { LocalStorage } from "../../services";

function* fetchNameListDataSaga() {
  try {
    const nameListData = yield call(LocalStorage.getNames);
    if (nameListData) {
      yield put(home.actions.fetchNameListDataSuccess(nameListData));
    } else {
      yield put(home.actions.fetchNameListDataFailure());
    }
  } catch (e) {
    console.info("e fetchNameListDataSaga", e);
    yield put(home.actions.fetchNameListDataFailure());
  }
}

function* addNameSaga({ payload }) {
  try {
    const updatedNameListData = yield call(LocalStorage.addName, payload);
    yield put(home.actions.addNameSuccess(updatedNameListData));
  } catch (e) {
    console.info("e addNameSaga", e);
    yield put(home.actions.addNameFailure());
  }
}

export default function* homeSaga() {
  yield takeEvery(home.actions.fetchNameListData, fetchNameListDataSaga);
  yield takeEvery(home.actions.addName, addNameSaga);
}
