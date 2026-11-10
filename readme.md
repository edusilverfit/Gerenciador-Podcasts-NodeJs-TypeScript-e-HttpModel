# 🎙️ Podcast Manager

API REST para centralizar episódios de podcasts em vídeo, organizados por categorias, no estilo Netflix. Construída com **Node.js**, **TypeScript** e o módulo **HTTP nativo**, sem frameworks.

## 📖 Sobre o projeto

Assistir podcasts em vídeo costuma significar procurar episódios espalhados por vários canais. O **Podcast Manager** resolve isso reunindo os episódios em um só lugar, agrupados por categorias (saúde, bodybuilding, mentalidade, humor, entre outras), para que o front-end possa exibi-los em seções, como uma plataforma de streaming.

O projeto nasceu como um exercício para entender, na base, como funciona um servidor HTTP: roteamento, leitura de requisições, status codes e respostas em JSON.

## ✨ Funcionalidades

- [x] Listar episódios de podcasts
- [x] Organizar episódios por categorias
- [x] Filtrar episódios pelo nome do podcast

## 🛠️ Tecnologias

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- Módulo `http` nativo do Node.js
- Git e GitHub

## 📦 Modelo de dados

Cada episódio segue a estrutura abaixo:

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `podcastName` | `string` | Nome do podcast (ex.: `flow`) |
| `episode` | `string` | Título do episódio |
| `videoId` | `string` | ID do vídeo no YouTube |
| `cover` | `string` | URL da capa do episódio |
| `link` | `string` | URL do episódio no YouTube |
| `category` | `string[]` | Categorias do episódio |

## 🔌 Endpoints

### Listar episódios

```http
GET /api/list
```

**Resposta (200 OK):**

```json
[
  {
    "podcastName": "flow",
    "episode": "CBUM - Flow # 319",
    "videoId": "pQSuQmUfS30",
    "cover": "https://i.ytimg.com/vi/pQSuQmUfS30/hq720.jpg",
    "link": "https://www.youtube.com/watch?v=pQSuQmUfS30",
    "category": ["saúde", "bodybuilding"]
  },
  {
    "podcastName": "flow",
    "episode": "RUBENS BARRICHELO - Flow # 339",
    "videoId": "4KDGTdiOV4I",
    "cover": "https://i.ytimg.com/vi/4KDGTdiOV4I/hq720.jpg",
    "link": "https://www.youtube.com/watch?v=4KDGTdiOV4I",
    "category": ["esporte", "corrida"]
  }
]
```

### Filtrar episódios por podcast

```http
GET /api/episode?p=flow
```

| Parâmetro | Descrição |
|-----------|-----------|
| `p` | Nome do podcast a ser filtrado |

Retorna apenas os episódios do podcast informado, no mesmo formato da listagem.

## 🚀 Como rodar localmente

**Pré-requisitos:** Node.js 18 ou superior e npm.

```bash
# Clone o repositório
git clone https://github.com/edusilverfit/podcast-manager.git

# Acesse a pasta do projeto
cd podcast-manager

# Instale as dependências
npm install

# Inicie o servidor em modo de desenvolvimento
npm run dev
```

O servidor ficará disponível em `http://localhost:3333` (ajuste conforme a porta configurada no projeto).

Teste com `curl`:

```bash
curl http://localhost:3333/api/list
curl "http://localhost:3333/api/episode?p=flow"
```

## 📂 Estrutura do projeto

```
podcast-manager/
├── src/
│   ├── controllers/    # Recebem a requisição e devolvem a resposta
│   ├── services/       # Regras de negócio
│   ├── repositories/   # Acesso aos dados dos episódios
│   ├── models/         # Tipagens e interfaces (TypeScript)
│   ├── routes/         # Roteamento das requisições
│   └── server.ts       # Criação e inicialização do servidor HTTP
├── package.json
└── tsconfig.json
```

> Ajuste esta árvore para refletir a organização real das suas pastas.

## 🎓 Aprendizados

- Como funciona o ciclo requisição/resposta usando apenas o módulo `http` do Node.js
- Criação de rotas, leitura de query strings e uso correto de status HTTP
- Tipagem de dados com TypeScript para tornar o código mais seguro e legível
- Separação de responsabilidades em camadas

## 🔮 Próximos passos

- [ ] Migrar o servidor para **Fastify**
- [ ] Persistir os dados em **PostgreSQL**
- [ ] Criar rotas para cadastrar, editar e remover episódios
- [ ] Filtro por categoria
- [ ] Testes automatizados
- [ ] Deploy da API
- [ ] Front-end no estilo Netflix consumindo a API

## 👨‍💻 Autor

**Eduardo Akere**
Desenvolvedor Back-end Júnior

- GitHub: [@edusilverfit](https://github.com/edusilverfit)
- LinkedIn: www.linkedin.com/in/eduardoakere

