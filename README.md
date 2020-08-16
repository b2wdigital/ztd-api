<h1 align="center">
    <img alt="Zero to Dev (API)" title="#ZeroToDev" src="./public/logo_git.png" />
</h1>

<h1 align="center">
  Zero To Dev
</h1>
<p align="center">API criada para a aplicação para auxiliar o Estágio Tech da B2W</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#funcionalidades">Funcionalidades</a> •
 <a href="#layout">Layout</a> •
 <a href="#como-executar-o-projeto">Como executar</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#autor">Autor</a>
</p>


## Sobre o projeto

O projeto foi desenvolvido para aplicar os conceitos aprendidos durante o Estágio Tech 2020 da B2W.

O Estágio se propõe a formar Dev Jrs em 6 meses. Para conhecer mais [clique aqui](https://estagiotech.b2w.io/)

---

## Funcionalidades
  - Autenticação via Google.
 - Rotas com:
    - Autenticação: Autenticação e callback do google
    - Cursos: Listar, buscar por id do curso, criar e atualizar cursos.
    - Feedbacks: Criação, buscar por cursos e por usuários e listagem.
    - Usuários: listar usuários, listar instrutores, editar, listar feedbacks pendentes.
---


#### Rodando o Backend (servidor)

```bash
# Clone este repositório
$ git clone git@github.com:b2wdigital/ztd-api.git
# Acesse a pasta do projeto no terminal/cmd
$ cd ztd-api
# Instale as dependências
$ yarn
# Execute a aplicação em modo de desenvolvimento
$ yarn start:dev
# O servidor inciará na porta:3333 - acesse http://localhost:3333
```

-   **[Express](https://expressjs.com/)**
-   **[CORS](https://expressjs.com/en/resources/middleware/cors.html)**
-   **[Moongose](https://github.com/mapbox/node-sqlite3)**
-   **[ts-node](https://github.com/TypeStrong/ts-node)**
-   **[dotENV](https://github.com/motdotla/dotenv)**
-   **[PassportJs](https://github.com/jaredhanson/passport)**
-   **[Jest](https://github.com/facebook/jest)**

---

#### []("")**Utilitários**

-  Requisições:  **[Insomnia](https://insomnia.rest/)**
-  Linter:  **[esLint](https://github.com/eslint/eslint)**
-  Code Formatter:  **[Prettier](https://github.com/prettier/prettier)**

Feito por Camila 🦄
[Créditos ao Layout do Readme](https://blog.rocketseat.com.br/como-fazer-um-bom-readme/)
