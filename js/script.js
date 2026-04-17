const DADOS = {

  /* Apresentação  */
  nome:   "Altier Romão Cruz",
  titulo: "Estudante de Desenvolvimento de Software Multiplataforma",
  bio:    `Estudante apaixonado por tecnologia e desenvolvimento web, cursando Técnico em
           Informática. Tenho experiência prática com HTML, CSS, JavaScript e MySQL.
           Gosto de resolver problemas com código limpo e de aprender continuamente
           novas ferramentas. Busco minha primeira oportunidade profissional na área de TI.`,

  contatos: [
    { icone: "bi-envelope-fill",  texto: "altier.dev@gmail.com",  href: "mailto:altier.dev@gmail.com  " },
    { icone: "bi-whatsapp",       texto: "Meu Whatsapp",     href: "https://wa.me/5512988126052" }
  ],

  /* Formação acadêmica */
  formacao: [

    {
      titulo:  "Desenvolvimento de Software Multiplataforma",
      org:     "Fatec Prof. Jessen Vidal",
      periodo: "2025 – Atualmente",
      desc:    "Programação web, banco de dados, redes de computadores e lógica de programação."
    },

    {
      titulo:  "Técnico em Redes de Computadores",
      org:     "Escola SENAI Santos Dumont",
      periodo: "2020 – 2021",
      desc:    "Programação web, banco de dados, redes de computadores e lógica de programação."
    },
    {
      titulo:  "Ensino Médio",
      org:     "E.E Lourdes Maria de Camargo",
      periodo: "2017 – 2019",
      desc:    ""
    }
  ],

  /* Cursos */
  cursos: [
    { nome: "Fundamentos de Programação com Lingagem em C#",          categoria: "Profissionalizante",      carga: "40h",  ano: "2022" },
  ],

  /*  Projetos */
  projetos: [
    {
      nome:       "One Piece Bio",
      emoji:      "🏴‍☠️",
      categoria:  "Web",
      desc:       "Projeto de Bootcamp onde apresenta os principais personagens da Série One piece com botões que trazem uma pequena descrição de cada um",
      tecnologias:["HTML", "CSS", "JavaScript"],
      links: [
        { icone: "bi-github", texto: "GitHub", url: "https://github.com/T13rz/Projeto-OnePiece" },
        { icone: "bi-box-arrow-up-right", texto: "Demo",   url: "https://t13rz.github.io/Projeto-OnePiece/" }
      ]
    },
    {
      nome:       "JDM Motors",
      emoji:      "🚗",
      categoria:  "Web",
      desc:       "Pagina Web estática",
      tecnologias:["HTML", "CSS","Bootstrap5" ],
      links: [
        { icone: "bi-github",          texto: "GitHub", url: "https://github.com/t13rz/ds2" },
        { icone: "bi-box-arrow-up-right", texto: "Demo",   url: "https://ds2-one.vercel.app/" },
      ]
    },
    {
      nome:       "API Codewave",
      emoji:      "📊",
      categoria:  "Projeto Academico",
      desc: "Projeto desenvolvido durante o 1º Semestre do curso onde foi realizado um levantamento de dados do Censo na cidade de São José dos campos onde na Filtragem de dados com a biblioteca Pandas",
      tecnologias:["HTML", "CSS", "Python", "Pandas", "Plotly", "Flask", "Mysql"],
      links: [
        { icone: "bi-github", texto: "GitHub", url: "https://github.com/guilhermefpo/CodeWave-1DSM-API#" }
      ]
    },
    {
      nome:       "Janosys SIGNA [EM DESENVOLVIMENTO]",
      emoji:      "📝",
      categoria:  "Projeto Academico",
      desc:       "Sistema de Gerenciamento ",
      tecnologias:["HTML", "CSS", "JavaScript", "Mysql"],
      links: [
        { icone: "bi-github", texto: "GitHub", url: "#" }
      ]
    }
  ],

  //Competências técnicas
  skillsTecnicas: [
    { nome: "HTML5",       icone: "bi-filetype-html" },
    { nome: "CSS3",        icone: "bi-filetype-css"  },
    { nome: "JavaScript",  icone: "bi-filetype-js"   },
    { nome: "Python",      icone: "bi-filetype-py"   },
    { nome: "MySQL",       icone: "bi-database"      },
    { nome:"Typescript",   icone: "bi-typescript"},
    { nome: "Git",         icone: "bi-git"           },
    { nome: "Docker",      icone: "bi-boxes"         },
    { nome: "React",       icone: "bi-box"           }
  ],

  //Soft skills 
  skillsSoft: [
    { nome: "Comunicação",        icone: "bi-chat-dots"       },
    { nome: "Trabalho em equipe", icone: "bi-people"         },
    { nome: "Organização",        icone: "bi-kanban"          },
    { nome: "Proatividade",       icone: "bi-lightning-charge"},
    { nome: "Aprendizado rápido", icone: "bi-book"            },
    { nome: "Criatividade",       icone: "bi-lightbulb"       },
    { nome: "Resolução de problemas", icone: "bi-puzzle"     },
    { nome: "Responsabilidade",  icone: "bi-shield-check"    }
  ],

    experiencia: [
    {
      cargo:   "Operador de Pós-Vendas",
      empresa: "Construdecor S/A",
      periodo: "Fev 2024 – Dez 2024",
      desc:    "Suporte ao cliente no pós-venda, acompanhamento de pedidos, resolução de demandas e garantia da satisfação do cliente."
    },

    {
      cargo:   "Aprendiz Vendas",
      empresa: "Construdecor S/A",
      periodo: "Mar 2022 – Dez 2024",
      desc:    "Suporte ao cliente no pós-venda, acompanhamento de pedidos, resolução de demandas e garantia da satisfação do cliente."
    }
  ],

  //Links profissionais
  links: [
    { plataforma: "LinkedIn", handle: "Altier Romão",   icone: "bi-linkedin",  url: "https://linkedin.com/in/tierz" },
    { plataforma: "GitHub",   handle: "@T13rz",     icone: "bi-github",    url: "https://github.com/T13rz"    } ]
};

