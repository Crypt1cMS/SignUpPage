const request = require('supertest')
const app = require('./app');
var mongoose= require('mongoose');
const { json } = require('stream/consumers');
//const { beforeEach } = require('node:test');

describe("servidor", ()=>{
    test("servidor", ()=>{
        expect(true).toBe(true);
    });
}) ;



describe('GET cargar usuario', ()=>{
    const dato = {identitys: [{__v: 0, _id: "646c1d17d772ad850cf15472", createdAt: "2023-05-23T01:55:35.875Z", id: 14, name2: "Mario", surname: "Beltran", updatedAt: "2023-05-23T01:55:35.875Z"}]};
    beforeAll(async () => {
        await mongoose.connect("mongodb://127.0.0.1:27017/usuarios");
      });
      afterAll(async () => {
        await mongoose.disconnect;
      });
    
    let response;
    beforeEach(async ()=>{
        response = await request(app).get('/leer/13').send(); 
    })

    it('Ruta de interes /leer/:id', async ()=>{
       // response = await request(app).get('/leer/14').send();    
        expect(response.status).toBe(200);
        expect(response.header['content-type']).toContain('json')   
   
    })

    it('Datos en la respuesta', async ()=>{
        //response = await request(app).get('/leer/14').send();     
        expect(response.body).toHaveProperty('identitys')
        //expect(response.body).toMatchObject(dato)        
       
    })
})