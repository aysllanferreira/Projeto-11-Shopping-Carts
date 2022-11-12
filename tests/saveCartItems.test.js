const localStorageSimulator = require('../mocks/localStorageSimulator');
const saveCartItems = require('../helpers/saveCartItems');

localStorageSimulator('setItem');

describe('3 - Teste a função saveCartItems', () => {
  // implemente seus testes aqui
  test('Testa se ao chamar a funcao com uma lista, o localStorage funciona.', () => {
    saveCartItems('<ol><li>anything</li></ol>');
    expect (localStorage.setItem).toHaveBeenCalled();
  });

  test('Testa se ao chamar a funcao com uma lista, o localStorage funciona.', () => {
    saveCartItems('<ol><li>anything</li></ol>')
    expect(localStorage.setItem).toHaveBeenCalledWith('cartItems', '<ol><li>anything</li></ol>');
  });

  test('Verifica se um erro eh lancado sem argumento', () => {
    expect(() => saveCartItems()).toThrow('Um argumento deve ser passado');
  });

  test('Verifica se é uma função', () => {
    expect(typeof (saveCartItems)).toBe('function');
  });
  // fail('Teste vazio');
});