function obterSaudacao() {
  const hora = new Date().getHours();

  if (hora >= 5 && hora < 12) {
    return "☀️ Bom dia!";
  } else if (hora >= 12 && hora < 18) {
    return "🌤️ Boa tarde!";
  } else {
    return "🌙 Boa noite!";
  }
}



// Renderizadores

function renderApresentacao() {
  // Preenche dados simples
  document.getElementById("hero-nome").textContent      = DADOS.nome;
  document.getElementById("hero-titulo").textContent    = DADOS.titulo;
  document.getElementById("hero-bio").textContent       = DADOS.bio;
  document.getElementById("nav-nome").textContent       = DADOS.nome.split(" ")[0].toLowerCase();
  document.getElementById("footer-nome").textContent    = DADOS.nome;
  document.getElementById("footer-ano").textContent     = new Date().getFullYear();
  document.title = "Portfólio | " + DADOS.nome;

  document.getElementById("saudacao").textContent = obterSaudacao();

  const contEl = document.getElementById("hero-contatos");
  contEl.innerHTML = "";
  for (let i = 0; i < DADOS.contatos.length; i++) {
    const c = DADOS.contatos[i];
    const a = document.createElement("a");
    a.href      = c.href;
    a.className = "hero-contato-item";
    a.target    = "_blank";
    a.rel       = "noopener";
    a.innerHTML = `<i class="bi ${c.icone}"></i>${c.texto}`;
    contEl.appendChild(a);
  }
}


function renderFormacao() {
  const lista = document.getElementById("timeline-formacao");
  lista.innerHTML = "";

  for (let i = 0; i < DADOS.formacao.length; i++) {
    const f  = DADOS.formacao[i];
    const li = document.createElement("div");
    li.className = "timeline-item";
    li.style.animationDelay = (i * 0.1) + "s";

    li.innerHTML = `
      <div class="timeline-card">
        <p class="timeline-period">
          <i class="bi bi-calendar3"></i>${f.periodo}
        </p>
        <h3 class="timeline-title">${f.titulo}</h3>
        <p class="timeline-org">
          <i class="bi bi-building"></i>${f.org}
        </p>
        ${f.desc ? `<p class="timeline-desc">${f.desc}</p>` : ""}
      </div>`;

    lista.appendChild(li);
  }
}



function renderCursos(filtro) {
  filtro = filtro || "todos";

  const grid = document.getElementById("cursos-grid");
  grid.innerHTML = "";

  for (let i = 0; i < DADOS.cursos.length; i++) {
    const c = DADOS.cursos[i];

    if (filtro !== "todos" && c.categoria !== filtro) {
      continue; 
    }

    const card = document.createElement("div");
    card.className = "curso-card";
    card.style.animationDelay = (i * 0.06) + "s";

    card.innerHTML = `
      <span class="curso-categoria">${c.categoria}</span>
      <p class="curso-nome">${c.nome}</p>
      <div class="curso-meta">
        ${c.carga ? `<span><i class="bi bi-clock"></i>${c.carga}</span>` : ""}
        ${c.ano   ? `<span><i class="bi bi-calendar-check"></i>${c.ano}</span>` : ""}
      </div>`;

    grid.appendChild(card);
  }
}


