const request = require('supertest');
const app = require('../src/app');

describe('API Tests', () => {
  // Main endpoint test
  test('GET / should return welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('CI/CD Demo API');
  });

  // Version endpoint test
  test('GET /version should return version info', async () => {
    const response = await request(app).get('/version');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('version');
    expect(response.body.version).toBe('1.0.0');
  });

  // Data endpoint test
  test('GET /data should return sample data', async () => {
    const response = await request(app).get('/data');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('items');
    expect(Array.isArray(response.body.items)).toBe(true);
    expect(response.body.items).toHaveLength(3);
  });

  // Health check test
  test('GET /health should return healthy status', async () => {
    const response = await request(app).get('/health');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('status');
    expect(response.body.status).toBe('healthy');
  });

  // 404 test
  test('GET /nonexistent should return 404', async () => {
    const response = await request(app).get('/nonexistent');
    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty('error');
  });
});
