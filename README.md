
# 🚀 MKS Films 🚀

Bem-vindo à MKS Films! Este projeto é uma API para gerenciamento de catálogos de filmes, construída com NestJS, TypeScript, TypeORM, PostgreSQL e Redis para cache. A aplicação também utiliza JWT para autenticação e Swagger para documentação da API. Esta API foi desenvolvida com foco em boas práticas de código e organização, garantindo um desempenho eficiente e uma manutenção facilitada. 

##  📋 Funcionalidades 📋

- Autenticação JWT
- Operações CRUD para filmes
- Cache com Redis
- Documentação da API com Swagger

## 🛠️ Tecnologias Utilizadas 🛠️

- **TypeScript**: Linguagem de programação que adiciona tipagem estática ao JavaScript.
- **NestJS**: Framework para construção de aplicações server-side eficientes e escaláveis com Node.js.
- **TypeORM**: ORM para TypeScript e JavaScript (ES7, ES6, ES5).
- **PostgreSQL**: Sistema de gerenciamento de banco de dados relacional.
- **Redis**: Armazenamento em cache na memória.
- **Swagger**: Ferramenta para documentação de APIs RESTful.

## Detalhamento de Rota

### User
| Método | Rota               | Descrição                                |
| ------ | ------------------ | ---------------------------------------- |
| `POST` | /users             | Cria um novo usuário.                    |
| `GET`  | /users         | Lista todos os usuarios.                 |              
| `PUT`  | /users/{id}    | Atualiza um usuario.                     |
| `DELETE`| /users/{id}   | Exclui um usuario.                       |

### Autenticação
| Método | Rota   | Descrição             |
| ------ | ------ | --------------------- |
| `POST` | /auth/login | Autentica um usuário. |

### Filmes
| Método | Rota               | Descrição                                |
| ------ | ------------------ | ---------------------------------------- |
| `POST` | /movie        | Adiciona um filme.                       |
| `GET`  | /movie         | Lista todas os filmes.                    |
| `GET`  | /movie/{id}   | Detalha um filme específico.             |
| `PUT`  | /movie/{id}   | Atualiza um filme.                       |
| `DELETE`| /movie/{id}  | Exclui um filme.                         |

## Respostas

| Código | Descrição                                     |
|--------|-----------------------------------------------|
| `200`  | Requisição executada com sucesso (success).   |
| `400`  | Erros de validação ou campos não encontrados. |
| `401`  | Dados de acesso inválidos.                    |
| `404`  | Registro não encontrado (Not found).          |

## 🛠️ Experiência 🛠️

Sou um entusiasta do desenvolvimento web comprometido em alcançar resultados excepcionais. Tenho experiência sólida em várias linguagens e tecnologias, incluindo:

- **TypeScript**: 3 anos de experiência
- **JavaScript**: 3 anos de experiência
- **React**: 2 anos de experiência
- **Node.js**: 3 anos de experiência
- **SQL**: 3 anos de experiência

## 📋 Estrutura do Projeto 📋

```plaintext
mks-films/
├── dist/
│   ├── main.js
│   ├── ... (outros arquivos compilados)
├── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── auth/
│   │   ├── auth.controller.ts
│   │   ├── auth.module.ts
│   │   ├── auth.service.ts
│   │   ├── jwt.strategy.ts
│   │   ├── local.strategy.ts
│   ├── movies/
│   │   ├── movie.controller.ts
│   │   ├── movie.entity.ts
│   │   ├── movie.module.ts
│   │   ├── movie.service.ts
│   ├── users/
│   │   ├── user.controller.ts
│   │   ├── user.entity.ts
│   │   ├── user.module.ts
│   │   ├── user.service.ts
│   ├── main.ts
├── package.json
├── tsconfig.json
└── README.md
```

## 📋 Pré-requisitos 📋

- Node.js (v14 ou superior)
- PostgreSQL
- Redis

## 🔧 Configuração 🔧

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/mks-films.git
cd mks-films
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
DB_HOST=your_postgres_host
DB_PORT=your_postgres_port
DB_USER=your_postgres_user
DB_PASSWORD=your_postgres_password
DB_DATABASE=your_postgres_db
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
```
4. Inicie a aplicação:

```bash
npm run start:dev
```

## 📋 Documentação da API 📋

A documentação da API está disponível através do Swagger. Após iniciar a aplicação, acesse:

```
http://localhost:3000/api
```

## 🎁 Agradecimentos 🎁

Expresso minha gratidão na criação deste projeto. Foi uma experiência enriquecedora trabalhar com essas linguagens e frameworks e desenvolver uma API para gerenciamento de filmes.


