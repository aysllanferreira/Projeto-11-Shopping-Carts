const fetchItem = async (param) => {
    // seu código aqui
    const url = `https://api.mercadolibre.com/items/${param}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
  };
  
  if (typeof module !== 'undefined') {
    module.exports = {
      fetchItem,
    };
  }
  