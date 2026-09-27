// Confere menu em 1 linha e os modais de detalhes do site-grupowkl (Chromium + WebKit).
const path = require('path');
const { chromium, webkit } = require(path.join(process.env.PW_DIR, 'node_modules', 'playwright'));
const SITE = process.env.SITE_DIR, SAIDA = process.env.SAIDA_DIR;
const url = (f) => 'file:///' + path.join(SITE, f).split(path.sep).join('/');
let falhas = 0;
const ok = (cond, msg) => { if (!cond) falhas++; console.log((cond ? 'OK   ' : 'FALHA') + ' ' + msg); };

(async () => {
  for (const [nome, motor] of [['chromium', chromium], ['webkit', webkit]]) {
    const nav = await motor.launch();

    // 1) Menu numa linha só (desktop): todos os itens do nav com o mesmo topo.
    for (const pagina of ['index.html', 'desenvolvimento.html']) {
      for (const largura of [1920, 1400, 1280, 1241, 1240, 1100, 981]) {
        const p = await nav.newPage({ viewport: { width: largura, height: 900 } });
        await p.goto(url(pagina));
        const r = await p.evaluate(() => {
          const tops = [...document.querySelectorAll('nav ul li')].map((li) => { const r = li.getBoundingClientRect(); return Math.round((r.top + r.bottom) / 20); });
          const sub = document.querySelector('.brand span');
          return { linhas: new Set(tops).size, subLinhas: Math.round(sub.getBoundingClientRect().height / parseFloat(getComputedStyle(sub).lineHeight || 16)) };
        });
        ok(r.linhas === 1, `${nome} ${pagina} ${largura}px menu em ${r.linhas} linha(s)`);
        await p.close();
      }
    }

    // 2) Modais da página Desenvolvimento.
    for (const largura of [1400, 390]) {
      const p = await nav.newPage({ viewport: { width: largura, height: 850 } });
      const erros = [];
      p.on('pageerror', (e) => erros.push(e.message));
      await p.goto(url('desenvolvimento.html'));
      await p.evaluate(() => document.querySelectorAll('.fade-up').forEach((el) => { el.style.animation = 'none'; el.style.opacity = 1; }));
      const ids = await p.$$eval('.card[data-detalhe]', (cs) => cs.map((c) => c.dataset.detalhe));
      ok(ids.length === 13, `${nome} ${largura}px 13 cartões com detalhe (achou ${ids.length})`);
      let abriram = 0;
      for (const id of ids) {
        const card = p.locator(`.card[data-detalhe="${id}"]`);
        await card.scrollIntoViewIfNeeded();
        await card.locator('p').first().click();
        const aberto = await p.evaluate(() => {
          const d = document.querySelector('dialog.detalhe');
          const r = d.getBoundingClientRect();
          return { open: d.open, titulo: d.querySelector('#detalhe-titulo').textContent, cabe: r.left >= 0 && r.right <= innerWidth, zap: d.querySelector('.detalhe-rodape a:last-child').href };
        });
        if (aberto.open && aberto.titulo && aberto.cabe && aberto.zap.includes('wa.me/5592984629701?text=')) abriram++;
        else console.log('   problema em', id, JSON.stringify(aberto));
        if (id === 'nalevada' && largura === 1400 && nome === 'chromium') await p.screenshot({ path: path.join(SAIDA, 'modal-1400.png') });
        if (id === 'plantas' && largura === 390 && nome === 'chromium') await p.screenshot({ path: path.join(SAIDA, 'modal-390.png') });
        await p.keyboard.press('Escape');
        ok(!(await p.evaluate(() => document.querySelector('dialog.detalhe').open)), `${nome} ${largura}px ${id}: Esc fecha`);
      }
      ok(abriram === 13, `${nome} ${largura}px ${abriram}/13 modais abriram com título, cabendo na tela e com WhatsApp`);

      // Fecha pelo X e pelo fundo; teclado abre; link do cartão não abre o modal.
      const c = p.locator('.card[data-detalhe="portal"]');
      await c.scrollIntoViewIfNeeded();
      await c.locator('p').first().click();
      await p.click('.detalhe-fechar');
      ok(!(await p.evaluate(() => document.querySelector('dialog.detalhe').open)), `${nome} ${largura}px X fecha`);
      await c.locator('p').first().click();
      await p.mouse.click(3, 3);
      ok(!(await p.evaluate(() => document.querySelector('dialog.detalhe').open)), `${nome} ${largura}px clique no fundo fecha`);
      await c.focus(); await p.keyboard.press('Enter');
      ok(await p.evaluate(() => document.querySelector('dialog.detalhe').open), `${nome} ${largura}px Enter no cartão abre`);
      await p.keyboard.press('Escape');
      const [popup] = await Promise.all([p.waitForEvent('popup', { timeout: 3000 }).catch(() => null), c.locator('a.card-link').click()]);
      ok(!(await p.evaluate(() => document.querySelector('dialog.detalhe').open)), `${nome} ${largura}px link do cartão não abre o modal`);
      if (popup) await popup.close();
      const lateral = await p.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth);
      ok(!lateral, `${nome} ${largura}px sem rolagem lateral`);
      ok(erros.length === 0, `${nome} ${largura}px sem erro de JS ${JSON.stringify(erros)}`);
      await p.close();
    }
    await nav.close();
  }
  console.log(falhas ? `\n${falhas} FALHA(S)` : '\nTUDO OK');
  process.exit(falhas ? 1 : 0);
})();
