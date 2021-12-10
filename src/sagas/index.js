import {all} from 'redux-saga/effects'
import {UsersSagas} from "./users";

export const rootSaga = function* () {
    yield all([
        ...UsersSagas
    ])
};
