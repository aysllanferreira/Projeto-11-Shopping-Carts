const getSavedCartItems = () => JSON.parse(localStorage.getItem('cartItems'));

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
