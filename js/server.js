const express = require('express')
const cors    = require('cors')
const path    = require('path')

const app  = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"..")))

let db = {
  apresentacao: {
    nome:   'Altier Romão Cruz',
    titulo: 'Estudante de Desenvolvimento de Software Multiplataforma',
    bio:    'Estudante apaixonado por tecnologia e desenvolvimento web, cursando Técnico em Informática. Tenho experiência prática com HTML, CSS, JavaScript e MySQL. Gosto de resolver problemas com código limpo e de aprender continuamente novas ferramentas. Busco minha primeira oportunidade profissional na área de TI.',
    contatos: [
      { id: 1, icone: 'bi-envelope-fill', texto: 'altier.dev@gmail.com', href: 'mailto:altier.dev@gmail.com' },
      { id: 2, icone: 'bi-whatsapp',      texto: 'Meu Whatsapp',         href: 'https://wa.me/5512988126052' }
    ]
  },

  formacao: [
    { id: 1, titulo: 'Desenvolvimento de Software Multiplataforma', org: 'Fatec Prof. Jessen Vidal',        periodo: '2025 – Atualmente', desc: 'Programação web, banco de dados, redes e lógica de programação.' },
    { id: 2, titulo: 'Técnico em Redes de Computadores',           org: 'Escola SENAI Santos Dumont',      periodo: '2020 – 2021',       desc: 'Programação web, banco de dados, redes e lógica de programação.' },
    { id: 3, titulo: 'Ensino Médio',                                org: 'E.E Lourdes Maria de Camargo',    periodo: '2017 – 2019',       desc: '' }
  ],

  cursos: [
    { id: 1, nome: 'Escola de Inovadores',                        categoria: 'Profissionalizante', carga: '40h',  ano: '2025' },
    { id: 2, nome: 'Introdução Ao SCRUM',                         categoria: 'Profissionalizante', carga: '6h',   ano: '2025' },
    { id: 3, nome: 'Fundamentos em Programação com Linguagem C#', categoria: 'Profissionalizante', carga: '120h', ano: '2022' }
  ],

  projetos: [
    {
      id: 1, nome: 'One Piece Bio', imagem: './img/projetos/Pj_OP.png', categoria: 'Web',
      desc: 'Projeto de Bootcamp apresentando os principais personagens da Série One Piece.',
      tecnologias: ['HTML', 'CSS', 'JavaScript'],
      links: [
        { icone: 'bi-github',             texto: 'GitHub', url: 'https://github.com/T13rz/Projeto-OnePiece' },
        { icone: 'bi-box-arrow-up-right', texto: 'Demo',   url: 'https://t13rz.github.io/Projeto-OnePiece/' }
      ]
    },
    {
      id: 2, nome: 'JDM Motors', imagem: './img/projetos/jdm_M.png', categoria: 'Web',
      desc: 'Página Web estática.',
      tecnologias: ['HTML', 'CSS', 'Bootstrap5'],
      links: [
        { icone: 'bi-github',             texto: 'GitHub', url: 'https://github.com/t13rz/ds2' },
        { icone: 'bi-box-arrow-up-right', texto: 'Demo',   url: 'https://ds2-one.vercel.app/'  }
      ]
    },
    {
      id: 3, nome: 'API Codewave', imagem: './img/projetos/api_1S.png', categoria: 'Projeto Academico',
      desc: 'Levantamento de dados do Censo em São José dos Campos com filtragem usando Pandas.',
      tecnologias: ['HTML', 'CSS', 'Python', 'Pandas', 'Plotly', 'Flask', 'MySQL'],
      links: [
        { icone: 'bi-github', texto: 'GitHub', url: 'https://github.com/guilhermefpo/CodeWave-1DSM-API' }
      ]
    },
    {
      id: 4, nome: 'JanoSys SIGNA [Em Desenvolvimento]', imagem: './img/projetos/Signa.png', categoria: 'Projeto Academico',
      desc: 'Sistema de Gerenciamento de normas e notas com níveis de acesso.',
      tecnologias: ['HTML', 'CSS', 'TypeScript', 'React'],
      links: [
        { icone: 'bi-github', texto: 'GitHub', url: 'https://github.com/T13rz/Janosys-Project-Akaer' }
      ]
    }
  ],

  experiencia: [
    { id: 1, cargo: 'Operador de Pós-Vendas', empresa: 'Construdecor S/A', periodo: 'Fev 2024 – Dez 2024', desc: 'Suporte ao cliente no pós-venda, acompanhamento de pedidos e resolução de demandas.' },
    { id: 2, cargo: 'Aprendiz Vendas',         empresa: 'Construdecor S/A', periodo: 'Mar 2022 – Dez 2024', desc: 'Suporte ao cliente no pós-venda, acompanhamento de pedidos e resolução de demandas.' }
  ],

  competencias: {
    tecnicas: [
      { id: 1,  nome: 'HTML5',      icone: 'bi-filetype-html' },
      { id: 2,  nome: 'CSS3',       icone: 'bi-filetype-css'  },
      { id: 3,  nome: 'JavaScript', icone: 'bi-filetype-js'   },
      { id: 4,  nome: 'Python',     icone: 'bi-filetype-py'   },
      { id: 5,  nome: 'MySQL',      icone: 'bi-database'      },
      { id: 6,  nome: 'TypeScript', icone: 'bi-filetype-tsx'  },
      { id: 7,  nome: 'Git',        icone: 'bi-git'           },
      { id: 8,  nome: 'Docker',     icone: 'bi-boxes'         },
      { id: 9,  nome: 'React',      icone: 'bi-box'           },
      { id: 10, nome: 'AWS',        icone: 'bi-amazon'        }
    ],
    soft: [
      { id: 1, nome: 'Comunicação',            icone: 'bi-chat-dots'        },
      { id: 2, nome: 'Trabalho em equipe',      icone: 'bi-people'           },
      { id: 3, nome: 'Organização',             icone: 'bi-kanban'           },
      { id: 4, nome: 'Proatividade',            icone: 'bi-lightning-charge' },
      { id: 5, nome: 'Aprendizado rápido',      icone: 'bi-book'             },
      { id: 6, nome: 'Criatividade',            icone: 'bi-lightbulb'        },
      { id: 7, nome: 'Resolução de problemas',  icone: 'bi-puzzle'           },
      { id: 8, nome: 'Responsabilidade',        icone: 'bi-shield-check'     }
    ]
  },

  links: [
    { id: 1, plataforma: 'LinkedIn', handle: 'Altier Romão', icone: 'bi-linkedin', url: 'https://linkedin.com/in/tierz' },
    { id: 2, plataforma: 'GitHub',   handle: '@T13rz',       icone: 'bi-github',   url: 'https://github.com/T13rz'     }
  ]
}

