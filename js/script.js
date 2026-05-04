const API = 'http://localhost:3000/P2S'

async function carregarTudo() {
  const [apresentacao, formacao, cursos, projetos, experiencia, competencias, links] = await Promise.all([
    fetch(`${API}/apresentacao`).then(r => r.json()),
    fetch(`${API}/formacao`).then(r => r.json()),
    fetch(`${API}/cursos`).then(r => r.json()),
    fetch(`${API}/projetos`).then(r => r.json()),
    fetch(`${API}/experiencia`).then(r => r.json()),
    fetch(`${API}/competencias`).then(r => r.json()),
    fetch(`${API}/links`).then(r => r.json())
  ])

  renderApresentacao(apresentacao)
  renderFormacao(formacao)
  renderExperiencia(experiencia)
  montarFiltrosCursos(cursos)
  renderCursos(cursos, 'todos')
  montarFiltrosProjetos(projetos)
  renderProjetos(projetos)
  renderCompetencias(competencias)
  renderLinks(links)
  iniciarNavbar()
}


function obterSaudacao() {
  const hora = new Date().getHours()
  if (hora >= 5 && hora < 12) return '☀️ Bom dia!'
  if (hora >= 12 && hora < 18) return '🌤️ Boa tarde!'
  return '🌙 Boa noite!'
}


function renderApresentacao(dados) {
  document.getElementById('hero-nome').textContent   = dados.nome
  document.getElementById('hero-titulo').textContent = dados.titulo
  document.getElementById('hero-bio').textContent    = dados.bio
  document.getElementById('nav-nome').textContent    = dados.nome.split(' ')[0].toLowerCase()
  document.getElementById('footer-nome').textContent = dados.nome
  document.getElementById('footer-ano').textContent  = new Date().getFullYear()
  document.title = 'Portfólio | ' + dados.nome

  document.getElementById('saudacao').textContent = obterSaudacao()

  const contEl = document.getElementById('hero-contatos')
  contEl.innerHTML = ''
  for (let i = 0; i < dados.contatos.length; i++) {
    const c = dados.contatos[i]
    const a = document.createElement('a')
    a.href      = c.href
    a.className = 'hero-contato-item'
    a.target    = '_blank'
    a.rel       = 'noopener'
    a.innerHTML = `<i class="bi ${c.icone}"></i>${c.texto}`
    contEl.appendChild(a)
  }
}


function renderFormacao(lista) {
  const el = document.getElementById('timeline-formacao')
  el.innerHTML = ''
  for (let i = 0; i < lista.length; i++) {
    const f   = lista[i]
    const div = document.createElement('div')
    div.className = 'timeline-item'
    div.style.animationDelay = (i * 0.1) + 's'
    div.innerHTML = `
      <div class="timeline-card">
        <p class="timeline-period"><i class="bi bi-calendar3"></i>${f.periodo}</p>
        <h3 class="timeline-title">${f.titulo}</h3>
        <p class="timeline-org"><i class="bi bi-building"></i>${f.org}</p>
        ${f.desc ? `<p class="timeline-desc">${f.desc}</p>` : ''}
      </div>`
    el.appendChild(div)
  }
}


function renderExperiencia(lista) {
  const el = document.getElementById('timeline-experiencia')
  el.innerHTML = ''

  if (lista.length === 0) {
    el.innerHTML = '<p style="font-family:var(--font-mono);font-size:.82rem;color:var(--text-3);padding:1rem 0">Nenhuma experiência cadastrada.</p>'
    return
  }

  for (let i = 0; i < lista.length; i++) {
    const e   = lista[i]
    const div = document.createElement('div')
    div.className = 'timeline-item'
    div.style.animationDelay = (i * 0.1) + 's'
    div.innerHTML = `
      <div class="timeline-card">
        <p class="timeline-period"><i class="bi bi-calendar3"></i>${e.periodo}</p>
        <h3 class="timeline-title">${e.cargo}</h3>
        <p class="timeline-org"><i class="bi bi-building"></i>${e.empresa}</p>
        ${e.desc ? `<p class="timeline-desc">${e.desc}</p>` : ''}
      </div>`
    el.appendChild(div)
  }
}


