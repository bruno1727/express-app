const request = require('supertest');
const app = require('../../app');
const move = require('../../services/move');

describe('get move', () => {
    const agent = request.agent(app);

    test('should run with success', async () => {
        await agent.post('/move/computer').send(Array(9).fill(null)).expect(200).expect('Content-Type', /json/);
    });
});

