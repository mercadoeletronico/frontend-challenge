# Documentação do desafio.

Olá avaliadores, irei guia-los a como instalar e executar o projeto.
Tambem irei apresentar detalhadamente as tecnologias que utilizei e o porque.

## Instalação, execução, testes via scripts

Dentro do diretório frontend execute os seguintes comandos:

# `yarn install`

Esse comando irá instalar todas as dependencias do projeto em sua maquina.

## `yarn start`

Após a instalação das dependecias da aplição, rode mais esse comando, para a executar a aplicação

### `yarn cypress`

Para rodar os testes desenvolvidos na aplicação, rode apenas esse comando que irá abrir uma nova interface, com as pastas onde se encontra as testes. Dentro dessa pasta podemos dar duplo click no arquivo de teste em que queremos rodar ou podemos rodar todos de uma vez.

## Tecnologias utilizadas.

# 1. Framework React JS

Escolhi essa framework, por ser a que domino.

Falando em arquitetura de pastas, segui o que considero o mais ideal, todos os projetos que desenvolvo, separo bem as coisas, porque acho que fica melhor organizado, acredito que seja mais rapida a minha fixação tambem, caso precise criar um novo aquivo, ou buscar um que ja exista.

No projeto para garantir a tipagem da minha variavel, utilizei a biblioteca prop-types, para garantir, que caso eu receba uma string onde se espere um numero isso seja mutavel.

## 2. Eslint

Para seguir um padrão de codigo, e identação, apliquei o eslint no projeto, visando garantir que tanto quem criou os outros desenvolvedores irão ter uma style guide pra seguir.

### 3. Bootstrap

Para tratar resposividade, e maior agilidade na organização dos elementos em tela, usei a biblioteca do bootstrap, que me permite acelerar o desenvolvimento, pois atraves dela ja tenho breakpoints pré-definidos e outros alinhamentos como margin, pading, container, row ... que me permite ja ir montando tudo isso em tela, e estilizando via a propriedade className do item.

#### 4. SCSS

para criar a estilização da aplicação itilizei via Scss por ter um dominio mais, e que considero mais tranquilo tambem a questão de trabalhar com alguns conseitos de atomic design, organizei tambem dessa mesma maneira a pasta styles, dentro da mesma usei os arquivos separados por: global para aplicação, componentes, e dependencias.

##### 5. Axios

Para realizar as requisições escolhi o axios, separei uma pasta services onde contem a minha baseUrl, e apenas na pagina que eu preciso eu disparo a requisição apenas do meu end-point, acredito que assim é mais organizado de se fazer.

###### 6. Moment JS

Para tratar as datas e horas da aplicação optei por usar o momentjs por ja estar acostumado com a biblioteca, e familiarizado com suas respectivas funções.
