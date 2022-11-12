require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fetchItem', () => {
  // implemente seus testes aqui
  test('Verifica se fetchItem é uma função', () => {
    expect (typeof fetchItem).toEqual('function')
  })

  test('Verifica se o fetch com arg MLB1615760527 foi executado',  async () => {
    await fetchItem('MLB1615760527');
    expect (fetch).toHaveBeenCalled()
  })

  test('Verifica se ao chamar fetchProducts retorna o objeto esperado', async () => {
    const res = await fetchItem('MLB1615760527')
    expect (res).toEqual(item);
  })

  test('Verifica se ao passar sem parametro retorna um erro.', async () => {
    try{
      await fetchItem();
    } catch (error) {
      expect(error).toEqual(new Error('You must provide an url'));
    }
  })
  // fail('Teste vazio');
});
