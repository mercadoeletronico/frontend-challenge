# Desafio Mercado Eletrônico 

Teste prático desenvolvido para a empresa Mercado Eletrônico.

### Desenvolvido com:

* [Vue 3](https://vuejs.org/) - Vue 3

* [Vue Router](https://router.vuejs.org/) - Vue Router

* [Cypress](https://www.cypress.io/) - Cypress

* [Pinia](https://pinia.vuejs.org/) - Pinia

* [TailwindCSS](https://tailwindcss.com/) - TailwindCSS

* [Axios](https://axios-http.com/ptbr/docs/intro) - Axios

* [Github Actions](https://github.com/features/actions) - Github Actions 

## 🚀 Começando

Estas instruções permitirão que você obtenha uma cópia do projeto em operação na sua máquina local para fins de desenvolvimento e teste.

### 📋 Pré-requisitos

Antes de rodar o projeto, verifique se você tem as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (recomenda-se a versão LTS)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)

### 🔧 Instalação

Siga os passos abaixo para instalar e rodar o projeto.

1.  Clone este repositório:
    ```bash
    git clone https://github.com/brunobarross/challenge-mercado-eletronico.git
    ```
2.  Acesse a pasta do projeto no terminal/cmd:
    ```bash
    cd challenge-mercado-eletronico
    ```
3 . Configure as variáveis de ambiente

Crie um arquivo na raiz do projeto chamado `.env` e adicione a URL da sua API.
```env
VITE_BACKEND_URL="https://api.mercadoe.space"
```

4.  Instale as dependências:
    ```bash
    npm install
    ```
5.  Execute a aplicação em modo de desenvolvimento:
    ```bash
    npm run dev
    ```

O servidor será iniciado na porta `5173`. Acesse [http://localhost:5173](http://localhost:5173).

---

## ✅ Testes E2E com Cypress

O projeto inclui uma suite de testes de ponta a ponta com Cypress, que pode ser executada em dois modos diferentes.

### 💻 Modo Interativo (com interface gráfica)

Para executar os testes com a interface gráfica do Cypress, o que é útil para depuração e desenvolvimento local, use o seguinte comando:

```bash
npm run test:e2e
```

### 💻 Modo Interativo (com interface gráfica)

Para rodar os testes em um ambiente de integração contínua (CI) sem a interface gráfica, use o seguinte comando:

```bash
npm run test:e2e:ci
```
## ☁️ Ambiente de Produção
Para acessar o ambiente de produção basta clicar [aqui](https://challenge-mercado-eletronico-altamiro.netlify.app/) ou acessar [https://challenge-mercado-eletronico-altamiro.netlify.app/](https://challenge-mercado-eletronico-altamiro.netlify.app/)

⌨️ Feito por [Altamiro Bruno](https://www.linkedin.com/in/altamirobruno/) 😊
