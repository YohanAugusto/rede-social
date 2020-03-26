# Projeto

Esse projeto um teste para para a Tech Agro.

Ele utiliza o `create-react-app` e adiciona algumas funcionalidades.

## Features

- Adiciona posts e comentários sem a necessidade de fazer login, pois estamos simulando um user logado de ID: 1 e email: teste@teste.com. É carregado posts e comentários de um API externa de testes.
- Tests ao adicionar um novo post
- É utilizado hooks com componentes funcionais e React-Bootstrap

## Estrutura

A estrutura básica do projeto é essa:

```yml
- src
  - components
  - utils
  - views
```

## Instruções

Para rodar o projeto:

```bash
$ yarn install
$ yarn start
```

Para compilar o projeto:

```bash
$ yarn build
```

PS: Se for rodar o arquivo compilado, abrir em um web server (apache, nginx) e não diretamente o index.html no navegador.

IP: 127.0.0.1
