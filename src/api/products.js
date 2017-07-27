const products = [
  {
    'id': 1,
    'title': 'Brigadeiro de pimenta',
    'description': 'Brigadeiro feito de pimenta vermelha',
    'imageUrl': 'brigadeiro-1.png',
    'price': 2.50,
    'currencyFormat': 'R$'
  }, {
    'id': 2,
    'title': 'Brigadeiro de cappuccino',
    'description': 'Brigadeiro feito de café cappuccino',
    'imageUrl': 'brigadeiro-2.png',
    'price': 2.50,
    'currencyFormat': 'R$'
  }, {
    'id': 3,
    'title': 'Brigadeiro de limão',
    'description': 'Brigadeiro feito de limão',
    'imageUrl': 'brigadeiro-3.png',
    'price': 2.50,
    'currencyFormat': 'R$'
  }, {
    'id': 4,
    'title': 'Brigadeiro de chocolate meio amargo',
    'description': 'Brigadeiro feito de chocolate meio amargo',
    'imageUrl': 'brigadeiro-4.png',
    'price': 2.50,
    'currencyFormat': 'R$'
  }, {
    'id': 5,
    'title': 'Brigadeiro de morango',
    'description': 'Brigadeiro feito de morango',
    'imageUrl': 'brigadeiro-5.png',
    'price': 2.50,
    'currencyFormat': 'R$'
  }, {
    'id': 6,
    'title': 'Brigadeiro de churros',
    'description': 'Brigadeiro feito de churros',
    'imageUrl': 'brigadeiro-6.png',
    'price': 2.50,
    'currencyFormat': 'R$'
  }, {
    'id': 7,
    'title': 'Brigadeiro de castanha',
    'description': 'Brigadeiro feito de castanha',
    'imageUrl': 'brigadeiro-7.png',
    'price': 2.50,
    'currencyFormat': 'R$'
  }, {
    'id': 8,
    'title': 'Brigadeiro de paçoca',
    'description': 'Brigadeiro feito de paçoca',
    'imageUrl': 'brigadeiro-8.png',
    'price': 2.50,
    'currencyFormat': 'R$'
  }
]

export default {

['GET */api/products'] (pathMatch, query, request) {
    // before respond, you can check the path and query parameters with `pathMatch` & `query` 
    // powered by 'url-pattern' & 'qs' 
    // https://www.npmjs.com/package/url-pattern 
    // https://www.npmjs.com/package/qs 
    let body = products
    return {
      body: body,
      status: 200,
      statusText: 'OK',
      headers: { /*headers*/ },
      deylay: 500, // millisecond 
    }
  }
}