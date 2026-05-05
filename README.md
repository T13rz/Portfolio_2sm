# Portfólio 2º Semestre

Portfólio acadêmico com API REST em Node.js + Express.

## Estrutura

```
Portfolio/
├── index.html
├── server.js
├── package.json
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── icone/perfil.jpg
    └── projetos/
```

## Requisitos

- Node.js 18 ou superior
- npm

## Como rodar

```bash
npm install
npm start
```

Acesse http://localhost:3000 no navegador.

Para desenvolvimento com reload automático:

```bash
npm run dev
```

## Endpoints

| Método | Rota                    | O que faz                        |
|--------|-------------------------|----------------------------------|
| GET    | /P2S/apresentacao       | Retorna dados pessoais           |
| PUT    | /P2S/apresentacao       | Atualiza dados pessoais          |
| GET    | /P2S/formacao           | Lista formações                  |
| POST   | /P2S/formacao           | Adiciona formação                |
| PUT    | /P2S/formacao/:id       | Edita formação por ID            |
| DELETE | /P2S/formacao/:id       | Remove formação por ID           |
| GET    | /P2S/cursos             | Lista cursos                     |
| POST   | /P2S/cursos             | Adiciona curso                   |
| PUT    | /P2S/cursos/:id         | Edita curso por ID               |
| DELETE | /P2S/cursos/:id         | Remove curso por ID              |
| GET    | /P2S/projetos           | Lista projetos                   |
| POST   | /P2S/projetos           | Adiciona projeto                 |
| PUT    | /P2S/projetos/:id       | Edita projeto por ID             |
| DELETE | /P2S/projetos/:id       | Remove projeto por ID            |
| GET    | /P2S/experiencia        | Lista experiências               |
| POST   | /P2S/experiencia        | Adiciona experiência             |
| PUT    | /P2S/experiencia/:id    | Edita experiência por ID         |
| DELETE | /P2S/experiencia/:id    | Remove experiência por ID        |
| GET    | /P2S/competencias       | Retorna skills técnicas e soft   |
| PUT    | /P2S/competencias       | Atualiza competências            |
| GET    | /P2S/links              | Lista links profissionais        |
| POST   | /P2S/links              | Adiciona link                    |
| PUT    | /P2S/links/:id          | Edita link por ID                |
| DELETE | /P2S/links/:id          | Remove link por ID               |

## Observações

Os dados ficam em memória. Ao reiniciar o servidor os dados voltam ao estado original definido em `server.js`.

### GitHub Pages

Este projeto não é compatível com GitHub Pages. O Pages serve apenas arquivos estáticos e não executa Node.js, então o servidor Express não funciona lá. Para visualizar o projeto é necessário rodar localmente com `npm start` ou hospedar o servidor em uma plataforma que suporte Node.js como Railway ou Render.