function montarFiltrosCursos(cursos) {
  const bar = document.getElementById('filtro-cursos')
  bar.innerHTML = '<button class="filter-btn active" data-filter="todos">Todos</button>'

  const cats = []
  for (let i = 0; i < cursos.length; i++) {
    if (!cats.includes(cursos[i].categoria)) cats.push(cursos[i].categoria)
  }
  for (let i = 0; i < cats.length; i++) {
    const btn = document.createElement('button')
    btn.className      = 'filter-btn'
    btn.dataset.filter = cats[i]
    btn.textContent    = cats[i]
    bar.appendChild(btn)
  }

  bar.addEventListener('click', function (e) {
    const btn = e.target.closest('.filter-btn')
    if (!btn) return
    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    fetch(`${API}/cursos`).then(r => r.json()).then(lista => renderCursos(lista, btn.dataset.filter))
  })
}


function renderCursos(lista, filtro) {
  filtro = filtro || 'todos'
  const grid = document.getElementById('cursos-grid')
  grid.innerHTML = ''

  for (let i = 0; i < lista.length; i++) {
    const c = lista[i]
    if (filtro !== 'todos' && c.categoria !== filtro) continue
    const card = document.createElement('div')
    card.className = 'curso-card'
    card.style.animationDelay = (i * 0.06) + 's'
    card.innerHTML = `
      <span class="curso-categoria">${c.categoria}</span>
      <p class="curso-nome">${c.nome}</p>
      <div class="curso-meta">
        ${c.carga ? `<span><i class="bi bi-clock"></i>${c.carga}</span>` : ''}
        ${c.ano   ? `<span><i class="bi bi-calendar-check"></i>${c.ano}</span>` : ''}
      </div>`
    grid.appendChild(card)
  }
}


function montarFiltrosProjetos(projetos) {
  const bar = document.getElementById('filtro-projetos')
  bar.innerHTML = '<button class="filter-btn active" data-filter="todos">Todos</button>'

  const cats = []
  for (let i = 0; i < projetos.length; i++) {
    if (!cats.includes(projetos[i].categoria)) cats.push(projetos[i].categoria)
  }
  for (let i = 0; i < cats.length; i++) {
    const btn = document.createElement('button')
    btn.className      = 'filter-btn'
    btn.dataset.filter = cats[i]
    btn.textContent    = cats[i]
    bar.appendChild(btn)
  }

  bar.addEventListener('click', function (e) {
    const btn = e.target.closest('.filter-btn')
    if (!btn) return
    bar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'))
    btn.classList.add('active')
    filtrarProjetos()
  })

  document.getElementById('busca-projetos').addEventListener('input', filtrarProjetos)
}


function filtrarProjetos() {
  const termo  = document.getElementById('busca-projetos').value.toLowerCase().trim()
  const filtro = document.querySelector('#filtro-projetos .filter-btn.active').dataset.filter

  fetch(`${API}/projetos`).then(r => r.json()).then(lista => {
    const resultado = []
    for (let i = 0; i < lista.length; i++) {
      const p = lista[i]
      const passaCategoria = filtro === 'todos' || p.categoria === filtro
      const passaBusca     = termo === '' || p.nome.toLowerCase().includes(termo) || p.desc.toLowerCase().includes(termo)
      if (passaCategoria && passaBusca) resultado.push(p)
    }
    renderProjetos(resultado)
  })
}


