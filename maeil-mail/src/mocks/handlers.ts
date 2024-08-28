import API_ROUTES from '@/apis/routes';
import { http, HttpResponse } from 'msw';
import BASE_URL from '../apis/baseUrl';

export const handlers = [
  http.post(`${BASE_URL}${API_ROUTES.post_subscribe}`, () => {
    return HttpResponse.json(null, {
      status: 200,
    });
  }),
  http.post(`${BASE_URL}${API_ROUTES.post_new_question}`, () => {
    return HttpResponse.json(null, {
      status: 200,
    });
  }),
];
