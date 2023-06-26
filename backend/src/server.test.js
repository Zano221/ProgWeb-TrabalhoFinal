import request from 'supertest';
import app from './server.js';


// GET
describe('GET /funcionario/:email/:password', () => {
  it('deve retornar um funcionario se o email e a senha forem corretos', async () => {
    const response = await request(app)
      .get('/funcionario/adilarpamonha@png.com/123')
      .expect(200);

  
    expect(response.body).toBeDefined();
    expect(response.body.EMAIL_FUNC).toBe('adilarpamonha@png.com');
  });

  it('deve retornar um objeto vazio se o email e a senha forem incorretos', async () => {
    const response = await request(app)
      .get('/funcionario/email@invalido.com/1234')
      .expect(200);

    expect(response.body).toStrictEqual({});
  });
});

describe('GET /vitimas', () => {
  it('deve retornar todas as vitimas', async () => {
    const response = await request(app)
      .get('/vitimas')
      .expect(200);

    expect(response.body).toBeDefined();
    expect(response.body.length).toBeGreaterThan(0);
  });
});


// POST
describe('POST /funcionario', () => {
  it('deve criar um novo funcionario de teste', async () => {
    const response = await request(app)
      .post('/funcionario')
      .send({
        data: {
          email: 'funcionarioteste@emailteste.com',
          nome: 'Sergio Sacani',
          senha: '1234',
        },
      })
      .expect(200);

    expect(response.body).toBeDefined();
    expect(response.body.NOME_FUNC).toBe('Sergio Sacani');
  });
});

describe('POST /vitima', () => {
  it('deve criar uma nova vitima de teste', async () => {
    const response = await request(app)
      .post('/vitima')
      .send({
        data: {
          nome: 'Jão Pelicer',
          cidade: 'Maximiliano',
        },
      })
      .expect(200);

    expect(response.body).toBeDefined();
    expect(response.body.NOME_VITI).toBe('Jão Pelicer');
  });
});


// PUT
describe('PUT /funcionario/:email:/:senha', () => {
  it('deve atualizar um funcionario teste', async () => {
    const response = await request(app)
      .put('/funcionario/funcionarioteste@emailteste.com/1234')
      .send({
        data: {
          email: 'funcionarioteste@emailteste.com',
          nome: 'Sergio Sacani 2',
          senha: '1234',
        },
      })
      .expect(200);

    expect(response.body).toBeDefined();
    expect(response.body[0]).toBe(1);
  });
});


// DELETE
describe('DELETE /funcionario/:email/:password', () => {
  it('deve deletar um funcionario teste existente', async () => {
    const response = await request(app)
      .delete('/funcionario/funcionarioteste@emailteste.com/1234')
      .expect(200);

    expect(response.body).toBe(true);
  });
});