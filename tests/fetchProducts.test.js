require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('Verifica a função fetchProducts', () => {
  // implemente seus testes aqui
  test('Teste de fetchProducts é uma função', () => {
    expect (typeof fetchProducts).toEqual('function')
  })

  test('Verifica se a funcao com o arg computador faz o fetch ser chamado', async() => {
    expect.assertions(1);
    await fetchProducts('computador');
    expect(fetch).toHaveBeenCalled();
  })

  test('Verifica se ao chamar fetchProducts retorna o objeto esperado', async () => {
    const res = await fetchProducts('computador')
    expect (res).toEqual(computadorSearch);
  })

  test('Verifica se ao passar sem parametro retorna um erro.', async () => {
    try{
      await fetchProducts();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
    
  })
});
