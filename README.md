# Projeto e-commerce para teste em react
### Contém Filtrar, pesquisar, adicionar ao carrinho, verificar produto e comprar;

## Adicionando ao carrinho
### Assim que o usuário clica no botão de "adicionar ao carrinho", ele é direcionado para a parte da direita com animação inserindo o item no carrinho
![add to cart](https://user-images.githubusercontent.com/61124602/160263228-abc204e0-9cec-490d-91b6-f217f0efbee2.gif)

## Comprando
### Assim que o usuário decidir por comprar os itens, ele terá que preencher um formulário contendo o seu nome, email e endereço
![buy](https://user-images.githubusercontent.com/61124602/160263254-39f4f0de-8693-423c-87ff-0e669369b7a1.gif)

## Filtro por Select e option onde é possivel filtrar por categoria e por preço
### O usuário pode optar por filtrar os itens por categoria onde será somente mostrado os itens com a categoria escolhida
![filtro](https://user-images.githubusercontent.com/61124602/160263264-ad4a86da-0055-46b9-9d81-22138cbf4948.gif)

## Adicionei uma modal com o botao de adiconar ao carrinho filtrando os itens por ID
### A modal serve para mostrar os itens com mais detalhes contendo dentro a descrição do produto
![modal por id](https://user-images.githubusercontent.com/61124602/160263358-c82a5626-bf29-4cdb-ac6b-58ebbd5e2bbc.gif)

## Sobre a minha experiência com este projeto
### Aprendi muito com esse projeto, eu já tinha executado os mesmos objetivos desse projeto em angular e usar react com redux implementado o action, store e reducers foi um desafio a mais.

## Tomada de decisões e dificuldades
### Ao longo do processo fui priorizando as funcionalidades (adicionar ao carrinho, remover e etc) antes de implementar CSS na página. Após o término das mesmas em javascript, o css foi implementado porém ainda não tinha um backend em si, foi ai que eu implementei um server.js e a plataforma de aplicação de dados que escolhi foi o MongoDB por ser intuitivo e ter extensões que me auxiliam no desenvolvimento de debugação.
### Conforme eu fui programando o projeto, surgiram algumas dificuldades no caminho como a pesquisa de itens em redux. Eu já havia concluído a pesquisa usando react e o useState. Entretanto não encontrei uma solução a tempo para implementar em redux já o sistema de classe do redux não permitia funções e eu precisava usar o connect() para criar um código mais "clean", assim como conectar ao banco de dados. Uma outra dificuldade foi implementar a segunda API já que continha nomes e titulos distintos comparado com a primeira API e precisava de um pouco mais de tempo pra achar uma solução para essas implementações específicas

### Tive alguns problemas com a API porque algumas vezes ela ficava fora do ar então optei por baixar-la e incluir apenas para o frontend, visto que para o backend eu inseri os dados dos produtos no mongoDB usando como ponte o arquivo server.json e a API. Antes usar a ferramenta em si eu testava algumas inserções no postman para teste e assim garantindo a veracidade do backend 



## Passos para a instalação do projeto
### Necessário para o front-end

### `npm i react-reveal --force`
### `npm i react-modal --force`
### `npm install react-icons --save`



### bibliotecas para serem instaladas obrigatoriamente

### `npm install express body-parser mongoose shortid`
### `npm install redux react-redux redux-thunk`
### `npm i -g nodemon` //caso n tenha o nodemon instalado globalmente

## Rodar o projeto em 2 terminais
## No primeiro terminal
### `npm start`
## No segundo terminal
### `npm run server`


## Necessario para o backend => ter instalado e mongoDB community

### insira o endereço `mongodb://localhost/react-add-to-cart-db` no mongoDB
![image](https://user-images.githubusercontent.com/61124602/160265051-7031eda1-4e53-4b8e-aa26-1482354727ef.png)

### insira o arquivo datas.json que se encontra na pasta raiz do projeto
![add](https://user-images.githubusercontent.com/61124602/160265319-705f5a8b-afb9-4906-819c-0321b917d98c.png)



### os pedidos ficarão orders no mongoDB




## Passo importante para inclusão de dados no backend mongoDB 
### 

## caso necessário por alguma atualização de versão
### `npm i`

## Qualquer duvida sobre a instalação ou sobre o projeto estarei disponivel pelo email: eriklipe@gmail.com

## Curiosidade e desenvolvimento
### Assim que recebi o desafio optei por escrever os objetivos em um bloco de notas assim como bibliotecas usadas e atualizacoes
![image](https://user-images.githubusercontent.com/61124602/160263835-0cbbe0c0-7acd-4e5f-8808-2a265a7e1b3c.png)