// helper — gera o próximo id de um array
function nextId(arr) {
  if (arr.length === 0) return 1
  return Math.max(...arr.map(i => i.id)) + 1
}


// APRESENTAÇÃO

app.get('/P2S/apresentacao', (req, res) => {
  res.json(db.apresentacao)
})

app.put('/P2S/apresentacao', (req, res) => {
  db.apresentacao = { ...db.apresentacao, ...req.body }
  res.json(db.apresentacao)
})


// FORMAÇÃO


app.get('/P2S/formacao', (req, res) => {
  res.json(db.formacao)
})

app.post('/P2S/formacao', (req, res) => {
  const novo = { id: nextId(db.formacao), ...req.body }
  db.formacao.push(novo)
  res.status(201).json(novo)
})

app.put('/P2S/formacao/:id', (req, res) => {
  const id  = Number(req.params.id)
  const idx = db.formacao.findIndex(f => f.id === id)
  if (idx === -1) return res.status(404).json({ erro: 'Não encontrado' })
  db.formacao[idx] = { ...db.formacao[idx], ...req.body, id }
  res.json(db.formacao[idx])
})

app.delete('/P2S/formacao/:id', (req, res) => {
  const id  = Number(req.params.id)
  const idx = db.formacao.findIndex(f => f.id === id)
  if (idx === -1) return res.status(404).json({ erro: 'Não encontrado' })
  db.formacao.splice(idx, 1)
  res.json({ mensagem: 'Removido com sucesso' })
})


// CURSOS

app.get('/P2S/cursos', (req, res) => {
  res.json(db.cursos)
})