function montarFiltrosCursos() {
  const bar = document.getElementById("filtro-cursos");

  // Coleta categorias únicas com for
  const categorias = [];
  for (let i = 0; i < DADOS.cursos.length; i++) {
    if (!categorias.includes(DADOS.cursos[i].categoria)) {
      categorias.push(DADOS.cursos[i].categoria);
    }
  }

  // Cria um botão para cada categoria
  for (let i = 0; i < categorias.length; i++) {
    const btn = document.createElement("button");
    btn.className    = "filter-btn";
    btn.dataset.filter = categorias[i];
    btn.textContent  = categorias[i];
    bar.appendChild(btn);
  }

  // Evento nos botões de filtro
  bar.addEventListener("click", function (e) {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;

    bar.querySelectorAll(".filter-btn").forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");

    renderCursos(btn.dataset.filter);
  });
}


//FUNÇÕES


function renderProjetos(lista) {
  const grid  = document.getElementById("projetos-grid");
  const vazio = document.getElementById("projetos-vazio");

  grid.innerHTML = "";

  if (lista.length === 0) {
    vazio.style.display = "flex";
    return;
  }

  vazio.style.display = "none";

  for (let i = 0; i < lista.length; i++) {
    const p    = lista[i];
    const card = document.createElement("div");
    card.className = "projeto-card";
    card.style.animationDelay = (i * 0.07) + "s";

    // Monta as tags de tecnologia
    let tagsHTML = "";
    for (let j = 0; j < p.tecnologias.length; j++) {
      tagsHTML += `<span class="projeto-tag">${p.tecnologias[j]}</span>`;
    }

    let linksHTML = "";
    for (let k = 0; k < p.links.length; k++) {
      const l = p.links[k];
      linksHTML += `
        <a href="${l.url}" class="projeto-link" target="_blank" rel="noopener">
          <i class="bi ${l.icone}"></i>${l.texto}
        </a>`;
    }

    card.innerHTML = `
      <div class="projeto-thumb">${p.emoji || "💻"}</div>
      <div class="projeto-body">
        <span class="projeto-categoria">${p.categoria}</span>
        <h3 class="projeto-nome">${p.nome}</h3>
        <p class="projeto-desc">${p.desc}</p>
        <div class="projeto-tags">${tagsHTML}</div>
        ${linksHTML ? `<div class="projeto-links">${linksHTML}</div>` : ""}
      </div>`;

    grid.appendChild(card);
  }
}

function filtrarProjetos() {
  const termoBusca  = document.getElementById("busca-projetos").value.toLowerCase().trim();
  const filtroAtivo = document.querySelector("#filtro-projetos .filter-btn.active").dataset.filter;

  const resultado = [];

  for (let i = 0; i < DADOS.projetos.length; i++) {
    const p = DADOS.projetos[i];


    const passaCategoria = (filtroAtivo === "todos" || p.categoria === filtroAtivo);

    const passaBusca =
      termoBusca === "" ||
      p.nome.toLowerCase().includes(termoBusca)  ||
      p.desc.toLowerCase().includes(termoBusca)  ||
      p.categoria.toLowerCase().includes(termoBusca);

    if (passaCategoria && passaBusca) {
      resultado.push(p);
    }
  }

  renderProjetos(resultado);
}


function montarFiltrosProjetos() {
  const bar = document.getElementById("filtro-projetos");

  // Coleta categorias únicas
  const cats = [];
  for (let i = 0; i < DADOS.projetos.length; i++) {
    if (!cats.includes(DADOS.projetos[i].categoria)) {
      cats.push(DADOS.projetos[i].categoria);
    }
  }

  for (let i = 0; i < cats.length; i++) {
    const btn = document.createElement("button");
    btn.className      = "filter-btn";
    btn.dataset.filter = cats[i];
    btn.textContent    = cats[i];
    bar.appendChild(btn);
  }

  // Eventos filtro
  bar.addEventListener("click", function (e) {
    const btn = e.target.closest(".filter-btn");
    if (!btn) return;
    bar.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filtrarProjetos();
  });

  // Evento busca
  document.getElementById("busca-projetos").addEventListener("input", filtrarProjetos);
}



