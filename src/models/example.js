import { fetch } from '../services/example';

export default {

  namespace: 'example',

  state: {},

  effects: {
    *fetch({ payload }, { call, put }) {
      const res = yield call(fetch, payload);

      yield put({
        type: 'save',
        payload: {
          ...payload,
          ...res
        }
      });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
