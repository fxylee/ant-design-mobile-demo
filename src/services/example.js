import request from '../utils/request';

export async function fetch(payload) {
  return request('/api/fetch', {
    ...payload
  })
}