function renderCompetencias() {
  renderSkills("skills-tecnicas", DADOS.skillsTecnicas);
  renderSkills("skills-soft",     DADOS.skillsSoft);
}

function renderSkills(elId, habilidades) {
  const container = document.getElementById(elId);
  container.innerHTML = "";

  for (let i = 0; i < habilidades.length; i++) {
    const s    = habilidades[i];
    const card = document.createElement("div");
    card.className = "skill-card";
    card.style.animationDelay = (i * 0.05) + "s";
    card.innerHTML = `<i class="bi ${s.icone}"></i>${s.nome}`;
    container.appendChild(card);
  }
}

function renderExperiencia() {
  const lista = document.getElementById("timeline-experiencia");
  lista.innerHTML = "";

  if (DADOS.experiencia.length === 0) {
    lista.innerHTML = `
      <p style="font-family:var(--font-mono);font-size:.82rem;color:var(--text-3);padding:1rem 0">
        <i class="bi bi-clock-history"></i> Nenhuma experiência cadastrada ainda.
      </p>`;
    return;
  }

  for (let i = 0; i < DADOS.experiencia.length; i++) {
    const e  = DADOS.experiencia[i];
    const li = document.createElement("div");
    li.className = "timeline-item";
    li.style.animationDelay = (i * 0.1) + "s";

    li.innerHTML = `
      <div class="timeline-card">
        <p class="timeline-period">
          <i class="bi bi-calendar3"></i>${e.periodo}
        </p>
        <h3 class="timeline-title">${e.cargo}</h3>
        <p class="timeline-org">
          <i class="bi bi-building"></i>${e.empresa}
        </p>
        ${e.desc ? `<p class="timeline-desc">${e.desc}</p>` : ""}
      </div>`;

    lista.appendChild(li);
  }
}

function renderLinks() {
  const grid = document.getElementById("links-grid");
  grid.innerHTML = "";

  for (let i = 0; i < DADOS.links.length; i++) {
    const l    = DADOS.links[i];
    const card = document.createElement("a");
    card.href      = l.url;
    card.target    = "_blank";
    card.rel       = "noopener";
    card.className = "link-card";
    card.style.animationDelay = (i * 0.08) + "s";

    card.innerHTML = `
      <div class="link-icon"><i class="bi ${l.icone}"></i></div>
      <div class="link-info">
        <p class="link-plataforma">${l.plataforma}</p>
        <p class="link-handle">${l.handle}</p>
      </div>
      <p class="link-arrow"><i class="bi bi-arrow-up-right"></i> Acessar</p>`;

    grid.appendChild(card);
  }
}


// NAVBAR

function iniciarNavbar() {
  const navbar     = document.getElementById("navbar");
  const toggle     = document.getElementById("navToggle");
  const menu       = document.getElementById("navMenu");
  const navLinks   = document.querySelectorAll(".nav-link[data-section]");

  //Adiciona classe para mudar aparência
  window.addEventListener("scroll", function () {
    // ① if/else — muda estilo conforme posição
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });

  // Hambúrguer
  toggle.addEventListener("click", function () {
    const aberto = menu.classList.toggle("open");
    toggle.classList.toggle("open", aberto);
    toggle.setAttribute("aria-expanded", aberto);
  });

  // Fecha menu ao clicar num link
  menu.addEventListener("click", function (e) {
    if (e.target.classList.contains("nav-link")) {
      menu.classList.remove("open");
      toggle.classList.remove("open");
    }
  });

  // Destaca link ativo conforme seção visível (IntersectionObserver)
  const secoes = document.querySelectorAll(".section, .hero-section");

  const observer = new IntersectionObserver(function (entries) {
    for (let i = 0; i < entries.length; i++) {
      // ① if — seção visível → ativa link correspondente
      if (entries[i].isIntersecting) {
        const id = entries[i].target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle("active", link.dataset.section === id);
        });
      }
    }
  }, { rootMargin: "-40% 0px -55% 0px" });

  secoes.forEach(function (s) { observer.observe(s); });
}


// INICIALIZAÇÃO 

document.addEventListener("DOMContentLoaded", function () {
  renderApresentacao();
  renderFormacao();
  renderCompetencias();
  renderExperiencia();  
  renderCursos("todos");
  montarFiltrosProjetos();
  renderProjetos(DADOS.projetos);
  renderLinks();
  iniciarNavbar();
});