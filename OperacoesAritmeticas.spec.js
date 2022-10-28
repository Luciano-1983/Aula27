const {som}=require("./OperacoesAritmeticas");
const {sub}=require("./OperacoesAritmeticas");
const {mult}=require("./OperacoesAritmeticas");
const {div}=require("./OperacoesAritmeticas");

describe ("Conjunto de testes operações aritiméticas",()=>{

    it ("Somando 1+2 deve retornar 3",()=>{
         //cenário
         const esperado=3;
     
         //execução
         const resultado=som(1,2);
     
         //validação
         expect(resultado).toBe(esperado);
     });

     it ("Subtraindo 4-1 deve retornar 3",()=>{
        //cenário
        const esperado=3;
    
        //execução
        const resultado=sub(4,1);
    
        //validação
        expect(resultado).toBe(esperado);
    });

    it ("Multiplicando 2*3 deve retornar 6",()=>{
        //cenário
        const esperado=6;
    
        //execução
        const resultado=mult(2,3);
    
        //validação
        expect(resultado).toBe(esperado);
    });

    it ("Dividindo 6/3 deve retornar 2",()=>{
        //cenário
        const esperado=2;
    
        //execução
        const resultado=div(6,3);
    
        //validação
        expect(resultado).toBe(esperado);
    });
     
 })