const request=require("supertest");
const app=require("./app");
const database=require("./database/database.local");

describe("Conjunto de testes app",()=>{

    it ("Testando GetInfo Endpoint",async()=>{
        //cenário
        const esperado="geekxxx";
        //execução
        const res=await request(app).get("/getInfo");
        
        //validação
        expect(res.body.user).toBe(esperado);
    });

    it("Ao salvar um cliente o endpoint deve retornar Ok",async()=>{
        const databaseSpy = jest.spyOn(database, 'gravarDados');
        databaseSpy.mockReturnValue(true);

      
        //cenário
        const esperado="Ok";
        //execução
        const res=await request(app)
                  .post("/clientes/salvar")
                  .send({codigo:"",
                    nome:"236",
                    endereco:"7889"});
        
      

        //validação
        expect(res.text).toBe(esperado);
        expect(res.status).toBe(201);
    });

    it("Ao tentar salvar um cliente e der um erro o endpoint deve retornar  NOk e 401",async()=>{
        const databaseSpy = jest.spyOn(database, 'gravarDados');
        databaseSpy.mockReturnValue(false);//gravarDados Sempre Vai Retornar false

      
        //cenário
        const esperado="NOk";

        //execução
        const res=await request(app)
                  .post("/clientes/salvar")
                  .send({});
                  
      
          expect(res.status).toBe(401);
    
        
    });


    it("Ao tentar listar clientes e der um erro o endpoint deve retornar  NOk e 401",async()=>{
        const databaseSpy = jest.spyOn(database, 'buscaTodosDados');
        databaseSpy.mockReturnValue(null);//buscaTodosDados Sempre Vai Retornar false

      
        //cenário
        const esperado="NOk";

        //execução
        const res=await request(app)
                  .get("/clientes/listar")
                  .send({});
                  
      
          expect(res.status).toBe(401);
    
        
    });


    it("Ao tentar listar clientes o endpoint deve retornar  Ok e 200",async()=>{
        const databaseSpy = jest.spyOn(database, 'buscaTodosDados');
        databaseSpy.mockReturnValue("1");//buscaTodosDados Sempre Vai Retornar true

      
        //cenário
        const esperado="Ok";

        //execução
        const res=await request(app)
                  .get("/clientes/listar")
                  .send({});
                  
      
          expect(res.status).toBe(200);
    
        
    });


    it("Ao tentar listar clientes por chave e der um erro o endpoint deve retornar  NOk e 401",async()=>{
        const databaseSpy = jest.spyOn(database, 'buscaDados');
        databaseSpy.mockReturnValue(null);//buscaDados Sempre Vai Retornar false

      
        //cenário
        const esperado="NOk";

        //execução
        const res=await request(app)
                  .get("/clientes/listar/1")
                  .send({});
                  
        console.log(res.status)
          expect(res.status).toBe(401);
    
        
    });

    it("Ao tentar listar clientes por chave o endpoint deve retornar  Ok e 200",async()=>{
        const databaseSpy = jest.spyOn(database, 'buscaDados');
        databaseSpy.mockReturnValue("1");//buscaDados Sempre Vai Retornar true

      
        //cenário
        const esperado="Ok";

        //execução
        const res=await request(app)
                  .get("/clientes/listar/1")
                  .send({});
                  
        console.log(res.status)
          expect(res.status).toBe(200);
    
        
    });

    

})