app.post('/P2S/cursos', (req, res) => {
  const novo = { id: nextId(db.cursos), ...req.body }
  db.cursos.push(novo)
  res.status(201).json(novo)
})

app.put('/P2S/cursos/:id', (req, res) => {
  const id  = Number(req.params.id)
  const idx = db.cursos.findIndex(c => c.id === id)
  if (idx === -1) return res.status(404).json({ erro: 'Não encontrado' })
  db.cursos[idx] = { ...db.cursos[idx], ...req.body, id }
  res.json(db.cursos[idx])
})

app.delete('/P2S/cursos/:id', (req, res) => {
  const id  = Number(req.params.id)
  const idx = db.cursos.findIndex(c => c.id === id)
  if (idx === -1) return res.status(404).json({ erro: 'Não encontrado' })
  db.cursos.splice(idx, 1)
  res.json({ mensagem: 'Removido com sucesso' })
})

// PROJETOS

app.get('/P2S/projetos', (req, res) => {
  res.json(db.projetos)
})

app.post('/P2S/projetos', (req, res) => {
  const novo = { id: nextId(db.projetos), ...req.body }
  db.projetos.push(novo)
  res.status(201).json(novo)
})

app.put('/P2S/projetos/:id', (req, res) => {
  const id  = Number(req.params.id)
  const idx = db.projetos.findIndex(p => p.id === id)
  if (idx === -1) return res.status(404).json({ erro: 'Não encontrado' })
  db.projetos[idx] = { ...db.projetos[idx], ...req.body, id }
  res.json(db.projetos[idx])
})

app.delete('/P2S/projetos/:id', (req, res) => {
  const id  = Number(req.params.id)
  const idx = db.projetos.findIndex(p => p.id === id)
  if (idx === -1) return res.status(404).json({ erro: 'Não encontrado' })
  db.projetos.splice(idx, 1)
  res.json({ mensagem: 'Removido com sucesso' })
})


// EXPERIÊNCIA

app.get('/P2S/experiencia', (req, res) => {
  res.json(db.experiencia)
})

app.post('/P2S/experiencia', (req, res) => {
  const novo = { id: nextId(db.experiencia), ...req.body }
  db.experiencia.push(novo)
  res.status(201).json(novo)
})

app.put('/P2S/experiencia/:id', (req, res) => {
  const id  = Number(req.params.id)
  const idx = db.experiencia.findIndex(e => e.id === id)
  if (idx === -1) return res.status(404).json({ erro: 'Não encontrado' })
  db.experiencia[idx] = { ...db.experiencia[idx], ...req.body, id }
  res.json(db.experiencia[idx])
})

app.delete('/P2S/experiencia/:id', (req, res) => {
  const id  = Number(req.params.id)
  const idx = db.experiencia.findIndex(e => e.id === id)
  if (idx === -1) return res.status(404).json({ erro: 'Não encontrado' })
  db.experiencia.splice(idx, 1)
  res.json({ mensagem: 'Removido com sucesso' })
})



// COMPETÊNCIAS-

app.get('/P2S/competencias', (req, res) => {
  res.json(db.competencias)
})

app.put('/P2S/competencias', (req, res) => {
  db.competencias = { ...db.competencias, ...req.body }
  res.json(db.competencias)
})

// LINKS

app.get('/P2S/links', (req, res) => {
  res.json(db.links)
})

app.post('/P2S/links', (req, res) => {
  const novo = { id: nextId(db.links), ...req.body }
  db.links.push(novo)
  res.status(201).json(novo)
})

app.put('/P2S/links/:id', (req, res) => {
  const id  = Number(req.params.id)
  const idx = db.links.findIndex(l => l.id === id)
  if (idx === -1) return res.status(404).json({ erro: 'Não encontrado' })
  db.links[idx] = { ...db.links[idx], ...req.body, id }
  res.json(db.links[idx])
})

app.delete('/P2S/links/:id', (req, res) => {
  const id  = Number(req.params.id)
  const idx = db.links.findIndex(l => l.id === id)
  if (idx === -1) return res.status(404).json({ erro: 'Não encontrado' })
  db.links.splice(idx, 1)
  res.json({ mensagem: 'Removido com sucesso' })
})


// -------------------------------------------------------
// inicia o servidor
// -------------------------------------------------------

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
