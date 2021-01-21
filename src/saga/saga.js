import Axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { BASE_URL, ABOUT_TWEET_API } from "../utils/index";

function* getTweets({ subject }) {
  const { data } = yield call(() =>
    Axios.post(`${BASE_URL}${ABOUT_TWEET_API}`, { subject })
  );
  yield put({
    type: "ADD_TWEETS",
    tweets: data.statuses,
  });
}

function* getInitialTweets({ subject }) {
  yield put({ type: "SET_LOADER", loadState: true });
  yield put({ type: "SET_RELOAD_STATE", loadState: false });
  const { data } = yield call(() =>
    Axios.post(`${BASE_URL}${ABOUT_TWEET_API}`, { subject })
  );
  yield put({
    type: "ADD_TWEETS",
    tweets: data.statuses,
  });
  yield put({ type: "SET_LOADER", loadState: false });
  yield put({ type: "SET_RELOAD_STATE", loadState: true });
}

export function* watchTweets() {
  yield takeEvery("FETCH_TWEETS", getTweets);
  yield takeEvery("FETCH_INITIAL_TWEETS", getInitialTweets);
}
