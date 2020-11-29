# Documentação do desafio.

Olá avaliadores, irei guia-los a como instalar e executar o projeto.
Tambem irei apresentar detalhadamente as tecnologias que utilizei e o porque.

## Instalação, execução, testes via scripts

Dentro do diretório frontend execute os seguintes comandos:

### `yarn install`

Esse comando irá instalar todas as dependencias do projeto em sua maquina.

### `yarn start`

Após a instalação das dependecias da aplição, rode mais esse comando, para a executar a aplicação

### `yarn cypress`

Para rodar os testes desenvolvidos na aplicação, rode apenas esse comando que irá abrir uma nova interface, com as pastas onde se encontra as testes. Dentro dessa pasta podemos dar duplo click no arquivo de teste em que queremos rodar ou podemos rodar todos de uma vez.

# Tecnologias utilizadas.

## 1. Framework React JS

Escolhi essa framework, por ser a que domino.

Falando em arquitetura de pastas, segui o que considero o mais ideal, todos os projetos que desenvolvo, separo bem as coisas, porque acho que fica melhor organizado, e acredito que seja mais rapida a minha fixação, caso precise criar um novo aquivo, ou buscar um que ja exista.

No projeto para garantir a tipagem da minha variavel, utilizei a biblioteca prop-types, para garantir, que caso eu receba uma string onde se espere um numero isso não seja mutavel.

## 2. Bootstrap

Para tratar resposividade, e maior agilidade na organização dos elementos em tela, usei a biblioteca do bootstrap, que me permite acelerar o desenvolvimento, pois atraves dela ja tenho breakpoints pré-definidos e outros alinhamentos como margin, pading, container, row ... que me permite ja ir montando tudo isso em tela de forma mais dinamica, e estilizando via a propriedade className do item.

## 3. SCSS

para criar a estilização da aplicação utilizei Scss por ter um dominio maior, e que considero mais tranquilo tambem a questão de trabalhar com alguns conseitos de atomic design, organizei tambem dessa mesma maneira a pasta styles, onde usei os arquivos separados por: global para aplicação, componentes, e dependencias.

## 4. Axios

Para realizar as requisições escolhi o axios, separei em uma pasta services onde contem um arquivo com api com a minha baseUrl, e na pagina que eu preciso eu disparo a requisição apenas do meu end-point, acredito que assim é mais organizado de se fazer.

## 5. Moment JS

Para tratar as datas e horas da aplicação optei por usar o momentjs por ja estar acostumado com a biblioteca, e familiarizado com suas respectivas funções.

## 6. React-Icons

Utilizei a biblioteca react-icons, por ser um local onde se eu precisar utilizar icones do Font Awesome, Meterial Design, entre outros eu não precise importar cada uma delas para o projeto.

OBS: Para tentar deixar o layout o mais fiel possivel e seguir com o padrão de codigo, vi que os icones do protótipo eram todos do Font Awsome, porem a lib do react-icons não tem os icones como outline então deixei os items com colocação mesmo.

## Testes com Cypress

Testes escrevi os testes com o cypress, para tentar me aproximar do dia a dia da empresa. Porem as validações que fiz, foi apenas dos components em UI, e o meu retorno do end-point.
