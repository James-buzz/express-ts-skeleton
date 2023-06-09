import supertest from 'supertest';
import testServer from '../server';

describe('Hello controller', () => {
  it('should return a hello world message', async () => {
    const res = await supertest(testServer).get('/');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({ message: 'Hello world' });
  });
});