function renderProjetos(lista) {
  const grid  = document.getElementById('projetos-grid')
  const vazio = document.getElementById('projetos-vazio')
  grid.innerHTML = ''

  if (lista.length === 0) {
    vazio.style.display = 'flex'
    return
  }
  vazio.style.display = 'none'

  for (let i = 0; i < lista.length; i++) {
    const p    = lista[i]
    const card = document.createElement('div')
    card.className = 'projeto-card'
    card.style.animationDelay = (i * 0.07) + 's'

    let tagsHTML = ''
    for (let j = 0; j < p.tecnologias.length; j++) {
      tagsHTML += `<span class="projeto-tag">${p.tecnologias[j]}</span>`
    }

    let linksHTML = ''
    for (let k = 0; k < p.links.length; k++) {
      const l = p.links[k]
      linksHTML += `<a href="${l.url}" class="projeto-link" target="_blank" rel="noopener"><i class="bi ${l.icone}"></i>${l.texto}</a>`
    }

    card.innerHTML = `
      <div class="projeto-thumb">${p.imagem ? `<img src="${p.imagem}" alt="${p.nome}">` : (p.emoji || '💻')}</div>
      <div class="projeto-body">
        <span class="projeto-categoria">${p.categoria}</span>
        <h3 class="projeto-nome">${p.nome}</h3>
        <p class="projeto-desc">${p.desc}</p>
        <div class="projeto-tags">${tagsHTML}</div>
        ${linksHTML ? `<div class="projeto-links">${linksHTML}</div>` : ''}
      </div>`
    grid.appendChild(card)
  }
}


function renderCompetencias(dados) {
  renderSkills('skills-tecnicas', dados.tecnicas)
  renderSkills('skills-soft', dados.soft)
}

function renderSkills(elId, lista) {
  const container = document.getElementById(elId)
  container.innerHTML = ''
  for (let i = 0; i < lista.length; i++) {
    const s    = lista[i]
    const card = document.createElement('div')
    card.className = 'skill-card'
    card.style.animationDelay = (i * 0.05) + 's'
    card.innerHTML = `<i class="bi ${s.icone}"></i>${s.nome}`
    container.appendChild(card)
  }
}


function renderLinks(lista) {
  const grid = document.getElementById('links-grid')
  grid.innerHTML = ''
  for (let i = 0; i < lista.length; i++) {
    const l    = lista[i]
    const card = document.createElement('a')
    card.href      = l.url
    card.target    = '_blank'
    card.rel       = 'noopener'
    card.className = 'link-card'
    card.style.animationDelay = (i * 0.08) + 's'
    card.innerHTML = `
      <div class="link-icon"><i class="bi ${l.icone}"></i></div>
      <div class="link-info">
        <p class="link-plataforma">${l.plataforma}</p>
        <p class="link-handle">${l.handle}</p>
      </div>
      <p class="link-arrow"><i class="bi bi-arrow-up-right"></i> Acessar</p>`
    grid.appendChild(card)
  }
}


function iniciarNavbar() {
  const navbar   = document.getElementById('navbar')
  const toggle   = document.getElementById('navToggle')
  const menu     = document.getElementById('navMenu')
  const navLinks = document.querySelectorAll('.nav-link[data-section]')

  window.addEventListener('scroll', function () {
    if (window.scrollY > 40) navbar.classList.add('scrolled')
    else navbar.classList.remove('scrolled')
  }, { passive: true })

  toggle.addEventListener('click', function () {
    const aberto = menu.classList.toggle('open')
    toggle.classList.toggle('open', aberto)
    toggle.setAttribute('aria-expanded', aberto)
  })

  menu.addEventListener('click', function (e) {
    if (e.target.classList.contains('nav-link')) {
      menu.classList.remove('open')
      toggle.classList.remove('open')
    }
  })

  const secoes   = document.querySelectorAll('.section, .hero-section')
  const observer = new IntersectionObserver(function (entries) {
    for (let i = 0; i < entries.length; i++) {
      if (entries[i].isIntersecting) {
        const id = entries[i].target.id
        navLinks.forEach(link => link.classList.toggle('active', link.dataset.section === id))
      }
    }
  }, { rootMargin: '-40% 0px -55% 0px' })

  secoes.forEach(s => observer.observe(s))
}


document.addEventListener('DOMContentLoaded', carregarTudo)
