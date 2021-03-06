import { request } from '../../utilsAPI.jsx';

export function getStorage(signal) {
  return request({
    url: process.env.API_URL + '/api/v1/lemz_storage/',
    method: 'GET',
    signal: signal,
  });
}

export function getStorageById(id) {
  return request({
    url: process.env.API_URL + '/api/v1/lemz_storage/' + id,
    method: 'GET',
  });
}

export function deleteStorage(id) {
  return request({
    url: process.env.API_URL + '/api/v1/lemz_storage/' + id,
    method: 'DELETE',
  });
}

export function addStorage(newStorage) {
  return request({
    url: process.env.API_URL + '/api/v1/lemz_storage/',
    method: 'POST',
    body: JSON.stringify(newStorage),
  });
}

export function editStorage(newStorage, id) {
  return request({
    url: process.env.API_URL + '/api/v1/lemz_storage/' + id,
    method: 'PUT',
    body: JSON.stringify(newStorage),
  });
}
