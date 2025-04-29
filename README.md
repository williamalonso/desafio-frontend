<p align="center">
  <img src="https://app.landingpage.com.br/construtor/assets/imagens/By.png" width="350" title="hover text">
</p>

### 🤔 Informações sobre o teste

Este projeto é uma solução para um teste técnico de frontend, cujo objetivo era montar a página de um produto de e-commerce, consumindo uma API para exibir suas informações dinamicamente.

A proposta visa avaliar a lógica de programação, capacidade de integração com APIs e manipulação do DOM utilizando JavaScript puro.

---

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Javascript Vanilla](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [HTML 5](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS 3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

---

### ✨ Sobre a construção do projeto:

- Consumimos dados de produtos a partir de uma API pública;
- Preenchemos dinamicamente o nome, imagem e preço do produto na página;
- Variantes (como cor, tamanho e voltagem) são renderizadas com base na resposta da API;
- Ao selecionar variantes, o sistema verifica e informa se há estoque disponível;
- Ao clicar em "comprar", os dados do produto selecionado são enviados para a API de checkout.

---

## 🙅 Instalações e usos:

Voce pode baixar o repositório e executar o arquivo index.html ou acessar o [link](https://desafio-frontend-mu-swart.vercel.app/)

---

## 🔌 APIs utilizadas

📦 Produtos

- Produto 1:
`https://empreender.nyc3.cdn.digitaloceanspaces.com/static/teste-prod-1.json`

- Produto 2:
`https://empreender.nyc3.cdn.digitaloceanspaces.com/static/teste-prod-2.json`


Exemplo de resposta:

````javascript
{
    "id": 127809233,
    "title": "Camisa Prime - Podcast",
    "options": ["Cor","Tamanho"],
    "values": [["Preto","Azul"],["P", "M"]],
    "variants": [
        {
            "id": 499249469,
            "product_id": 127809233,
            "price": "50.00",
            "values": [ "Preto", "P"],
            "image_id": 347611168,
            "inventory_quantity": 20,
            "image_url": "https://d2r9epyceweg5n.cloudfront.net/stores/002/260/878/products/php1aciy61-8cc5b53686d728f5c516589604020929-1024-1024.png"
        },{
            "id": 499249469,
            "product_id": 127809233,
            "price": "50.00",
            "values": [ "Azul", "P"],
            "image_id": 347611168,
            "inventory_quantity": 20,
            "image_url": "https://d2r9epyceweg5n.cloudfront.net/stores/002/260/878/products/php1aciy61-8cc5b53686d728f5c516589604020929-1024-1024.png"
        }
    ],
    // imagem principal do produto
    "image_url": "https://d2r9epyceweg5n.cloudfront.net/stores/002/260/878/products/php1aciy61-8cc5b53686d728f5c516589604020929-1024-1024.png",
    // imagens das variantes
    "images": [
        {
            "id": 347611168,
            "product_id": 127809233,
            "src": "https://d2r9epyceweg5n.cloudfront.net/stores/002/260/878/products/php1aciy61-8cc5b53686d728f5c516589604020929-1024-1024.png"
        }
    ]
}
````

💳 Checkout

Envio dos dados via método POST: `post`

```
https://app.landingpage.com.br/api/checkoutloja/LPL2gc/5d87eb644e5631bc6a03f1e43a804e1c
```

O formato de envio é um array com um objeto seguindo a seguinte estrutura:

````javascript
[{
  values: ["Preto", "p"],
  quantity: 1,
  product_id: 1,
  variant_id: 1,
}]
````

🔗 API de apoio (CORS Proxy)

Para contornar o problema de CORS na requisição de checkout, foi criada uma API intermediária que redireciona os dados do frontend para o endpoint oficial da plataforma.

Você pode acessar o código-fonte da API no seguinte repositório:

👉 [Repositório da API de Checkout Proxy](https://github.com/williamalonso/api-front-test)



<h3 align="center">William Alonso</h3>
