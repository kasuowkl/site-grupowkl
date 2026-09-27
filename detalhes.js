// Modal de detalhes dos cartões.
// Cada página define window.DETALHES = { id: { titulo, icone, status, statusClasse, resumo, secoes, stack, links } }
// e marca o cartão com data-detalhe="id". Clicar (ou Enter/Espaço) no cartão abre o modal.
// Só leitura: fecha pelo X, pelo Esc e pelo fundo. O rodapé leva ao WhatsApp já com o assunto.
(function () {
  const WHATSAPP = "5592984629701";
  const dados = window.DETALHES || {};

  const dialogo = document.createElement("dialog");
  dialogo.className = "detalhe";
  dialogo.setAttribute("aria-labelledby", "detalhe-titulo");
  dialogo.innerHTML =
    '<div class="detalhe-topo"><div><span class="status" hidden></span><h2 id="detalhe-titulo"></h2></div>' +
    '<button type="button" class="detalhe-fechar" aria-label="Fechar">&#10005;</button></div>' +
    '<div class="detalhe-corpo"></div>' +
    '<div class="detalhe-rodape"></div>';
  document.body.appendChild(dialogo);

  const elStatus = dialogo.querySelector(".status");
  const elTitulo = dialogo.querySelector("#detalhe-titulo");
  const elCorpo = dialogo.querySelector(".detalhe-corpo");
  const elRodape = dialogo.querySelector(".detalhe-rodape");

  function el(tag, classe, texto) {
    const e = document.createElement(tag);
    if (classe) e.className = classe;
    if (texto != null) e.textContent = texto;
    return e;
  }

  function botao(rotulo, url, secundario) {
    const a = el("a", secundario ? "btn secondary" : "btn", rotulo);
    a.href = url;
    if (/^https?:/.test(url)) { // externo abre em outra aba; página do próprio site, na mesma
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    return a;
  }

  function abrir(id, origem) {
    const d = dados[id];
    if (!d) return;
    elStatus.hidden = !d.status;
    elStatus.className = "status " + (d.statusClasse || "");
    elStatus.textContent = d.status || "";
    elTitulo.textContent = (d.icone ? d.icone + " " : "") + d.titulo;

    elCorpo.replaceChildren();
    if (d.resumo) elCorpo.appendChild(el("p", "detalhe-resumo", d.resumo));
    for (const s of d.secoes || []) {
      const bloco = el("div", "detalhe-secao");
      bloco.appendChild(el("h3", null, s.titulo));
      if (s.texto) bloco.appendChild(el("p", null, s.texto));
      if (s.itens) {
        const ul = el("ul");
        for (const i of s.itens) ul.appendChild(el("li", null, i));
        bloco.appendChild(ul);
      }
      elCorpo.appendChild(bloco);
    }
    if (d.stack && d.stack.length) {
      const pilha = el("div", "detalhe-stack");
      for (const t of d.stack) pilha.appendChild(el("span", "tag blue", t));
      elCorpo.appendChild(pilha);
    }

    elRodape.replaceChildren();
    for (const l of d.links || []) elRodape.appendChild(botao(l.rotulo, l.url, true));
    const msg = "Olá! Quero saber mais sobre: " + d.titulo;
    elRodape.appendChild(botao("💬 Falar sobre isso", "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg)));

    dialogo._origem = origem;
    dialogo.showModal();
    elCorpo.scrollTop = 0;
  }

  dialogo.querySelector(".detalhe-fechar").addEventListener("click", () => dialogo.close());
  // Clique no fundo (fora da caixa) fecha — o modal é só leitura, não há o que perder.
  dialogo.addEventListener("click", (e) => { if (e.target === dialogo) dialogo.close(); });
  dialogo.addEventListener("close", () => { if (dialogo._origem) dialogo._origem.focus(); });

  document.querySelectorAll(".card[data-detalhe]").forEach((card) => {
    if (!dados[card.dataset.detalhe]) return;
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-haspopup", "dialog");
    card.appendChild(el("span", "card-mais", "Ver detalhes →"));
    card.addEventListener("click", (e) => {
      if (e.target.closest("a")) return; // link próprio do cartão continua funcionando
      abrir(card.dataset.detalhe, card);
    });
    card.addEventListener("keydown", (e) => {
      if (e.target !== card) return;
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); abrir(card.dataset.detalhe, card); }
    });
  });
})();
