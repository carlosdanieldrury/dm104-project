const products = [
  {
    'id': 1,
    'title': 'Brigadeiro de pimenta',
    'description': 'Brigadeiro feito de pimenta vermelha',
    'imageUrl': 'https://image.ibb.co/fKpgPk/brigadeiro_1.png',
    'price': '2,50',
    'currencyFormat': 'R$'
  }, {
    'id': 2,
    'title': 'Brigadeiro de cappuccino',
    'description': 'Brigadeiro feito de café cappuccino',
    'imageUrl': 'https://image.ibb.co/gpuFjk/brigadeiro_2.png',
    'price': '2,50',
    'currencyFormat': 'R$'
  }, {
    'id': 3,
    'title': 'Brigadeiro de limão',
    'description': 'Brigadeiro feito de limão',
    'imageUrl': 'https://image.ibb.co/imBHx5/brigadeiro_3.png',
    'price': '2,50',
    'currencyFormat': 'R$'
  }, {
    'id': 4,
    'title': 'Brigadeiro de chocolate meio amargo',
    'description': 'Brigadeiro feito de chocolate meio amargo',
    'imageUrl': 'https://image.ibb.co/bVegPk/brigadeiro_4.png',
    'price': '2,50',
    'currencyFormat': 'R$'
  }, {
    'id': 5,
    'title': 'Brigadeiro de morango',
    'description': 'Brigadeiro feito de morango',
    'imageUrl': 'https://image.ibb.co/jUtKAQ/brigadeiro_5.png',
    'price': '2,50',
    'currencyFormat': 'R$'
  }, {
    'id': 6,
    'title': 'Brigadeiro de churros',
    'description': 'Brigadeiro feito de churros',
    'imageUrl': 'https://image.ibb.co/ktoVH5/brigadeiro_6.png',
    'price': '2,50',
    'currencyFormat': 'R$'
  }, {
    'id': 7,
    'title': 'Brigadeiro de castanha',
    'description': 'Brigadeiro feito de castanha',
    'imageUrl': 'https://image.ibb.co/jzZ4c5/brigadeiro_7.png',
    'price': '2,50',
    'currencyFormat': 'R$'
  }, {
    'id': 8,
    'title': 'Brigadeiro de paçoca',
    'description': 'Brigadeiro feito de paçoca',
    'imageUrl': 'https://image.ibb.co/m4omqQ/brigadeiro_8.png',
    'price': '2,50',
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
