import axios from 'axios';
import { getAuthHeaders, request, requestINN } from '../../utilsAPI.jsx';

export function getClients(elements) {
  return request({
    url: process.env.API_URL + '/api/v1/client/' + '?size=' + elements,
    method: 'GET',
  });
}

export function searchClients(query, fields) {
  const formattedFields = fields.filter((cur) => cur !== '' && cur).join('&');
  console.log('formatted', formattedFields, fields);
  return request({
    url: `${process.env.API_URL}/api/v1/client/search/${
      formattedFields && formattedFields !== '' ? `${formattedFields}/` : ''
    }`,
    method: 'POST',
    body: JSON.stringify(query),
  });
}

export function getClientsByCategory(category) {
  return request({
    url: process.env.API_URL + '/api/v1/client/category/',
    method: 'POST',
    body: JSON.stringify(category),
  });
}

export function editNextContactDateClient(date) {
  return request({
    url: process.env.API_URL + '/api/v1/client/date/',
    method: 'POST',
    body: JSON.stringify(date),
  });
}

export function getClientsByCategoryAndType(
  category_type,
  curPage,
  itemsPerPage,
  sortOrder,
  signal,
) {
  return request({
    url:
      process.env.API_URL +
      '/api/v1/client/category_type/client/' +
      '?' +
      'page=' +
      (curPage - 1) +
      '&' +
      'sort=' +
      sortOrder.curSort +
      ',' +
      sortOrder[sortOrder.curSort] +
      '&' +
      'size=' +
      itemsPerPage,
    method: 'POST',
    body: JSON.stringify(category_type),
    signal: signal,
  });
}

export function searchClientsByCategoryAndType(query, field, signal) {
  return request({
    url: `${process.env.API_URL}/api/v1/client/category_type/search/${
      field && field !== '' ? `${field}/` : ''
    }`,
    method: 'POST',
    body: JSON.stringify(query),
    signal: signal,
  });
}

export function getClientById(id) {
  return request({
    url: process.env.API_URL + '/api/v1/client/' + id,
    method: 'GET',
  });
}

export function addClient(newClient) {
  const headers = getAuthHeaders();
  return axios.post(`${process.env.API_URL}/api/v1/client`, newClient, headers);
}

export function editClient(newClient, id) {
  const headers = getAuthHeaders();
  return axios.put(
    `${process.env.API_URL}/api/v1/client/${id}`,
    newClient,
    headers,
  );
}

export function deleteClient(id) {
  return request({
    url: process.env.API_URL + '/api/v1/client/' + id,
    method: 'DELETE',
  });
}

export function getInfoByINN(INN) {
  return requestINN({
    url: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party',
    method: 'POST',
    body: JSON.stringify(INN),
  });
}

export function getBIKByINN(INN) {
  return requestINN({
    url: 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/bank',
    method: 'POST',
    body: JSON.stringify(INN),
  });
}
